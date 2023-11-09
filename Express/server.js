
import express from "express";

import router from "./router.js";

const app = express();

app.use(express.json())

 app.use("/",express.static("./static"))
 app.use("/api",router);



app.listen(3000, error =>{
    if(error){
        console.log(error);
        return;
    }
    console.log("server started on port : http://localhost:3000");

})