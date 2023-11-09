import { Router } from "express"; 

 import * as rh from "./request-handlers.js";

const router = Router();

router.route("/get-data").get(rh.getRequestHandler);
router.route("/post-data").post(rh.getRequestHandler);

export default router;