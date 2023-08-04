const express=require("express")
const { isAuthenticated } = require("../controllers/authentication")
const { postUrl, getUrl, clickUrl, deleteUrl, myUrl } = require("../controllers/urlcontrol")



const router=express.Router()

router.route("/post/url").post(isAuthenticated,postUrl)
router.route("/redirect/:shortId").get(isAuthenticated,getUrl)
router.route("/total/:shortId").get(isAuthenticated,clickUrl)
router.route("/delete/:id").delete(isAuthenticated,deleteUrl)
router.route("/myurl").get(isAuthenticated,myUrl)

const urlRouter=router

module.exports=urlRouter
