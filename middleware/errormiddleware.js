const { model } = require("mongoose")

const errorMiddlware = (err,req,res,next)=>{
    console.log("there is error")
    const statuscode = res.statuscode? res.statuscode:500
    res.json({message:err.message,stack:process.env.NODE_ENV === "development "? err.stack:null})
}

module.exports = errorMiddlware;