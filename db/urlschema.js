
const mongoose=require("mongoose")

const { ObjectId } = mongoose.Schema
 const urlSchema= new mongoose.Schema({

    user:{
        type:ObjectId,
        required:true,
        ref:"user"

    },
         shortId:{
            type:String,
            required:true,
            unique:true
         },
         redirectURL:{
            type:String,
            required:true
         },
         clicks:[{timestamp:{type:Number}}]

 },{timestamps:true})

 const Url= mongoose.model("allurl",urlSchema)

 module.exports=Url