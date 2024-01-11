import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import routes from "./src/routes/index.route.js";

const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
