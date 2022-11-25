const express = require('express')
const { connect_DB } = require('./db/mongodb')
const { rootRouter } = require('./router')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const { PORT } = process.env
const port = PORT ? PORT : 1900
connect_DB()
app.use('/v1', rootRouter)
app.listen(port, () => {
  console.log(`app is running port ${port}`);
})
module.exports = { app }


