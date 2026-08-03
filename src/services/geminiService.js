const { GoogleGenerativeAI } = require("@google/generative-ai");

const expensePrompt = require("../prompts/expensePrompt");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});


async function parseExpense(text) {

    const prompt = `
${expensePrompt}

使用者輸入：

${text}
`;

    const result = await model.generateContent(prompt);

    const response = result.response;

    return response.text();
}


module.exports = {
    parseExpense,
};