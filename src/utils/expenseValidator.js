const categoryService = require("../services/categoryService");


function validateExpense(expense) {

    const categories = categoryService.getExpenseCategories();

    // 檢查主分類
    if (!categories.hasOwnProperty(expense.category)) {

        return {
            valid: false,
            error: "INVALID_CATEGORY",
            message: `不存在的分類：${expense.category}`
        };

    }


    // 如果有子分類，檢查子分類
    const subcategories = categories[expense.category];

    if (
        expense.subcategory &&
        !subcategories.includes(expense.subcategory)
    ) {

        return {
            valid: false,
            error: "INVALID_SUBCATEGORY",
            message:
                `不存在的子分類：${expense.category} > ${expense.subcategory}`
        };

    }


    return {
        valid: true
    };

}


module.exports = {
    validateExpense
};