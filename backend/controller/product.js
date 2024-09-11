const Product = require("../model/product");

exports.getAllProducts = async (req,res)=>{
    // res.send("Hello form getAllProducts Controller")

    try {
        const products = await Product.find();
        res.status(200).send({message : "Products Fetched", data : products})
    } catch (error) {
        res.status(500).send({message : "error", error : error})
    };
}

exports.getProductById = async (req,res)=>{

    // const id = req.body.id;      //{here I commited a mistake where I placed 'req.params.id' to 'req.body.id' that's why it showed the data : null}
    const id = req.params.id;
    
    try {
        const product = await Product.findById(id);
        res.status(200).send({message : "Product Fetched", data : product});
        // console.log(product);
    } catch (error) {
        res.status(500).send({message : "error", error : error});
    };
}

exports.getAvailableProducts = async (req,res)=>{
    
    try {
        const product = await Product.find({availability : true});
        res.status(200).send({message : "Product Fetched", data : product});
        // console.log(product);
    } catch (error) {
        res.status(500).send({message : "error", error : error});
    };
}

exports.addProduct = async (req, res)=>{
    // res.send("Hello form addProducts Controller")

    // const {one, two, three, four} = req.body;     // we are just taking value in these words like one, two and assigning it to like productImage and productName
    const {productImage, productName, price, description, link} = req.body;

    try {
        const product = new Product({productImage : productImage, productName : productName, price : price, description : description, availability : true, link : link});
        await product.save();
        res.status(201).send({message : "Product Added", data : product});
    } catch (error) {
        res.status(500).send({message : "error", error : error})
    };
}

exports.updateProduct = async (req, res)=>{
    // res.send("Hello form updateProduct Controller")
    // const id = req.body.id;      //{here I commited a mistake where I placed 'req.params.id' to 'req.body.id' that's why it showed the data : null}
    const id = req.params.id;
    const reqBody = req.body;
    console.log(id, reqBody);
    
    try {
        const product = await Product.findByIdAndUpdate(id, reqBody, {new : true});
        res.status(200).send({message : "Product Updated", data : product});
    } catch (error) {
        res.status(500).send({message : "error", error : error});
    };
}

exports.deleteProduct = ()=>{
    res.send("Hello form deleteProduct Controller")
}