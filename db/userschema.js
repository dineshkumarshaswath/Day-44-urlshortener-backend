

const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const crypto=require("crypto")

const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
        maxlength:20,
        trim:true
    },
    email:{
        type:String,
        required:true, 
       unique:true,
       trim:true,
    },
    contact:{
        type:String,

    },
    password:{
        type:String,
        required:true
    },

   resetPasswordToken: String,
   resetPasswordTokenExpire: Date,
   createdAt :{
       type: Date,
       default: Date.now
   }

})

  function generatejwttoken(id){
      return jwt.sign({id},process.env.SECRET_KEY);

  }

  userSchema.methods.getResetToken = function(){
   //here is the hash the token

    const token = crypto.randomBytes(20).toString('hex');
    
   // this is insert the field of resetpasswordtoken

   this.resetPasswordToken =  crypto.createHash('sha256').update(token).digest('hex');

    this.resetPasswordTokenExpire = Date.now() + 10 * 60 * 10000;

    return token
}


const User=mongoose.model("user",userSchema);
module.exports= {User,generatejwttoken}