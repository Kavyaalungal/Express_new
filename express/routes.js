//**********this file is for create routes*************** */


import {Router} from "express"
import * as rh from "./requesthandlers.js"    // there are so many request handlers to import ,from requesthandler file so we use "*" to import all functions and give a common name here "rh"
const router=Router()
router.route("/abcd").get(custoMware,rh.getRequesthandler) //when the condection in the custoMware is true then only the next function is call that is here"getHandler" function 
router.route("/abcd").post(rh.getRequesthandler)
router.route("/get-data").get(rh.frmData)
router.route("/user-data").get(userMware,rh.userData)

export default router

function custoMware(req,res,next){
    let { id }=req.body;
    if(id==22){
        next();
        return;
    }
    res.json("Not accessable")
    }
    function userMware(req,res,next){
        let{uname,password}=req.query;
        console.log(uname);

        let unameregx=/^[0-9A-Za-z]{6,16}$/
        let passregx=/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/
        if((unameregx.test(uname))==true && (passregx.test(password))==true){
            next()
            return;
        }
        res.json("not a valid username and password")
    }