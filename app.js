//Packages Config
var PORT = process.env.PORT || 3000;
(express = require("express")),
  (bodyparser = require("body-parser")),
  (app = express());

const timeline = require("./data/timeline.json");

//App Config
app.set("view engine", "ejs");
app.use("*/public", express.static("public/"));
app.use(bodyparser.urlencoded({ extended: true }));

//Database Schema

//Routes Config
app.get("/", function (req, res) {
  res.render("homepage");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/contact", (req, res) => {
  res.render("contactus");
});

app.get("/webinars", (req, res) => {
  res.render("webinars");
});

app.get("/timeline", (req, res) => {
  res.render("timeline", { data: timeline });
});

app.get("/events", (req, res) => {
  res.render("events");
});

app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});

app.listen(PORT, console.log("Server Up!!"));
