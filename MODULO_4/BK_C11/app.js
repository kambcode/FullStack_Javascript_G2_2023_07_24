import express from "express";
import bodyParser from "body-parser";
import routes from "./src/routes/index.route.js";
import { logger } from "./src/middlewares/logger.middleware.js";

const app = express();

app.use(bodyParser.json());

app.use(logger);

app.use("/", routes);

export default app;
