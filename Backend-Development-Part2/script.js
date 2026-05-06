const fs=require('fs');
// writefile
// appendfile
// copyfile
// rename
// unlink


                                                  // writefile
// Syntax                                                 
// fs.writeFile("path",data,callback)

// fs.writeFile("hello.txt","Hey hello kaise ho",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// });

                                                   // appendfile
// Syntax                                                  
// fs.appendFile("path",data,callback)

// fs.appendFile("hello.txt"," mai to achha hu",function(err){
//     if(err) console.log(err);
//     else console.log("Done");
// });

                                                  // rename
// Syntax                                                  
// fs.rename("oldpath","newpath",callback)

// fs.rename("hello.txt","hey.txt",function(err){
//     if(err) console.log(err);
//     else console.log("Done");
// });

                                                  // copyfile
// Syntax                                                  
// fs.copyFile("src","destination",callback)  

// fs.copyFile("hey.txt", "./copy/copy.txt",function(err){
//     if(err) console.log(err);
//     else console.log("Done");
// });                                                 

                                                  // unlink
// Syntax                                                  
// fs.unlink("path",callback)    

// fs.unlink("hey.txt",function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// }); 

                                                 // rmdir
// Syntax
// fs.rmdir(path,callback)

// fs.rmdir("./copy",{recursive:true},function(err){ // rmdir is used to remove directory 
// // and it will only remove empty directory but if we want to remove non empty directory then we have to use recursive:true
//     if(err) console.log(err);
//     else console.log("removed");
// });

// we can also use fs.rm() to remove directory and file both
// Syntax
// fs.rm(path,options,callback)

// fs.rm("./copy",{recursive:true},function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// });

                                              // readFile
// Syntax
// fs.readFile(path,options,callback)     

// fs.readFile("NodeJs-Notes.txt","utf8",function(err,data){
//     if(err) console.log(err);
//     else console.log(data);
// })


                                             // http module
// Syntax
// const http=require('http');
// const server=http.createServer(callback)

// const server=http.createServer(function(req,res){
//     res.write("Hello World");
//     res.end();
// })

// server.listen(3000,function(){
//     console.log("Server is running on port 3000");
// })


const http=require('http');
const server=http.createServer(function(req,res){
    res.end("Hello World");
    
});

server.listen(3000);