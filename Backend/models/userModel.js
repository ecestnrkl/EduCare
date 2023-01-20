const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please enter your first name!"],
        trim: true
    },
    lname: {
        type: String,
        required: [true, "Please enter your last name!"],
        trim: true
    },
    email: {
        type: String,
        lowsercase: true,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is in valid')
            }
        },
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"],
        minlength: 8
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = await jwt.sign({ _id: user._id.toString() }, 'educare' /*"" + process.env.ACCESS_TOKEN_SECRET*/)
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("No user found with the provided email");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Incorrect email/password combination");
    }
    return user;
};


userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

const User = mongoose.model('User', userSchema)

module.exports = User