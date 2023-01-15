const mongoose = require('mongoose');
var validator = require("validator");

const childSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    klasse: {
        type: String,
        required: true
    },
    teacher: {
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
    }
})

const Child = mongoose.model('Child', childSchema)


module.exports = Child