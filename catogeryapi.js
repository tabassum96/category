
const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(3000,'0.0.0.0',()=>{
    console.log("Server started on port No 3000");
})