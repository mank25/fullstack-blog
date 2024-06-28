const mongoose= require("mongoose")

const dbConnect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db Connected")
    }
    catch(error){
        console.log("error : ",error)
    }
}

dbConnect();