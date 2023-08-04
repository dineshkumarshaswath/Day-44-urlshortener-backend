
const Url = require("../db/urlschema");
const shortid=require("shortid")




exports.myUrl=async(req,res)=>{
    try {
        const userurl=await Url.find({user:req.user._id})
        return res.status(200).json({message:"successfully got the data",allurl:userurl})
        
    } catch (error) {
        console.log("server error",error)
        return res.status(500).json({message:"internal server error"}) 
    }
}


exports.postUrl=async(req,res)=>{
    try {
        const {url}=req.body;
        if(!url){
            return res.status(400).json({message:"url is required"})
        }
        const shortId=shortid.generate();
        const urls=await Url.create({
            shortId,
            redirectURL:url,
            user:req.user._id
        })
        return res.status(200).json({message:"successfully created",short:urls.shortId})


        
    } catch (error) {
        console.log("server error",error)
        return res.status(500).json({message:"internal server error"})
        
    }
}


exports.getUrl=async(req,res)=>{
    try {
        const {shortId}=req.params
        const entry= await Url.findOneAndUpdate({shortId},
            {$push:{clicks:{
                timestamp:Date.now()
            }}},{new:true})
            return res.redirect(entry.redirectURL)
        
    } catch (error) {
        console.log("server error",error)
        return res.status(500).json({message:"internal server error"})
    }
}



exports.clickUrl=async(req,res)=>{
    try {
        const {shortId}=req.params
        const totalClick= await Url.findOne({shortId})
        return res.status(200).json({Totalcounts:totalClick.clicks.length,total:totalClick.clicks})
        
    } catch (error) {
        console.log("server error",error)
        return res.status(500).json({message:"internal server error"})
    }
}

exports.deleteUrl=async(req,res)=>{
    try {
        const{id}=req.params
        const deleteshort=await Url.findByIdAndDelete({_id:id})
        return res.status(200).json({message:"successfully the  delete the shorten url"})
        
    } catch (error) {
        console.log("server error",error)
        return res.status(500).json({message:"internal server error"})
    }
}