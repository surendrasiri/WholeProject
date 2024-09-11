const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productImage : {type : String, require : true},
    productName : {type : String, require : true, unique : true},
    price : {type : Number, require : true},
    description : {type : String},
    availability : {type : Boolean, require : true},
    link : {type : String}
    
})


module.exports = mongoose.model("Product", productSchema);