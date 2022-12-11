const { fail } = require('assert');
var fs=require('fs');
var http=require("http");

var server=http.createServer (function(req, res){

    //fs read file synchronus
    
    if(req.url=="/"){
        let data= fs.readFileSync('home.html');
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
     }

   
   //   });
       //fs read file asynchronus

       if(req.url=="/courses"){
         fs.readFile('courses.html',function(error,data){
          res.writeHead(200,{'content-type':'text/html'});
          res.write(data);
          res.end();
         
         });
      }
      //fs write file asynchronus

      if(req.url=="/courses"){
         fs.writeFile('aboutCourses.txt','HTML, CSS, JS, C, C++', function(error){
            if(error){
               res.writeHead(200,{'content-type':'text/html'});
               res.write('Fail');
               res.end();
            }
            else{
               res.writeHead(200,{'content-type':'text/html'});
               res.write('Success');
               res.end();

            }
         })
      }
   })


server.listen(7070);

console.log("WoW! Server run successfully.");