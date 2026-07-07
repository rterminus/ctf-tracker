// imports
const express = require("express");
const database = require("./db/database");

// app initialization + formatting
const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "pong!" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
