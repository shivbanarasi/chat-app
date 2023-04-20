const Sequlize=require('sequelize');
const sequelize=require('../util/database')
const Group=sequelize.define("group",{
    name:{
        type:Sequlize.STRING,
        
    },
    groupId:{
        type:Sequlize.STRING,
        allowNull:false
    },
   
    Members:{
        type:Sequlize.INTEGER
    }

});


module.exports=Group;