const categories = require("../data/categories.json");

function getCategories() {
    return categories;
}

function getCategoryList() {
    return Object.keys(categories);
}

function getSubcategories(category) {
    return categories[category] || [];
}

module.exports = {
    getCategories,
    getCategoryList,
    getSubcategories,
};