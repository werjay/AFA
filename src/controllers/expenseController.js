const expenseService = require("../services/expenseService");

async function parseText(req, res) {
    try {
        const { text } = req.body;

        const data = await expenseService.parseText(text);

        res.json({
            success: true,
            data,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

async function getExpenses(req, res) {
    try {
        const data = expenseService.getExpenses();

        res.json({
            success: true,
            data,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}

module.exports = {
    parseText,
    getExpenses
};