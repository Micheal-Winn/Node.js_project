const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {config} = require('../config/Config');

const verifyUserToken = (req,res,next)=>
{
    let token = req.headers.authorization;
    console.log('token',token);
    if(!token)return res.status(401).send("Access Denied / Unauthorized request")

    try {
        token = token.split(' ')[1] // Remove Bearer from String
        if(token === 'null' || !token) return res.status(401).send("Unauthorized request");
        let verifiedUser = jwt.verify(token,config.TOKEN_SECRET); // config.TOKEN_SECRECT ==> 'secrectkey'
        if(!verifiedUser) return res.status(401).send('Unauthorized request');

        req.user = verifiedUser; // user_id
        next()
    }catch (err)
    {
        console.log(err);
        res.status(400).send("Invalid Token")
    }
}

module.exports = {
    verifyUserToken
}