const geminiService = require("./geminiService");
const expenseModel = require("../models/expenseModel");
const { parseJson } = require("../utils/jsonParser");

async function parseText(text) {

    const result = await geminiService.parseExpense(text);

    const expense = parseJson(result);

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


module.exports = {
    parseText,
    getExpenses
};