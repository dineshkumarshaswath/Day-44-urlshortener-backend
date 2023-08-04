const express= require("express")


const { loginUser, signupUser, forgotUser, resetUser } = require("../controllers/usercontrol.js")

const router= express.Router();

//this is the router for the signup
router.post("/signup",signupUser)

//this is the router for the login
router.post("/login",loginUser)
//this is forgot password router
router.post('/forgot/password',forgotUser );

//this is reset password router
router.post('/reset/password/:token', resetUser);


 const userRouter=router
 
 module.exports=userRouter