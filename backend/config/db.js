const mongoose = require("mongoose")

const connectDB = async ()=>{
    try {
         const connect = await mongoose.connect("mongodb://localhost:27017/UsersData") // {because it's a async operration; we've to await it}
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB