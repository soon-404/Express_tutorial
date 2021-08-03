const express = require("express");
const path = require("path");
const users = require("./Users");
const logger = require("./middleware/logger");

const app = express();

// Init Middleware
app.use(logger);

// Get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Get single users
app.get("/api/users/:id", (req, res) => {
  let found = users.some((user) => user.id == req.params.id);
  if (found) {
    res.json(users.filter((user) => user.id == req.params.id));
  } else {
    res.status(400).json({ msg: `No users with the id of ${req.params.id}` });
  }
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
