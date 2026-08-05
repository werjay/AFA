const { GoogleGenerativeAI } = require("@google/generative-ai");

const promptService = require("./promptService");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});


async function generate(prompt) {

    const result = await model.generateContent(prompt);

    const response = await result.response;

    return response.text();

}


async function parseExpense(text, categories) {

    const prompt = promptService.getExpensePrompt(
        categories,
        text
    );

    return await generate(prompt);

}


module.exports = {
    generate,
    parseExpense
};