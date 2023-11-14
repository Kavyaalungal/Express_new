
//................database connection file.............
import mongoose from "mongoose";
export default function conn(){
    return mongoose.connect(process.env.DB_URI);  //URI----uniform resource identifier
}