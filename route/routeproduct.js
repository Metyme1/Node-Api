const express = require ('express');
const router = express.Router();
const Product = require('../model/productmodel')
const {getProducts, getProduct,postproduct,updateProduct} = require('../controller/productController')
router.get('/', getProducts)
router.get('/:id',getProduct)
router.post('/',postproduct)
router.put('/:id', updateProduct)
// Deletee

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports= router;
