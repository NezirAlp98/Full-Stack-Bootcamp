const express=require("express")

const authRoute=require("./auth.route")

const bardakRoute=require("./bardak.route")

const router=express.Router()

router.use("/auth",authRoute)
router.use("/urun",bardakRoute)
module.exports=router