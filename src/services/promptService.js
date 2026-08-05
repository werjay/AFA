const fs = require("fs");
const path = require("path");


function getExpensePrompt(categories, text) {

    const template = fs.readFileSync(
        path.join(__dirname, "../prompts/expensePrompt.md"),
        "utf8"
    );

    return template
        .replace(
            "{{categories}}",
            categories
        )
        .replace(
            "{{text}}",
            text
        );
}


function getExpenseImagePrompt() {

    return fs.readFileSync(
        path.join(
            __dirname,
            "../prompts/expenseImagePrompt.md"
        ),
        "utf8"
    );

}


module.exports = {
    getExpensePrompt,
    getExpenseImagePrompt
};