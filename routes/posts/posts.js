const express=require("express");
const { createPostCtrl, allPostCtrl, postbyidCtrl, deletePostCtrl, updatePostCtrl } = require("../../controllers/posts/posts");

const postRoutes = express.Router()

//    post route

//post
postRoutes.post("/",createPostCtrl);

//post list
postRoutes.get("/",allPostCtrl);

//find post by id
postRoutes.get("/:id",postbyidCtrl);

//post delete
postRoutes.delete("/:id",deletePostCtrl);

//post updated
postRoutes.put("/:id",updatePostCtrl);

module.exports= postRoutes;