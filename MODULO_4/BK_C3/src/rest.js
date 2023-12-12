import http from "http";

const port = 3600;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/users") {
    res.write("users");
    res.end();
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
//Resource Identifies: /api/v1/pokemon/385
//query parameters: /api/v2/pokemon?limit=10&offset=18
