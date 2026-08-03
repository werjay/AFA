const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        service: "AFA API",
        version: "1.0.0"
    });
});

module.exports = router;
