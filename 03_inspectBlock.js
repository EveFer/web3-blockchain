const Web3 = require('web3')
const url = 'https://mainnet.infura.io/v3/8fbb5767c273426f90d18cfea850bdc7'

const web3 = new Web3(url)

// web3.eth.getBlockNumber()
// .then((block) => {
//     console.log('block: ', block)
// })
// .catch((err) => console.error(err))

// web3.eth.getBlock('latest')
// .then((block) => {
//     console.log('block: ', block)
// })
// .catch((err) => console.error(err))

// web3.eth.getBlock('latest')
// .then((block) => {
//     console.log(block)
//     const transactions = block.transactions
//     // console.log(transactions)
//     // console.log('Ultimos 10: ')
//     // console.log(transactions.slice(transactions.length-10))
    
// })
// .catch((err) => console.error(err))

web3.eth.getBlockNumber()
.then((latest) => {
    for (let i = 0; i < 10; i++) {
        web3.eth.getBlock(latest - i)
        .then((block) => {
            console.log(`block: `, block.number)
        })
        .catch((err) => console.error(err))
    }
})
.catch((err) => console.error(err))

