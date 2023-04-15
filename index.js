const express=require('express');
const path=require('path')
const sequelize=require('./util/database')
require('dotenv').config();
const User=require('./models/user')
const route=require('./route/route')
const bodyParser=require('body-parser')
const app=express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/",express.static(path.join(__dirname,"./",'views')))
console.log(path.join(__dirname,"./",'views'))

app.use(route)

sequelize.sync();


app.listen(process.env.PORT,()=>{
    console.log(`server is listing to :${process.env.PORT}`)
})