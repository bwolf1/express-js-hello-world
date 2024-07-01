// From https://expressjs.com/en/starter/hello-world.html
// Run with: node index.js
// Access with: http://localhost:3000/

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/brian", (req, res) => {
  res.send("Hey Man!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
