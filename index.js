const express = require("express");
const aap=express();
const path= require("path");//this will enable ejs to display no matter from which file u start inside the main dir
 
const port = 8080;

aap.set("view engine","ejs");

aap.set("views",path.join(__dirname,"/views"));// for const path

//b
aap.get("/",(req,res)=>{
    res.render("home.ejs");   //render is used to send ejs files
});

//e(i) executing js in rolldice.js file
aap.get("/rolldice",(req,res)=>{
    res.render("rolldice.ejs");   //render is used to send ejs files
});

// e(i) let data coming from database then
aap.get("/rolld",(req,res)=>{
    let val= Math.floor(Math.random()*6)+1;
    res.render("rolld.ejs",{num:val});   //render is used to send ejs files
});


aap.listen(port,()=>{
    console.log(`listining on ${port}`);
});