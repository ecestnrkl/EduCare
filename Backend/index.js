const express = require('express');
const childRouter = require('./routes/child.js')
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once('open', () => console.log('Connected to Database'))

app.use(cors());
app.use(express.json());
app.use('/', childRouter);

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Node.js App running on port ${PORT}...`)
  })