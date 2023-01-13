const mongoose = require('mongoose');
var validator = require("validator");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowsercase: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "{VALUE} is not a valid email",
            // isAsync: false,
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    age: {
        type: String
    },
    token: {
        type: String
    }
})

userSchema.methods.generateToken = function () {
    const token = jwt.sign({ _id: this._id }, "config.SECRET");
    this.tokens.push({ token });
    return this.save().then(() => {
        return token;
    });
};

userSchema.statics.findByCredentials = async function (email, password) {
    const user = await this.find({ email: email, password: password }).exec();
    if (user.length === 0) { throw new Error("Die eingegebenen Daten sind Fehlerhaft.") }
    else { return user }
};


const User = mongoose.model('User', userSchema)


module.exports = User