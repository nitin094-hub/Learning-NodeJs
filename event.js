const http = require("http");
const url = require("url");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request 1 occured");
  console.log(url.parse(req.url, true));
  res.end("Request Recieved");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 8000");
});
