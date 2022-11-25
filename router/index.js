const express = require('express')
const { totalValue } = require('./interactSM')
const rootRouter = express.Router()
rootRouter.use('/inzenone', totalValue)

module.exports = { rootRouter }