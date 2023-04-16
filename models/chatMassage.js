const Sequelize=require('sequelize')
const sequelize=require('../util/database')
const Massage=sequelize.define('massage',{
    massage:{
        type:Sequelize.STRING
    },
   
}
);

module.exports=Massage;