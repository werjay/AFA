require("dotenv").config();

require("./src/database/sqlite");

const express = require("express");
const cors = require("cors");

const healthRoutes = require("./src/routes/healthRoutes");
const expenseRoutes = require("./src/routes/expenseRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/categories", categoryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
