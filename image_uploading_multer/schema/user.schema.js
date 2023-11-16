import mongoose from "mongoose";
 const schema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    hobbies:{
        type:Array
    }
 })

 export default mongoose.model.Users || mongoose.model("User",schema);