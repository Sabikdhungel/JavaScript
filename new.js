// Read file
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('ind.html', function(err, data) {
//     if (err) throw err;
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080,function(){
//   console.log('Server works :)');
// }); 

// URL and Query string
// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var r = req.url;
//   res.write(r);
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080,function(){
//   console.log('WEEL');
// });

// Create file
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });



// var adr='http://localhost:8080/default.htm?year=2018&month=feb';
// var q=url.parse(adr,true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// console.log(q);

// URL extract
// var url=require('url');
// var http=require('http');
// http.createServer(function(req, res){
  
//   res.writeHead(200,{'Content-Type':'text/plain'});
//   // var q = url.parse(req.url,true);
//   console.log(req);
//   // res.end(q);
// }).listen(8080,function(){
//   console.log('Server starts');
// })

var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
  var q=url.parse(req.url,true);
  var filename = "." + q.pathname;
  fs.readFile(filename,function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080,function(){
  console.log('Server works');
});

// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }  
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);