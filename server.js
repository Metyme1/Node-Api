const express = require ('express')
const app = express ()
const Product = require('./model/productmodel')
const mongoose = require ('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
// routes

app.get('/',(req,res)=>{
    res.send("hello")

})

app.get('/product', async(req,res)=>{
    try{

        const products = await Product.find({});
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
app.get('/product/:id',async(req,res)=>{
    try{
        const {id}= req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
app.post('/product',async (req,res)=>{
   try{
    const product = await Product.create(req.body)
    res.status(200).json(product)

   } catch (error){
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})
// update


app.put('/product/:id', async (req, res) => {


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

app.delete('/product/:id', async (req, res) => {
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

mongoose.set("strictQuery", false)
mongoose.
connect("mongodb+srv://mety:Ma_ma-1234@cluster0.hrpb1kp.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to Mongoose")
    app.listen(3000, () =>{
        console.log('Node API app is running on port 3000')
    })
    
}).catch((error)=>{
    console.log(Error)
})