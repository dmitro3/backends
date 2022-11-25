const mongoose = require('mongoose')
const { Schema } = mongoose
const totalValueSchema = new Schema({ value: String, timestamp: Date })

const valueExchange_1h = mongoose.model('valueExchange_1h', totalValueSchema)
const valueExchange_24h = mongoose.model('valueExchange_24h', totalValueSchema)
const valueExchange_168h = mongoose.model('valueExchange_168h', totalValueSchema)
const valueExchange_test = mongoose.model('valueExchange_test', totalValueSchema)

module.exports = { valueExchange_1h, valueExchange_24h, valueExchange_168h, valueExchange_test }
