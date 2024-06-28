//comment
const commentsCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"comment created"
        });
    }
    catch(error){
        res.json(error)
    }
}


//comment by id 
const commentbyidCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"comments by id"
        });
    }
    catch(error){
        res.json(error)
    }
}
//delete comment
const commentdeleteCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"comments deleted"
        });
    }
    catch(error){
        res.json(error)
    }
}

const commentUpdateCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"comments updated"
        });
    }
    catch(error){
        res.json(error)
    }
}


module.exports={
    commentsCtrl,
    commentbyidCtrl,
    commentdeleteCtrl,
    commentUpdateCtrl
}