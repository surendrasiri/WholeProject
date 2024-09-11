const Order = require('../model/order');


exports.getAllOrder = async (req, res)=>{

    try {
        const orders = await Order.find();
        res.status(200).send({message : "Orders Fetched", data : orders});
    } catch (error) {
        res.status(500).send({message : "error", error : error});
    }
};


exports.getOrderByUserId = async (req, res)=>{

    const id = req.params.id;

    try {
        const orders = await Order.find({userId : id});
        res.status(200).send({message : "Orders Fetched", data : orders});
    } catch (error) {
        console.log(error);
        res.status(500).send({message : "error", error : error});
    }
};


exports.addOrder = async (req, res)=>{
    
    const {productId, productName, price, description, quantity, address, city, state, pinCode, userId, userName, userContactNumber} = req.body;

    try {
        const order = new Order({productId : productId, productName : productName, price : price, description : description, quantity : quantity, address : address, city : city, state : state, pinCode : pinCode, userId : userId, userName : userName, userContactNumber : userContactNumber, status :"Pending"});
        await order.save();
        res.status(201).send({message : "Order Created", data : order});
    } catch (error) {
        res.status(500).send({message : "error", error : error});
    }
};


exports.updateOrder = async (req, res)=>{

    const id = req.params.id;
    const reqBody = req.body;

    try {
        const order = await Order.findByIdAndUpdate(id, reqBody, {new : true});
        res.status(200).send({message : "Order Updated", data : order});
    } catch (error) {
        res.status(500).send({message : "error", error : error});
    }
};