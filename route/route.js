const express=require('express');
const route=express.Router();
const signupController=require('../controller/signup')
const logincontroller=require('../controller/loginController')

route.post("/",signupController.adduser);

route.post('/views/login.html',logincontroller.loginuser)

module.exports=route;