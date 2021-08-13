const dotenv = require('dotenv').config()
const request = require('request')

const Web3 = require('web3')

const url = "https://mainnet.infura.io/v3/8fbb5767c273426f90d18cfea850bdc7"

const web3 = new Web3(url)

const address = '0xc5184601efcd8fAEd4f508303A203D3445DF62F2'







async function getData(address, isViewLatest, countView) {
    const data = {}
    const balanceWei = await web3.eth.getBalance(address)
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether')


    const blockLatest = await web3.eth.getBlock('latest')

    data.address = {
        balanceWei,
        balanceEth
    }
    data.currentBlock = {
        hex: parseInt(blockLatest.number, 16),
        decimal: blockLatest.number
    }


    if(!isViewLatest && countView) {
       const latest = await web3.eth.getBlockNumber() 
       const lastBlocks = [] 
        for (let i = 0; i < countView; i++) {
          const block =  await web3.eth.getBlock(latest - i)
          lastBlocks.push(block.number)
        }
        console.log(lastBlocks)
        data.blocks = lastBlocks
    }else if(isViewLatest && countView > 0) {
        const latest = await web3.eth.getBlockNumber() 
        data.blockLast = latest
    }
    return data
}

getData(address, false)
.then((data) => {
    console.log('yei!!')
    console.log(data)
})
.catch((err) => console.error(err))