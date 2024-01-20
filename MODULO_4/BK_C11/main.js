import app from "./app.js";
import "dotenv/config";

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
