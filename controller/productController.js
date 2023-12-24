
const Product = require ('../model/productmodel')
const asyncHandler = require('express-async-handler')
// get all product 
const getProducts =asyncHandler(async(req,res)=>{
    try{

        const products = await Product.find({});
        res.status(200).json(products)
    }catch(error){
        res.status (500)
        throw new Error(error.message)
    }
})
// get product by id
const getProduct = asyncHandler(async(req,res)=>{
    try{
        const {id}= req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    }catch(error){
        res.status (500)
        throw new Error(error.message)
    }
})
// post product

const postproduct = asyncHandler(async (req,res)=>{
    try{
     const product = await Product.create(req.body)
     res.status(200).json(product)
 
    } catch (error){
        res.status (500)
        throw new Error(error.message)
    }
 })
 // update

 const updateProduct = asyncHandler(async (req, res) => {


    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`)
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
    }
    catch(error){
        res.status (500)
        throw new Error(error.message)
    }
})
// delete

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
           res.status(404);
           throw new Error(`cannot find any product with ID ${id}`)
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports ={
    getProduct,
    getProducts,
    postproduct,
    updateProduct,
    deleteProduct

}