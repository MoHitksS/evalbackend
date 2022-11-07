const { UserModel } = require("../Models/User.model");
const bcrypt = require('bcrypt');

const addUser = () => async (req, res) => {
    const { email, password, name } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
        res.send("User Already Exist")
    } else {
        bcrypt.hash(password, 5, async function (err, hashPassword) {
            if (err) {
                res.send('Error')
            } else {
                const ip = req.ip.split(":")[3];
                const NewUser = new UserModel({
                    email,
                    password: hashPassword,
                    ip_address: ip,
                    name
                });
                await NewUser.save()
                res.send("New User Added")
            }
        });
    }
}

module.exports = {
    addUser
}