
const mongoose =require("mongoose")



 exports.dbConnection=()=>{
    
    try {
        const params={
            useNewUrlParser:true,
            UseUnifiedTopology:true,
        }
       
        mongoose.connect(process.env.MONGODBURL,params)
        console.log('db connected successfully')
        
    } catch (error) {
        console.log("server side error",error)
        
    }
}
