const express = require('express');
const orderController = require('../controller/order');

const router = express.Router();


router.get("/getAllOrder", orderController.getAllOrder);

router.get("/getOrderByUserId/:id", orderController.getOrderByUserId);

router.post("/addOrder", orderController.addOrder);

router.put("/updateOrder/:id", orderController.updateOrder);



module.exports = router;