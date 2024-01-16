import express from "express";

const port = 3000;
const server = express();

server.use(express.json()); //hace lo mismo que el body-parse

server.get("/", (req, res) => {
  res.status(200).send({ message: "Hello world" });
});

export default server;
