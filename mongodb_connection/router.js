import { Router } from "express"; 

 import * as rh from "./requesthandlers.js";

const router = Router();
router.route("/set-todo").post(rh.setTodo);
router.route("/get-todo").get(rh.getTodo);
router.route("/edit-todo").put(rh.editTodo)
router.route("/delete-todo").delete(rh.deleteTodo)
// router.route("/get-data").get(rh.getRequestHandler);
// router.route("/post-data").post(rh.getRequestHandler);

export default router;