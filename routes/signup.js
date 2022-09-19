var express = require('express');
var router = express.Router();
var user = require('../controller/UserController')


router.post('/',user.registerUser);

module.exports = router;