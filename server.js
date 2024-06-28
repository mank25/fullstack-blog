require('dotenv').config()
const express = require('express');
const userRoutes = require('./routes/users/users');
const postRoutes = require('./routes/posts/posts');
const commentRoutes = require('./routes/comments/comment');
const globalErrHandler = require('./middlewares/globalErrHandler');

require("./config/dbConnect");

const app=express();


//middleware
app.use(express.json())
//routes
app.use("/Blog/user",userRoutes);
app.use("/Blog/post",postRoutes);
app.use("/Blog/comments",commentRoutes);
//global err handler
app.use(globalErrHandler)




const PORT = process.env.PORT || 9000;
app.listen(PORT,console.log(`server is up ata port ${PORT}`))