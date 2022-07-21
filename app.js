const fs = require("fs");
const http = require("http");
const url = require("url");

// //////////////////////////FILES

// blocking synchronous way

// const textOut = fs.readFileSync("./hello.txt","utf-8");

// // console.log(textOut);
// fs.writeFileSync("./hello1.txt","this is hello world")

// non-blocking asynchronous way
// const textOut = fs.readFile("./hello.txt","utf-8",(err,data)=>{
//     console.log(data);
// })

// fs.writeFile("./hello1.txt","read file text","utf-8",err=>{
//     console.log(err);
// })

// //////////////////////////SERVERS

// const server = http.createServer((req, res) => {
//   const path = req.url;
//   if (path === "/" || path === "/overview") {
//     res.writeHead(200);
//     res.end("/overview");
//   } else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//     });
//     res.end("<h1>Hello<h1/>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Server is Running");
// });


const server = http.createServer((req,res)=>{
    const path = req.url;
    console.log(path);
    if(path==="/" || path==="/overview"){
        fs.readFile(`${__dirname}/dev-data/data.json`,"utf-8",(err,data)=>{
            // const product = JSON.parse(data);
            res.writeHead(200,{
                "Content-type":"application/json"
            })
            res.end(data)
        })
    }
    else{
        res.writeHead(404,{
            "Content-type":"application/json"
        })
        res.end("Not Found")
        
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Server is Running");
})