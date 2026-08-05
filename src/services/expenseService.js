const geminiService = require("./geminiService");
const expenseModel = require("../models/expenseModel");
const { parseJson } = require("../utils/jsonParser");
const categoryService = require("./categoryService");

async function parseText(text) {

    const categories = categoryService.getCategories();

    const result = await geminiService.parseExpense(
        text,
        categories
    );

    const expense = parseJson(result);

const validator = require("../utils/expenseValidator");

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
    date: new Date().toISOString().split("T")[0],
    ...expense
});

    return {
        id: saved.id,
        expense
    };
}

function getExpenses() {
    return expenseModel.getExpenses();
}

function confirmExpense(expense) {

    const saved = expenseModel.createExpense({
        date: new Date().toISOString().split("T")[0],
        ...expense
    });


    return {
        id: saved.id,
        expense
    };

}

module.exports = {
    parseText,
    getExpenses,
    confirmExpense
};