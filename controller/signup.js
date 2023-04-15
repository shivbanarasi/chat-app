const User=require('../models/user')
const bcrypt=require('bcrypt');

exports.adduser=async(req,res)=>{
   console.log("hello")
    const data=req.body;
   // console.log(data)
    const e=await User.findAll({
        where:{
            email:data.email
        }
    })
    console.log(e[0].email)
    if(e[0].email===data.email){
        res.status(203).json({massage :'user already exist'})
    }else{
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
       
    }
   
