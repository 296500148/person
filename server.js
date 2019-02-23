const express = require("express");
const fs = require("fs");
const app = express();
const server = app.listen(80,()=>console.log("servert start at port 80"));

app.use(express.static(__dirname+"/app"));
app.get("/",(req,res)=>{
    const data = fs.readFileSync("./codeStream.html");
    res.send(data);
})