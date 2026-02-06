const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Bitte Vornamen eingeben!"],
    trim: true,
  },
  lname: {
    type: String,
    required: [true, "Bitte Nachnamen eingeben!"],
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "Bitte Email eingeben!"],
    trim: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email ist ungültig");
      }
    },
  },
  password: {
    type: String,
    required: [true, "Bitte Passwort eingeben!"],
    minlength: 8,
  },
  role: {
    type: String,
    enum: ["parent", "teacher"],
    default: "parent",
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Remove sensitive data from JSON responses
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  delete user.tokens;
  return user;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Ungültige Email oder Passwort");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Ungültige Email oder Passwort");
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;