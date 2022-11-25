const mongoose = require('mongoose')
const connect_DB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`)
    console.log('connect success db');
  } catch (error) {
    console.log('error:_dev', error)
  }
}
module.exports = { connect_DB }