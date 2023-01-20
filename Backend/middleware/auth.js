const jwt = require('jsonwebtoken')
const User = require('../models/userModel.js');
require('dotenv').config();

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) throw new Error("Token not found");
        try {
            const decoded = jwt.verify(token, 'educare'/*process.env.ACCESS_TOKEN_SECRET*/);
            const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
            if (!user) throw new Error("User not found");
            req.token = token;
            req.user = user;
            next();
        } catch (error) {
            throw new Error("Invalid token");
        }
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
};





module.exports = auth;