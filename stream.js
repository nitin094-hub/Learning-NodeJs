const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(url.parse(req.url, true));
  /////////////////// 1st way to read file

  //   fs.readFile(`${__dirname}/dev-data/streamTxt.txt`, "utf-8", (err, data) => {
  //     res.end(data.toString());
  //   });

  /////////////////// 2nd way to read file (Reading from stream)

  //   const rstream = fs.createReadStream(`${__dirname}/dev-data/streamTxt.txt`);

  //   rstream.on("data", (chunks) => {
  //     res.write(chunks);
  //   });

  //   rstream.on("end", () => {
  //     res.end();
  //   });

  //   rstream.on("error", () => {
  //     res.end("File not Found");
  //   });

  /////////////////// 3rd way to read file (Reading using pipe)

  const readableStream = fs.createReadStream(
    `${__dirname}/dev-data/streamTxt.txt`
  );

  readableStream.pipe(res);

  ///////////////////////////////////////////////////////////////
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is Running");
});
