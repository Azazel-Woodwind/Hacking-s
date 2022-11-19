const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3002;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/userRoutes.js"));
app.use("/admin", require("./routes/adminRoutes.js"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
