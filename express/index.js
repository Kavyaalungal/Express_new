import express from "express"
const app=express()
app.get("/",(req,res)=>{
    res.json("this is a GET API")
})
app.post("/",(req,res)=>{
    console.log(req.query)
    res.json("this is a POST API")
})
app.listen(3000,(error)=>{
    if(error){
        console.log(error)
        return;
    }
    console.log("server start on the port 3000")
})