const db = require("../database/sqlite");


function createExpense(expense) {

    const stmt = db.prepare(`
        INSERT INTO expenses (
            date,
            name,
            amount,
            currency,
            category,
            subcategory,
            merchant,
            tag,
            note
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);


    const result = stmt.run(
        expense.date,
        expense.name,
        expense.amount,
        expense.currency,
        expense.category,
        expense.subcategory,
        expense.merchant,
        JSON.stringify(expense.tag),
        expense.note
    );


    return {
        id: result.lastInsertRowid
    };
}


function getExpenses() {

    const stmt = db.prepare(`
        SELECT *
        FROM expenses
        ORDER BY id DESC
    `);

    const expenses = stmt.all();

    return expenses.map(expense => ({
        ...expense,
        tag: JSON.parse(expense.tag || "[]")
    }));
}


module.exports = {
    createExpense,
    getExpenses
};