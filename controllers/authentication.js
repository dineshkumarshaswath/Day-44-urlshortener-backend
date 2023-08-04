
const jwt=require("jsonwebtoken");
const { User } = require("../db/userschema.js");


 exports.isAuthenticated = async ( req, res,  next) => {

    try {


        if (req.headers) {
            let token;
            token = await req.headers["x-auth-token"]
            if (!token) {
                return res.status(400).json({ message: "access denied" })
            } else {
                const decode = jwt.verify(token, process.env.SECRET_KEY);
                req.user = await User.findById(decode.id).select('id name ')
                console.log(req.user)
                next()
            }


        }



    } catch (error) {
        console.log('server error', error)
        return res.status(500).json({ message: 'internal server error' })

    }





}



