const router = require("express").Router();
const Joi = require("joi");
const User = require("../models/userModel.js");
const auth = require("../middleware/auth.js");

// Validation schemas
const registerSchema = Joi.object({
  fname: Joi.string().trim().required().label("Vorname"),
  lname: Joi.string().trim().required().label("Nachname"),
  email: Joi.string().email().required().label("Email"),
  password: Joi.string().min(8).required().label("Passwort"),
  role: Joi.string().valid("parent", "teacher").default("parent").label("Rolle"),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().label("Email"),
  password: Joi.string().required().label("Passwort"),
});

// Register
router.post("/register", async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ message: "Ein Account mit dieser Email existiert bereits" });
    }

    const user = new User(req.body);
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Logout
router.post("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (tokenObj) => tokenObj.token !== req.token
    );
    await req.user.save();
    res.json({ message: "Erfolgreich abgemeldet" });
  } catch (err) {
    res.status(500).json({ message: "Fehler beim Abmelden" });
  }
});

// Get current user profile
router.get("/me", auth, async (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;