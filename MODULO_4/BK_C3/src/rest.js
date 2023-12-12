import http from "http";

const port = 3600;

//JSON.stringify(value, null, 2)

const authors = JSON.stringify(
  [
    { name: "Paulo Coelo", year: 1947 },
    { name: "Gabriel Garcia", year: 1927 },
  ],
  null,
  4
);

const books = JSON.stringify(
  [
    { title: "The alchemist", author: "Paulo Coelo", year: 1988 },
    { title: "100 años de soledad", author: "Gabriel Garcia", year: 1967 },
  ],
  null,
  4
);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" }); //application/json

  switch (req.url) {
    case "/authors":
      res.writeHead(200);
      res.end(authors);
      break;

    case "/books":
      res.writeHead(200);
      res.end(books);
      break;

    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "not found" }));
      break;
  }
});

server.listen(port, () => {
  console.log(`Server Listening at Port ${port}`);
});

//localhost:3000/
//localhost:3000/users
//localhost:3000/books

//www.lala.com/users
//www.lala.com/books

// Api restful

//schema: http:// https://
//host: www.lala.com
//path: /api/v1/pokemon
//Resource Identifies: /api/v1/pokemon/picachu
//query parameters: /api/v2/pokemon?limit=10&offset=18
