const geminiService = require("../services/geminiService");

async function parseText(req, res) {
    try {
        const { text } = req.body;

        const result = await geminiService.parseExpense(text);

        res.json({
            success: true,
            data: JSON.parse(result)
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