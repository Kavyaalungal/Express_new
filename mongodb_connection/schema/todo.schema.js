import mongoose from "mongoose";
 const schema = new mongoose.Schema({
    todo:{
        type:String
    },
    completed:{
        type:Boolean
    }
 })

 export default mongoose.model.Todos || mongoose.model("Todo",schema);