const User=require('../models/user')
const bcrypt=require('bcrypt');

exports.adduser=(req,res)=>{
   console.log("hello")
    const data=req.body;
    console.log(data)
    //res.sendStatus(200)
        bcrypt.hash(data.password,10,async(err,password)=>{
            User.create({
                name:data.name,
                email:data.email,
                phone:data.phone,
                password:password
               })
               .then((response)=>{
                
                    console.log('user added sucessfully')
                
                    
                   res.status(201).json({massage:response,Status:200})
                
               }).catch(err=>{
                console.log(err);
                res.sendStatus(500)
               })
               
            })
    }
   
