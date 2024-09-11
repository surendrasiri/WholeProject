const express = require("express")
const productController = require("../controller/product")

const router = express.Router()



router.get("/getAllProducts", productController.getAllProducts) // http://localhost:5000/product/getAllProducts

router.get("/getProductById/:id", productController.getProductById)

router.get("/getAvailableProducts", productController.getAvailableProducts)

router.post("/addProduct", productController.addProduct)

router.put("/updateProduct/:id", productController.updateProduct)

router.delete("/deleteProduct/:id", productController.deleteProduct)


module.exports = router