const express=require('express');
const route=express.Router();
const signupController=require('../controller/signup')

route.post("/",signupController.adduser);

module.exports=route;