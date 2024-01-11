import express from "express";
import authRouter from "./auth.route.js";

const routes = express.Router();

routes.use("/auth", authRouter);

export default routes;
