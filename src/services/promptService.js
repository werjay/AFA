const fs = require("fs");
const path = require("path");


function getExpensePrompt(categories, text) {

    const promptPath = path.join(
        __dirname,
        "../prompts/expensePrompt.md"
    );

    let prompt = fs.readFileSync(
        promptPath,
        "utf8"
    );


    const categoryText = Object.entries(categories)
        .map(([category, subcategories]) => {

            if (subcategories.length === 0) {
                return category;
            }

            return `${category}:\n- ${subcategories.join("\n- ")}`;

        })
        .join("\n\n");


    prompt = prompt.replace(
        "{{categories}}",
        categoryText
    );


    prompt = prompt.replace(
        "{{userInput}}",
        text
    );


    return prompt;

}


module.exports = {
    getExpensePrompt,
};