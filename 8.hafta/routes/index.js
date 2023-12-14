const express=require('express');

const postsRoute=require("./posts.route")
const authorRoute=require("./author.route")

const router=express.Router();
router.use("/",postsRoute);
router.use("/api",authorRoute);

module.exports=router;