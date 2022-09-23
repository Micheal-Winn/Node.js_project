let userService = require('../services/UserService');
const {config} = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async (req,res,next)=>
{
    let userName = req.body['name'];
    let email = req.body['email'];
    let password = req.body['password'];
    try {
        let user = await userService.register(userName,email,password,);
        // let payload = {id : user._id};
        // const token = jwt.sign(payload,config.TOKEN_SECRET);
        res.status(201).send("Registeration Successful",user)
    }catch (err)
    {
        console.log(err)
        res.status(400).send({message: "User already existed"});
    }
}

const login = async (req,res,next)=>
{
    let useremail = req.body['email'];
    let password = req.body['password'];

    try {
        let user = await userService.login(useremail,password);
        let payload = {id : user._id};
        const token = jwt.sign(payload,config.TOKEN_SECRET);
        res.status(200).send({token})
    }catch (err)
    {
        console.log(err)
        res.status(400).send({message: "Invalid User"});
    }

}



module.exports ={
    registerUser,
    login
}