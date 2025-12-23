console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1
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
app.get("/GIFT", function(req, res) {
  res.send("<h1> XUSH KELIBSIZ SAHIFAMGA</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
