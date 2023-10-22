const express = require("express");
const bodyParser = require("body-parser");
const alert = require("alert");
const bcrypt = require("bcryptjs");
const app = express();
// const mongoose = require("mongoose");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

//database connection

// mongoose
//   .connect("mongodb://127.0.0.1:27017/wwwnamecom")
//   .then(() => {
//     console.log("YAY we're connected!");
//   })
//   .catch((error) => {
//     console.log("Oh no... I can't connect to your database...");
//   });

//home rout

app.get("/", (req, res) => {
  res.render("HomePage.ejs");
});
app.get("/login_SignUp", (req, res) => {
  res.render("LoginSignUpPage.ejs");
});
app.get("/store", (req, res) => {
  res.render("ProductsPage.ejs");
});

//app start

app.listen(3000, () => {
  console.log("Website is running now!");
});

//Open a terminal in the main folder and type nodemon. Once it's connected go to your browser and type "localhost:3000/"
