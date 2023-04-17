const { response } = require('express');
const Massage=require('../models/chatMassage');
const User=require('../models/user')

exports.addMassage=async(req,res)=>{
    const userId=req.user.id;
    const data=req.body;
    //console.log(data,userId)
    Massage.create({
        massage:data.massage,
        userId:userId
    })
    res.status(201).json({data})
}

exports.getdata=(req,res)=>{
    const userId=req.user.id
    Massage.findAll({
        where:{
            userId:userId
        }
    })
    .then(response=>{
        res.status(200).json({response})
    })
}