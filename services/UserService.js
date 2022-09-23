const express = require('express');
const {config} = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const router = express.Router();
const User = require('../model/userModel');
const {compareSync} = require("bcrypt");

const register = async (userName,email,password)=>

{

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    let user = new User({
        username : userName,
        email : email,
        password : hashPassword
    });
   return  user.save();
}

const  login = async (useremail,password)=>{
    const filter = {
        email : useremail
    };
    console.log('filter',filter);
    const user = await User.findOne(filter);
    if(user)
    {
        console.log('Username',useremail,'password',user.password);
        const validPass = await bcrypt.compare(password,user.password);
        if(validPass)
        {
            return user;
        }
        else {
            throw Error("Invalid user or password")
        }
    }
}



module.exports = {
    router,
    register,
    login,
}