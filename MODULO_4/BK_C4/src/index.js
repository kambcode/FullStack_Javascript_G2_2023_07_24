import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/post", (req, res) => {
  res.send("post");
});

app.put("/put", (req, res) => {
  res.send("put");
});

app.delete("/delete", (req, res) => {
  res.send("delete");
});

app.all("/all", (req, res) => {
  res.send("all");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/pokemons/:pokemonId", (req, res) => {
  const response = req.params; //get data from route params 

  res.send(response?.pokemonId);
});

app.get("/pokemons", (req, res) => {

  //http://localhost:3000/pokemons?limit=30&offset=10

  const params = req.query; //get data from queryParams

  res.send(params?.limit);
});

app.post("/users", (req, res) => {
  const response = req.body; //get data from body

  res.send(response);
});

//import http from "http";

// http
//   .createServer((req, res) => {
//     res.write("hello world");

//     if (req.url === "/users") {
//       res.write("users");
//     }
//   })
//   .listen();
