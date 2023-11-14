//**********this file is for create routes*************** */


import {Router} from "express"
import * as rh from "./request-handlers1.js"    
const router=Router()
router.route("/set-todo").post(rh.setTodo)
router.route("/get-todo").get(rh.getTodo)
router.route("/edit-todo").put(rh.editTodo)
router.route("/delete-todo").delete(rh.deleteTodo)
export default router

