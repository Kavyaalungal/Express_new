import { Router } from "express"; 
import multer from "multer";

 import * as rh from "./requesthandlers.js";
 const storage = multer.diskStorage({
    destination:"./files",
    filename:(req,file,cb) =>{
        let date = new Date();
        cb(null,String(date) + file.originalname)
    }
 });

 const uploader = multer({storage:storage})

const router = Router();


router.route("/set-data").post(rh.setData);
router.route("/get-data").get(rh.getData);
router.route("/edit-data").put(rh.editData);
router.route("/delete-data").delete(rh.deleteData);


// router.route("/upload").post(uploader.single("profile"),rh.uploadFile); // for uploading single file
router.route("/upload").post(uploader.array("profile",5),rh.uploadFile); // for uploading multiple file
router.route("/get-profile").get(rh.getProfile);

// router.route("/get-data").get(rh.getRequestHandler);
// router.route("/post-data").post(rh.getRequestHandler);

export default router;