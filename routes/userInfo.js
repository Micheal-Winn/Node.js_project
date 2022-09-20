var express = require('express');
var router = express.Router();
var user = require('../controller/UserController')


router.post('/regime',user.registerUser);
router.post('/login',user.login)

module.exports = router;