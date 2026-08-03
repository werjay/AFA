const geminiService = require("../services/geminiService");
const { parseJson } = require("../utils/jsonParser");
const expenseModel = require("../models/expenseModel");

async function parseText(req, res) {
    try {
        const { text } = req.body;

        const result = await geminiService.parseExpense(text);

        const expense = parseJson(result);

        // 寫入資料庫
        const saved = expenseModel.createExpense({
            date: new Date().toISOString().split("T")[0],
            ...expense
        });


        res.json({
            success: true,
            data: {
                id: saved.id,
                expense
            }
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

module.exports = {
    parseText
};