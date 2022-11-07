const { Router } = require('express');
const { loginUser } = require('../Controller/Login.controller');
const LoginRouter = Router();

LoginRouter.post('/user', loginUser())

module.exports = {
    LoginRouter
}