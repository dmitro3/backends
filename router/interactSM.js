const express = require('express')
const { interactSM } = require('../db/smartContract')
const { valueExchange_1h, valueExchange_24h, valueExchange_168h, valueExchange_test } = require('../models/valueExchange')
const totalValue = express.Router()

totalValue.get('/totalvalue', async (req, res) => {
  try {
    const data = await interactSM.methods.totalValue().call()
    const newData = new valueExchange_test({ value: data, timestamp: Date.now() })
    await newData.save()
    let value_1h = await valueExchange_test.find()
    let totalValue_24h = value_1h[value_1h.length - 2]
    let totalValue_168h = value_1h[value_1h.length - 3]
    res.status(200).json({
      totalValue_1h: value_1h[value_1h.length - 1],
      totalValue_24h,
      totalValue_168h
    })
  } catch (error) {
    return res.status(500).send(error)
  }
})

module.exports = { totalValue }