
const Product = require ('../model/productmodel')
// get all product 
const getProducts =async(req,res)=>{
    try{

        const products = await Product.find({});
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
// get product by id
const getProduct = async(req,res)=>{
    try{
        const {id}= req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
// post product

const postproduct = async (req,res)=>{
    try{
     const product = await Product.create(req.body)
     res.status(200).json(product)
 
    } catch (error){
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 }
 // update

 const updateProduct = async (req, res) => {


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
}

module.exports ={
    getProduct,
    getProducts,
    postproduct,
    updateProduct

}