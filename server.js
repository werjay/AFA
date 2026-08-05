require("dotenv").config();

require("./src/database/sqlite");

const express = require("express");
const cors = require("cors");

const healthRoutes = require("./src/routes/healthRoutes");
const expenseRoutes = require("./src/routes/expenseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
