require('dotenv').config()
const express = require ('express')
const app = express ()
const productRoute = require('./route/routeproduct')
const userroute = require('./route/userroute')
const errorMiddlware = require('./middleware/errormiddleware')
var cors = require('cors')


const mongoose = require ('mongoose')

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

var corsOptions = {
    origin: 'add ip address here',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors(corsOptions))
// routes

app.use('/api/product',productRoute);
app.get('/',(req,res)=>{
    // throw new error ('fake error')
    res.send("hello")

})
 app.use(errorMiddlware);

mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(()=>{
    console.log("connected to Mongoose")
    app.listen(PORT, () =>{
        console.log(`Node API app is running on port ${PORT}`)


    })
    
}).catch((error)=>{
    console.log(Error)
})