// const http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200);
//   response.write('<h1>Hello Node!!!!</h1>\n');
//   response.end();
// }).listen(3000);
// console.log('Server running at http://localhost:3000');
////////
// const express = require('express');
import express from 'express';//es6 code
const app = express();
const square = require('./square');

app.get('/hello', function(req, res){
res.send("HELLO!");
});

app.get('/getWeathertoronto', (req, res) =>{
    res.send("HELLO!");
});


app.all('/secret', (req, res, next) => {
    res.send("SECRET")
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  });

app.listen(5000, function(){
    console.log("listening in on port 5000!")
    console.log("the area of the square is " + square.area(4));
});



// this code is written using standard node syntax

// // Load HTTP module
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 8000;


// // Create HTTP server 
// const server = http.createServer((req, res) => {

//    // Set the response HTTP header with HTTP status and Content type
//    res.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body "Hello World"
//    res.end('Hello World\n');
// });

// // Prints a log once the server starts listening
// server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
// })


