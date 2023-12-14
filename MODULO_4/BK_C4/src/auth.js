import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const checkName = (req, res, next) => {
  const body = req.body;

  if (body.name) {
    return next();
  }

  res.status(400).send("please send a name value");
};

const checkPassword = (req, res, next) => {
  const body = req.body;

  if (body.password) {
    return next();
  }

  res.status(400).send("please send a password value");
};

// app.use(checkName)

app.post("/login", [checkName, checkPassword], (req, res) => {
  res.status(202).send("data is ok");
});

app.listen(3000, () => {
  console.log(`Server is listening on port ${port}`);
});
