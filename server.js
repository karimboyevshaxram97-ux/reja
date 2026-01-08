const http = require("http");
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://karimboyevshaxram97_db_user:CGdS470ZQqjnYJo5@cluster0.xlz5ryq.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB:", err);
    } else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app"); // bu sizning Express app faylingiz bo'lishi kerak
      const server = http.createServer(app);
      const PORT = 3011;
      server.listen(PORT, () => {
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
      });
    }
  }
);


