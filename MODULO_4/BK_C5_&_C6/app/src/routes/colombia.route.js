import express from "express";
import { getAllDepartments } from "../controllers/colombia.controller.js";

const colombiaRouter = express.Router();

colombiaRouter.get("/",getAllDepartments);

export default colombiaRouter;
