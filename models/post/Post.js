const mongoose=require("mongoose");
const { type } = require("os");

const postSchema= new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        cataegory:{
            type:String,
            required:true,
            enum:['react js','html','css','nodejs','javascript','other']
        },
        image:{
            type:String,
            required:true,
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        comment:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
        },
    },
    {
        timestamps:true,
    }
);

const Post =mongoose.model('Post',postSchema);

module.exports = Post;