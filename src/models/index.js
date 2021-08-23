  
'use strict';
const sequelize = new Sequelize('postgres://postgres@localhost:5432/authdb');

const { Sequelize ,DataTypes} = require("sequelize");

const userSchema =require('./user.model');

module.exports={
    db:sequelize,
    User:userSchema(Sequelize ,DataTypes)

}