const express=require("express");
const { registerCtrl, loginCtrl, detailsCtrl, profileCtrl, profilePhotoCtrl, coverPhotoCtrl, updatePasswordCtrl, logoutCtrl } = require("../../controllers/users/users");


const userRoutes = express.Router()

//    user route

//register
userRoutes.post("/register",registerCtrl);

//login
userRoutes.post("/login",loginCtrl);

//User Details
userRoutes.get("/:id",detailsCtrl);

//profile
userRoutes.get("/profile/:id",profileCtrl);

//profile-photo-upload
userRoutes.put("/profile-photo-upload/:id",profilePhotoCtrl);

//cover-photo-upload 
userRoutes.put("/cover-photo-upload/:id",coverPhotoCtrl);

//update password
userRoutes.put("/update-password/:id",updatePasswordCtrl);

//logout 
userRoutes.get("/logout",logoutCtrl);

module.exports= userRoutes