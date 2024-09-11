const express = require("express")         // http://localhost:5000/user  ----- here this is already here
const userController = require("../controller/user")

const router = express.Router()


// router.get("/getUsers", ()=>{})           // http://localhost:5000/user/getUsers  - send here one to go to /getUsers
// now we'll associate functions to the routes for all 4 routes
// like we're replacing "()=>{}" with the functions we made in controller; like we're doing below

router.get("/getUsers", userController.getAllUsers)


// router.get("/getUserById", ()=>{})   // {to get only one user}

// router.post("/createUser", ()=>{})        // http://localhost:5000/user/createUser

router.post("/createUser", userController.createUser)


router.post("/login", userController.login)  // http://locahost:5000/user/login


// router.put("/updateUser", ()=>{})

router.put("/updateUser/:id", userController.updateUser) // we'll use id as params to update that user


// router.delete("/deleteUser", ()=>{})

router.delete("/deleteUser/:id", userController.deleteUser)




module.exports = router;