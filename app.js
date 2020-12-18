//Packages Config
var PORT = process.env.PORT || 3000;
(express = require("express")),
  (bodyparser = require("body-parser")),
  (app = express());

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


app.get("/partners", (req, res) => {
  res.render("partners");
});
app.get("/press", (req, res) => {
  res.render("press");
});
app.get("/team", (req, res) => {
  res.render("team");
});
app.get("/speakers", (req, res) => {
  res.render("speakers");
});
app.get('/contact', (req, res) => {
  res.render('contactus');
});
app.get('/career', (req, res) => {
  res.render('career');
});


app.listen(PORT, console.log("Server Up!!"));
