const express=require('express');
const path=require('path')
require('dotenv').config();
const app=express();

app.use("/",express.static(path.join(__dirname,"./",'views')))
console.log(path.join(__dirname,"./",'views'))


app.listen(process.env.PORT,()=>{
    console.log(`server is listing to :${process.env.PORT}`)
})