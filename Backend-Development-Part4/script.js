                                        // Express Js Framework:
                                    // Introduction to Express Js Framework

// express js ek npm package hai
// framework ->   aapko kaam karne ka ek 'flow' (tareeka) deta hai jise follow karna hota hai, jabki libraries sirf tools deti hain.

// express js manages everything from receiving requests and giving the response to handling errors and routing.
//  It provides a set of features and tools that make it easier to build web applications and APIs. With Express,
//  you can create routes to handle different HTTP methods (GET, POST, PUT, DELETE) 
// and define middleware functions to process requests and responses. 
// Overall, Express Js Framework simplifies the development process and allows developers 
// to focus on building their applications rather than dealing with low-level details of server management.



                                      // Setting up a basic Express application
//syntax:
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("Hi from middlware");
    next(); // if next() is not called, the request will be left hanging and the server will not respond to the client. It is important to call next() in middleware functions to ensure that the request continues to the next middleware or route handler.
})
// app.get(route,requestHandler)  // requesthandler is a middleware
// request handler is a function that takes two parameters, request and response.
//  It is used to handle the incoming requests and send the appropriate responses back to the client.
app.get('/',(req,res)=>{
    res.send("Championnnnn meraaaaa anuj")

})

app.get('/profile',(req,res)=>{
    res.send("Champion uska coach")
    
})

                                            // difference between node script.js and nodemon script.js
// node script.js -> is used to run the script once. If you make any changes to the code, you need to stop the server and run it again to see the changes.
// nodemon script.js -> is used to run the script and automatically restart the server 
// whenever you make any changes to the code. It saves time and makes development easier.
      // for installing nodemon globally, you can use the command: npm install -g nodemon
                // after this run the command: nodemon script.js to start the server with nodemon.
                // agr error ata ha tu npx nodemon script.js use kro, npx is used to run the nodemon without installing it globally.

app.listen(3000);  


                                    
                                      // Routing in Express

// Domain part ko choro, uske baad jo path hai usko route kehte hain.
// For example, in the URL http://localhost:3000/users, the domain is http://localhost:3000 and the path is /users.                                      

                                      // Middleware in Express

// middlware,routes sy phalay execute hota hai
// jab bhi server request accept karta ha hai  waha se route ke beech paunchne tak aagr ap us request ko beech mein rokte ho and kuch perform karty ho ,tu ye element middleware kehlaata hai

// middleware is like a constrait, it can be used to perform some operations on the request before it reaches the route handler.
// For example, you can use middleware to authenticate users, log requests, or parse incoming data. 
// Middleware functions can be added globally to the application or to specific routes, allowing you to control the flow of requests and responses in your Express application.

// Handling requests and responses
                                        // Error handling in Express


// app.get('/about',(req,res,next)=>{
    // return next(new Error("This is an error"));
// })
// app.use((err,req,res,next)=>{
//     console.log(err);
//     res.status(500).send("Something went wrong");
// })                                        
