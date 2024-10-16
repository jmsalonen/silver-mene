require('dotenv').config()

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/hello", (req, res) => {
  res.send("Hello Hello Hello!!! " + new Date().toISOString());
});

app.use("*", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
