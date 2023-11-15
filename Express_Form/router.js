import { Router } from "express"; 

 import * as rh from "./requesthandlers.js";

const router = Router();
router.route("/set-data").post(rh.setData);
router.route("/get-data").get(rh.getData);
router.route("/edit-data").put(rh.editData);
router.route("/delete-data").delete(rh.deleteData);
router.route("/upload").post(rh.uploadFile);
router.route("/get-profile").get(rh.getProfile);
// router.route("/get-data").get(rh.getRequestHandler);
// router.route("/post-data").post(rh.getRequestHandler);

export default router;