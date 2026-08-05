const expenseService = require("../services/expenseService");
const response = require("../utils/responseHelper");

async function parseText(req, res) {
    try {

        const { text } = req.body || {};

        if (!text) {
            return res.status(400).json({
                success:false,
                error:"text is required"
            });
        }

        const data = await expenseService.parseText(text);

        res.json({
            success:true,
            data
        });

    } catch(error) {

        console.error(error);

        res.status(500).json({
            success:false,
            error:error.message
        });
    }
}

async function parseImage(req, res) {

    try {

        if (!req.file) {
            return res.status(400).json({
                success:false,
                error:"image is required"
            });
        }

        const expense = await expenseService.parseImage(
            req.file.buffer,
            req.file.mimetype
        );

        res.json({
            success: true,
            data: expense
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

async function confirmExpense(req, res) {

    try {

        const expense = req.body;

        const data = expenseService.confirmExpense(expense);

        return response.success(
            res,
            data
        );


    } catch(error) {

        console.error(error);

        return response.error(
            res,
            error.message
        );

    }

}

module.exports = {
    parseText,
    parseImage,
    getExpenses,
    confirmExpense
};