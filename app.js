console.log("web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

//MongoDB connect
const db = require("./server").db();


 
// 1 kirish kode
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session (hozircha qo‘shilmagan)
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 ROUTING CODE 
app.get("/HELLO", function(req, res) {
  res.send("<h1>Salom, mening ismim Shakhrambek. Bugun uyga vazifani ishga tushurdim.</h1>");
});

app.get('/author', (req, res) => {
  res.render("author", { user: user });
})

app.get("/", function(req, res) {
  res.render("reja");
});

module.exports = app;

