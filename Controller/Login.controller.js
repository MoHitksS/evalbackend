require('dotenv').config()
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { UserModel } = require('../Models/User.model');

const loginUser = () => async (req, res) => {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email: email })
    if (user) {
        const hashedPassword = user.password;
        bcrypt.compare(password, hashedPassword, function (err, result) {
            if (result) {
                const token = jwt.sign({ email: email }, process.env.SECRET_KEY)
                res.send({ msg: 'Login Successfull', token: token });
            } else {
                res.send("Invalid Credentials")
            }
        });
    } else {
        res.send("Invalid Credentials")
    }
}

module.exports = {
    loginUser
}