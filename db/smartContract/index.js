const Web3 = require('web3')
const web3 = new Web3('https://polygon-rpc.com');
const inzenone_ABI = require('./inzenone_ABI.json')
const smAddress = '0x0f41602721aCFa7f0fE74b9232C7606642D805B1';
const interactSM = new web3.eth.Contract(inzenone_ABI, smAddress)
module.exports = { interactSM }