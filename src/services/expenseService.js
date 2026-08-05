const geminiService = require("./geminiService");
const expenseModel = require("../models/expenseModel");
const { parseJson } = require("../utils/jsonParser");
const categoryService = require("./categoryService");
const tagService = require("./tagService");
const validator = require("../utils/expenseValidator");
const mockExpense = require("../config/mockExpense");


function getToday() {

    return new Date()
        .toLocaleDateString(
            "zh-TW",
            {
                timeZone:"Asia/Taipei"
            }
        )
        .replace(/\//g,"-");

}

function processExpense(expense) {

    const validation = validator.validateExpense(expense);

    if (!validation.valid) {

        return {
            needConfirm: true,
            reason: validation.error,
            message: validation.message,
            expense
        };

    }


    const saved = expenseModel.createExpense({
        date: getToday(),
        ...expense
    });


    return {
        id: saved.id,
        expense
    };

}


function handleExpenseResult(result) {

    const expense = parseJson(result);

    return processExpense(expense);

}

async function parseText(text) {

    if (process.env.AI_ENABLED === "false") {

        return processExpense(mockExpense);

    }


    const categories = categoryService.getExpenseCategories();
    const tags = tagService.getTags();


    const result = await geminiService.parseExpense(
        text,
        categories,
        tags
    );


    return handleExpenseResult(result);

}


async function parseImage(buffer, mimeType) {

    if (process.env.AI_ENABLED === "false") {

        return processExpense(mockExpense);

    }


    const categories = categoryService.getExpenseCategories();
    const tags = tagService.getTags();


    const result = await geminiService.parseExpenseImage(
        buffer,
        mimeType,
        categories,
        tags
    );


    return handleExpenseResult(result);

}


function getExpenses() {
    return expenseModel.getExpenses();
}


function confirmExpense(expense) {

    const saved = expenseModel.createExpense({
        date: getToday(),
        ...expense
    });


    return {
        id: saved.id,
        expense
    };

}


module.exports = {
    parseText,
    parseImage,
    getExpenses,
    confirmExpense
};