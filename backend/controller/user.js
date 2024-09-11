const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res)=>{
    // res.send("Hello from Get User Controller") // now we have to start writing logics here
    
    try {
        const users = await User.find();
        res.status(200).send({message : "User Fetched", data : users});
    } catch (error) {
        res.status(500).send({message : "error", error : error})
    }
}

exports.createUser = async (req, res)=>{
    // res.send("Hello from Create User Controller")

    const {firstName, lastName, email, password, mobileNumber, role} = req.body
    console.log(req.body)
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(password);
    // console.log(mobileNumber);
    try {
        const existingUser = await User.findOne({email : email});
        if(existingUser){
            return res.status(500).send({message : "User already exist"})
        }
        const newPassword = await bcrypt.hash(password, 12);  // {by bcrypt we are going to encrypt our password also await will be used}
        const user = new User({firstName : firstName, lastName : lastName, email : email, password : newPassword, mobileNumber : mobileNumber, role : role, status : true});
        await user.save();
        res.status(201).send({message : "User Added", data : user});
    } catch (error) {
        res.status(500).send({error : "error", error : error});
    }
}

exports.updateUser = async (req, res)=>{
    // console.log(req.params);
    const id = req.params.id;
    const reqBody = req.body;   // here i committed a mistake of changing {req.body} to {res.send} which i found after a long time searching
    console.log(id , reqBody)
    // console.log(reqBody);
    try {
        const user = await User.findByIdAndUpdate(id, reqBody,{new : true}); // we'll do new:true to put the new data in "user" without it it shows last time data
        res.status(200).send({message : "User Updated", data : user});
    } catch (error) {
        console.log(error)
        res.status(500).send({message : "error", error : error});
        
    }
    // res.send("Hello from Update User Controller")
}

exports.deleteUser = async (req, res)=>{
    const id = req.params.id;
    // const reqBody = res.body; // no need to give reqBody 
    try {
        // const user = await User.findByIdAndDelete(id, reqBody); // no need to give reqBody here 
        const user = await User.findByIdAndDelete(id);
        res.status(200).send({message : "User Deleted", data : user});
    } catch (error) {
        res.status(500).send({message : "error", error : error});
    }
    // res.send("Hello from Delete User Controller")
}

exports.login = async (req, res)=>{
    const {email, password} = req.body
    console.log(email);
    console.log(password);
    const user = await User.findOne({email : email})
    console.log(user);
    if(!user){
        return res.status(404).send({message :"User not found"});
    }
    if(!user.status){
        return res.status(400).send({message : "User Account Deactivated"})
    }
    const validUser = await bcrypt.compare(password, user.password); //{this will be used to compare encrypted password to nomral password also await will be used}
    if(!validUser){
        return res.status(401).send({message : "Incorrect Password"});
    }
    // {now we are going to generate a token before last return because after a return compiler don't read the code
    //  and we can also send the token with data and also after the verification process; we make the token in login route}

    const token = jwt.sign({id : user._id, email : user.email, role : user.role}, "thisIsMyJwtSecret",{expiresIn : "10h"})
    // {"thisIsMyJwtSecret" is a secret key which is used to verify the user from frontend}
    // {after making token we'll sent it in data by making {data : user, token : token}

    return res.status(200).send({message : "Logged In", data : {data : user, token : token}});    
    // if(password !== user.password){
    //     return res.status(401).send({message : "Incorrect Password"});  // {there is no use of this password verification because}
    // }
    // return res.status(200).send({message : "Logged In", data : user});  // {because encrypted paassword verification step is added; before that it was useful}

    // {here we can't use else if because in {else if} only one condition runs;
    // check shubham sir class date:03-06-2024 on duration: 01:20:00}
    
    // console.log(email, password);
    // res.send("Welcome to Login Controller");
} 