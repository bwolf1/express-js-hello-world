// From https://expressjs.com/en/starter/hello-world.html
// Run with: node index.js
// Access with: http://localhost:3000/

const birds = require("./birds");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.redirect("/brian"); // 302 Found,
});

app.get("/brian", (req, res) => {
  res.json({ message: "Hey Man!" });
});

app.use("/birds", birds);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
