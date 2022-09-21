var express = require('express');
var router = express.Router();
var user = require('../controller/UserController')
// const auth = require('./middleware/authentication')


router.post('/regime',user.registerUser);
router.post('/login',user.login)

module.exports = router;