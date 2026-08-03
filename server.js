require("dotenv").config();

const express = require("express");
const cors = require("cors");

const healthRoutes = require("./src/routes/healthRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
