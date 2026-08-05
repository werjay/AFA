const expenseCategories = require("../config/expenseCategories.json");


function getExpenseCategories() {
    return expenseCategories;
}


module.exports = {
    getExpenseCategories
};