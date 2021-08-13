const Web3 = require('web3')

const url = "https://rinkeby.infura.io/v3/8fbb5767c273426f90d18cfea850bdc7"

const web3 = new Web3(url)

const address = '0x3811691614f783b86B9B2e934f935219a05439B1'


web3.eth.getBalance(address)
.then((balance) => {
    console.log('balance in Wei: ', balance)
    balance = web3.utils.fromWei(balance, 'ether')
    console.log('balance in ETH: ', balance)
})
.catch(err => {
    console.error(err)
})
