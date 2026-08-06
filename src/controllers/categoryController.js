const categoryService = require("../services/categoryService");


function getExpenseCategories(req, res) {
    try {

        const categories = categoryService.getExpenseCategories();

        res.json({
            success: true,
            data: categories
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }
}


module.exports = {
    getExpenseCategories
};