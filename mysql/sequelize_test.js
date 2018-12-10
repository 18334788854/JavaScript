"use strict";

var Sequelize = require("sequelize");
var config = require("./config");
//sequelize实例化
var sequelize = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
//定义sequelize模型(根据数据库)
var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
    timestamps: false
});
//插入数据
var now = Date.now();
(async () => {
    var dog = await Pet.create({
        id: 'd-' + now,
        name: 'Gaffey',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    console.log('created: ' + JSON.stringify(dog));
})();

(async()=>{
    var dogs = await Pet.findAll({
        where:{
            name:"Gaffey"
        }
    });
    var i=1;
    console.log(`There are ${dogs.length} dogs!`);
    for(var dog of dogs){
        dog.gender=i++;
        console.log(JSON.stringify(dog));
        dog.save();
    }
})();