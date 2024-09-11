const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName : {type : String, require : true},
    lastName : {type : String},
    email : {type : String, require : true, unique : true},
    password : {type : String, require : true},
    mobileNumber : {type : String, require : true},
    role : {type : String, require : true},
    status : {type : Boolean, require : true}
})


module.exports = mongoose.model("User", userSchema);