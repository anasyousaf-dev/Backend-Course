// lEARNED ROUTING IN EXPRESS.JS
// Forms making and handling in Express.js

// Today we will do practice
// Intialize a project with npm
// express install
// dynamic routing
       // how to get data coming from frontend to backend route
// setting up  parsers for forms

// setting up Ejs for Ejs pages
//  install ejs from npm
//  setup ejs as a  middleware for view engine

// setting up public static files



const express = require('express')
const app=express();
const path=require('path');
 
app .use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

// Route
app.get('/',function(req,res){
    res.render("index");
})
app.get('/profiles/:username',(req,res)=>{
    
    res.send(req.params.username);
})

app.get('/author/:username/:age',(req,res)=>{
    let username=req.params.username;
    let age=req.params.age;
    
    res.send(`Welcome ${username} with Age${age}`);
})
app.listen(3000,()=>{
    console.log("Server is running on 3000 Port");
})

