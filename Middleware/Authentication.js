const jwt = require("jsonwebtoken");
require('dotenv').config();

const authentication = (req, res, next) => {
    const token = req.headers?.authorization.split(' ')[1];
    try {
        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.body.email = decoded.email;
        next();
    } catch (err) {
        res.send("Please Login Again")
    }
}


module.exports = {
    authentication
}