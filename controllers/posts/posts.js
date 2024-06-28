//create post
const createPostCtrl =async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"post created"
        });
    }
    catch(error){
        res.json(error)
    }
}

//get all post
const allPostCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"post list"
        });
    }
    catch(error){
        res.json(error)
    }
}

//postbyid
const postbyidCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"post by id"
        });
    }
    catch(error){
        res.json(error)
    }
}
//
const deletePostCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"post deleted"
        });
    }
    catch(error){
        res.json(error)
    }
}
//update post 
const updatePostCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"post updated"
        });
    }
    catch(error){
        res.json(error)
    }
}

module.exports={
    createPostCtrl,
    allPostCtrl,
    postbyidCtrl,
    deletePostCtrl,
    updatePostCtrl

}