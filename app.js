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

app.get('/contact',(req,res)=>{
  res.render('contactus');
})

app.listen(PORT, console.log("Server Up!!"));
