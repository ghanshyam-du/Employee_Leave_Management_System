
import express from "express";
const router = express.Router();
import employeeController from "../controller/employeeController.js"

router.post("/add", employeeController.addEmployee);
router.get("/", employeeController.getEmployees);


export default router;
