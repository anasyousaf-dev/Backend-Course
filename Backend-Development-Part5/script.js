const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from Home Page");
});

app.get("/About", (req, res) => {
  res.send("About us Page");
});

app.listen(3000, () => {
  console.log("Server is running on 3000 Port");
});
