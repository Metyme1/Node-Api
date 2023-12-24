const express = require ('express');
const router = express.Router();
const Product = require('../model/productmodel')
const {getProducts, getProduct,postproduct,updateProduct, deleteProduct} = require('../controller/productController')
router.get('/', getProducts)
router.get('/:id',getProduct)
router.post('/',postproduct)
router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct);

module.exports= router;
