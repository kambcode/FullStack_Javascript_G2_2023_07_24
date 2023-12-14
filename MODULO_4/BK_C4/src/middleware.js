import express from "express";

const app = express();
const port = 3000;

const middleware = (req, res, next) => {
  console.log("I am a middleware");

  next();
};

const middleware2 = (req, res, next) => {
  console.log("I am a middleware 2");

  next();
};

app.use([middleware, middleware2]);

app.get(
  "/",
  [
    (req, res, next) => {
      console.log("I am a middleware 3");

      next();
    },
    (req, res, next) => {
      console.log("I am a middleware 4");

      next();
    },
  ],
  (req, res) => {
    res.send("Hello World!");
  }
);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
