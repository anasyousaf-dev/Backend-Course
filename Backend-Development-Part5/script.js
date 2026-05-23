const express = require("express");
const app = express();

app.use(express.json()); // Json based data ko parse karne ke liye use hota hai, jab hum client se json format me data bhejte hain to ye 
                         // middleware us data ko parse karke 
                         // humare request object me available kar deta hai, jisse hum us data ko easily access kar sakte hain.
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












