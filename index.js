const express = require("express");
const path = require("path");
const users = require("./Users");
const logger = require("./middleware/logger");

const app = express();

// Init Middleware
app.use(logger);

// Body parse middleware ตอน post ให้ข้อมูลแสดงออกมา
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use("/api/users", require("./routes/api/users"));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
