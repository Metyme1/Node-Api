const express = require ('express');
const router = express.Router();
const Product = require('../model/productmodel')
router.get('/', async(req,res)=>{
    try{

        const products = await Product.find({});
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const {id}= req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
router.post('/',async (req,res)=>{
   try{
    const product = await Product.create(req.body)
    res.status(200).json(product)

   } catch (error){
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})
// update


router.put('/:id', async (req, res) => {


    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message: 'cannot find'})
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
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
