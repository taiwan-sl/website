//server.js
var express = require("express");

server = express();

server.use(express.static(__dirname+"/Bootstrap5"));//web root
 

// server.get("/",function(req,res){ //web root
//  	res.send("Hello, World!"); //回傳固定內容
//  });


server.get("/*splat", function(req,res){ //other pages, express 4 use * 
 	res.send("Page not found", 404);
 });
 server.listen(80);
console.log("Express run on port: 80");
//run: node server.js
//browser: http://localhost:8080
