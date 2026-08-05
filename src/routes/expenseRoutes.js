const express = require("express");

const router = express.Router();

const expenseController = require("../controllers/expenseController");
const upload = require("../middleware/upload");


router.post(
    "/",
    expenseController.parseText
);


router.post(
    "/image",
    upload.single("image"),
    expenseController.parseImage
);


router.post(
    "/confirm",
    expenseController.confirmExpense
);


router.get(
    "/",
    expenseController.getExpenses
);


module.exports = router;