//import module
var express = require("express")
//model for teacher 
const teacherModel = require("../models/teacherModel")

let router = express.Router();

//Post API
router.post("/apiv2.0/teacher",(req, res) => {
    var teacherOne = new teacherModel({
        name: req.body.name,
        gender: req.body.gender,
        mobileNumber: req.body.mobileNumber,
        email: req.body.email,
    })

    teacherOne
    .save()
    .then((data) => {
        console.log("Data successfully stored : ", data);
        return res.status(200).json({ data: "Data successfully stored.." });
      })
      .catch((e) => {
        return res.status(201).json({ data: "Error occured: ", e });
      });
})

module.exports = router;
