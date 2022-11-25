const { interactSM } = require("../db/smartContract")
const { valueExchange_test } = require("../models/valueExchange")
// const { app } = require("../server")

const totalValueExchange_test = async = async () => {
  try {
    const data = await interactSM.methods.totalValue().call()
    console.log('data:', data)
    const newData = new valueExchange_test({ value: data, timestamp: Date.now() })
    await newData.save()
    console.log({ newData });
  } catch (error) {
    throw new Error(error)
  }
}

totalValueExchange_test()