const mongoose = require("mongoose");

let mySchema = mongoose.Schema;
//defining schema
let myTeacherSchema = new mySchema({
  name: String,
  gender: String,
  mobileNumber: {type: String,required: function () {
    return this.email === undefined
    }},
  email: {type: String,required: function () {
    return this.mobileNumber === undefined
    }},
});

const tableName = "teacher";

let teacherData = mongoose.model(tableName, myTeacherSchema);

module.exports = teacherData;
