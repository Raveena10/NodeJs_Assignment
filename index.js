//import modules
var express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

//router
var router = require("./routes/teacherRoute")

var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)

//Database connection
mongoose.connect("mongodb://127.0.0.1:27017/teacher")
mongoose.connection.on("connected", () => {
    console.log("CONNECTED TO TEACHER DATABASE ");
  });
mongoose.connection.on("error", (err) => {
    console.log("CONNECTION ERROR", err);
  });

//port to listen on server
app.listen(3001, () => {
    console.log("Listining on port 3001");
  });

module.exports = app;
