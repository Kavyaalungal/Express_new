import express from "express";

import router from "./router.js";
import dotenv from "dotenv";
import conn from "./connection.js";

dotenv.config()

const app = express();

app.use(express.json({
    limit:"25mb"
}))
    
   

app.use(express.urlencoded({
    extended:true,
    limit:"25mb"
}))

 app.use("/",express.static("./static"))
 app.use("/api",router);



conn().then(()=>{
    app.listen(process.env.PORT, error =>{
    if(error){
        console.log(error);
        return;
    }
    console.log("server started on port : http://localhost" + process.env.PORT);

})
})
.catch(error=>{
    console.log(error);
})