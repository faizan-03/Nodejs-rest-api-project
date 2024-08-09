const fs = require("fs");
const http = require("http");

const hostname = "127.0.0.1";
const port = 4000;
const home = fs.readFileSync("./home.html","utf-8");
const about = fs.readFileSync("./about.html","utf-8");
const contact = fs.readFileSync("./contact.html","utf-8");
const service = fs.readFileSync("./service.html","utf-8");


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //console.log(req.url);
  url=req.url;
  res.setHeader("content-type", "text/html");

  if(url=='/') {
  res.end(home);
}
 else if(url=='/about') {
    res.end(about);
  }

  else if(url=='/contact') {
    res.end(contact);
  }

  else if(url=='/service') {
    res.end(service);
  }

  else {
            console.log("page not found");
  }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
