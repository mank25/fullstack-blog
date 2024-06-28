const express=require("express");
const { commentsCtrl, commentbyidCtrl, commentdeleteCtrl, commentUpdateCtrl } = require("../../controllers/comments/comments");

const commentRoutes = express.Router()

//    comment route

//comments
commentRoutes.post("/",commentsCtrl);

//find comment by id
commentRoutes.get("/:id",commentbyidCtrl);

//comments delete
commentRoutes.delete("/:id",commentdeleteCtrl);

//comments updated
commentRoutes.put("/:id",commentUpdateCtrl);


module.exports= commentRoutes