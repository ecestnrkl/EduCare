require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
//const cookieParser = require("cookie-parser");

// database connection
const mongoose = require("mongoose");
const mongoDB = (process.env.DB);
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once('open', () => console.log('Connected to Database'))

// middlewares
//app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const userRoutes = require('./routes/user.js');
app.use("/user", userRoutes);

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Listening on port ${port}`));