import mongoose from "mongoose"     
const schema=new mongoose.Schema({   //create schema structure
    todo:{
        type:String
    },
    completed:{
        type:Boolean
    }
})
export default mongoose.todos||  mongoose.model("todo",schema);   