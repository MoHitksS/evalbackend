const { Router } = require('express');
const SignupRouter = Router();
const { addUser } = require('../Controller/Signup.controller');

SignupRouter.post('/add', addUser())

module.exports = {
    SignupRouter
}