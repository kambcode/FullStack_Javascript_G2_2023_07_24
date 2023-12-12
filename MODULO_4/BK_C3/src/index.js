import http from "http";

http
  .createServer((request, response) => {
    console.log(request.url);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("hello world");  
    response.end();
  })
  .listen(8080);
