import express from "express"

const router = express.Router();

import leaveController from "../controller/leavecontroller.js"

router.post("/apply", leaveController.applyLeave);
router.get("/", leaveController.showLeaves);


export default router;
