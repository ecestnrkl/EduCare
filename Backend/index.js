const express = require('express')
require('./src/db/connect.js')
const userRouter = require('./src/routers/user.js')

const app = express()
app.use(express.json());
app.use(userRouter)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Node.js App running on port ${PORT}...`)
  })