const Massage=require('../models/chatMassage');

exports.addMassage=async(req,res)=>{
    const userId=req.user.id;
    const data=req.body;
    console.log(data,userId)
    Massage.create({
        massage:data.massage,
        userId:userId
    })

    res.status(201).json({data})
}