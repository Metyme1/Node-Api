
const Product = require ('../model/productmodel')
// get all product 
const getProduct =async(req,res)=>{
    try{

        const products = await Product.find({});
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const postProduct =

module.exports ={
    getProduct,
}