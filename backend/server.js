const express = require ("express");

const userRoutes = require("./route/user");
const productRoutes = require("./route/product");
const connectDB = require("./config/db");
const cors = require("cors");
const orderRoutes = require('./route/order');

const app = express();
connectDB();             // {we'll call connectDB after importing and making the database}

app.use(express.json());
app.use(cors());  // {then we'll call cors in after importing it}

app.use("/user", userRoutes);       // http://localhost:5000/user -- this is the addres of this route/server

// here we are associating "/user", to userRoutes; simply we're saying that if someone comes to /user redirect him to
// userRoutes

app.use("/product", productRoutes);   // http://localhost:5000/product --

// {we're making now a product route so that we can add, get, update and delete the products on this route or we can
// make routes of get, add, update and delete routes to add, get, update and delete the products}

app.use("/order", orderRoutes);    // http://localhost:5000/order 

// app.get("/", (req, res)=>{
//     res.send("Hello Bro I'm fine what about you")
// })

// app.get("/getUsers", (req, res)=>{
//     res.send("you are on getUser page")
// })

// app.post("/createUser", (req, res)=>{
//     console.log(req.body)
//     res.send("Hello form createuser api")
// })

// app.put("/updateuser", (req, res)=>{
//     res.send("Hello from updateuser api")
// })

// after making route folder we'll remove these all 
// get,post,put,delete methods or these routes
// because we are going to make these all methods or
// routes in route folder


app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})