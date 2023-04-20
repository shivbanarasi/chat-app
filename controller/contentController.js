const { response } = require('express');
const Massage=require('../models/chatMassage');
const User=require('../models/user')
const Group=require("../models/group");
const { json } = require('body-parser');

exports.addMassage=async(req,res)=>{
    const userId=req.user.id;
    const data=req.body;
    console.log(data.groupId)
    const name=await User.findAll({
        where:{
            id:userId
        }
    })
    Massage.create({
        massage:data.massage,
        userId:userId,
        name:name[0].name,
        groupId:data.groupId
    })
    res.status(201).json({data})
}

exports.getdata=async(req,res)=>{
    const id=req.params.id;
    const groupId=req.params.groupId
    console.log(groupId)
    const userId=req.user.id
    const name=await User.findAll({
        where:{
            id:userId
        }
    })
    Massage.findAll(
        {
        where:{
            groupId:groupId,
    
        }
    }
    )
    .then(response=>{
        res.status(200).json({response,name:name[0].name}) 
    })
}

exports.addgroup=async(req,res)=>{
    const userId=req.user.id;
    const data=req.body;
    console.log(`${userId+data.name}`)
    
    Group.create({
        name:data.name,
        groupId:`${userId+data.name}`,
        Members:userId
    }).then(resp=>{
        console.log(resp)
        res.status(201).json({massage:"group created succcessfully",resp})
    })
}

exports.list=(req,res)=>{
    
 Group.findAll()
 .then(resp=>{
    res.status(200).json({resp})
 })
}

exports.addgroupuser=(req,res)=>{
    const data=req.body;
    const userId=req.user.id;
    Group.create({
        groupId:data.groupId,
        Members:userId
}).then(resp=>{
    res.status(201),json({resp})
})
}