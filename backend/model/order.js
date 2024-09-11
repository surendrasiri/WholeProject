const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    productId : {type : String, require : true},
    productName : {type : String, require : true},
    price : {type : Number, require : true},
    description : {type : String, require : true},
    quantity : {type : Number, require : true},
    address : {type : String, require : true},
    city : {type : String, require : true},
    state : {type : String, require : true},
    pinCode : {type : Number, require : true},
    userId : {type : String, require : true},
    userName : {type : String, require : true},
    userContactNumber : {type : String, require : true}
})


module.exports = mongoose.model("Order", orderSchema)