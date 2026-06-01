const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hey");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    //mongoose all operations are async
    name: "Anas Yousaf",
    email: "anasyousaf@gmail.com",
    username: "anasyousafx",
  });

  res.send(createduser);
});
app.get("/update", async (req, res) => {
  //   userModel.findOneAndUpdate({findone},update,{new:true})
  let updateduser = await userModel.findOneAndUpdate(
    { username: "anasyousafx" },
    { name: "Anas Khan", email: "anasyousaf440@gmail.com" },
    { new: true },
  );
  res.send(updateduser);
});
app.get("/read",async (req,res)=>{
    let users=await userModel.find();

    // let users=await userModel.find({username:"anasyousafx"}); // find always return array,if there is no user then we will get null array

    // let users=await userModel.findOne({username:"anasyousafx"});  // findOne return us object
    res.send(users);
})

app.get("/delete", async (req, res) => {
    let users=await userModel.findOneAndDelete({username:"anasyousafx"});
    res.send(users);
  
});

app.listen("3000");
