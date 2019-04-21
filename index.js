const BNS = require('./bns')
const abi = require('./abi.json')

const address = '0xbc192f3a81bca5b057928e16a6ade1c7abc67077'

module.exports = (web3, account) => new BNS(web3, account, abi, address)
