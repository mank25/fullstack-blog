const bcrypt = require("bcryptjs"); 
const User=require("../../models/user/User");
const appErr = require("../../utils/appErr");
//register
const registerCtrl= async (req,res,next)=>{
    const {fullname,email,password}=req.body
    try{
        //if user exists
        const userfound= await User.findOne({email})
        if(userfound){
            return next(appErr("user already Exists"));
        
        }
        //hash password
        const salt = await bcrypt.genSalt(10)
        const passwordHased = await bcrypt.hash(password,salt)
        //register user

        const user =await User.create({
            fullname,
            email,
            password:passwordHased
        });

        res.json({
            status:'success',
            data: user
        });
    }
    catch(error){
        res.json(error)
    }
}
//login
const loginCtrl=async (req,res)=>{
    const {email,password}=req.body;

    try{
        //check if email exist 
        const userfound=await User.findOne({email})
        if(!userfound){
            return res.json({status:"failed",data:"Invalid Credentials"})
        }

        //verify password
        const passwordvalid=await bcrypt.compare(password,userfound.password)
        if(!passwordvalid){
            if(userfound){
                return res.json({status:"failed",data:"Invalid Credentials"})
            }
    
        }
        res.json({
            status:'success',
            data:userfound
        });
    }
    catch(error){
        res.json(error)
    }
}
//details
const detailsCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            data:"User details"
        });
    }
    catch(error){
        res.json(error)
    }
}
//profile
const profileCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"User profile"
        });
    }
    catch(error){
        res.json(error)
    }
}
//profile-photo
const profilePhotoCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"User profile photo upload"
        });
    }
    catch(error){
        res.json(error)
    }
}
//coverPhoto
const coverPhotoCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"User cover photo uploaded"
        });
    }
    catch(error){
        res.json(error)
    }
}
//updatePassword
const updatePasswordCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"password update"
        });
    }
    catch(error){
        res.json(error)
    }
}
//logout
const logoutCtrl=async (req,res)=>{
    try{
        res.json({
            status:'success',
            user:"User logout"
        });
    }
    catch(error){
        res.json(error)
    }
}


module.exports={
    registerCtrl,
    loginCtrl,
    detailsCtrl,
    profileCtrl,
    profilePhotoCtrl,
    coverPhotoCtrl,
    updatePasswordCtrl,
    logoutCtrl
}