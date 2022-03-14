const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000

const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");


app.use(express.static(staticPath));


app.set('view engine','hbs');  
app.set('views',templatePath);

hbs.registerPartials(partialPath);

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/service",(req,res)=>{
    res.render("service")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("*",(req,res)=>{
    res.render("error")
})


app.listen(port,()=>{
    console.log("Listening")
})



