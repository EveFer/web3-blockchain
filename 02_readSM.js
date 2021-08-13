const Web3 = require('web3')
const fs = require('fs')
const url = 'https://mainnet.infura.io/v3/8fbb5767c273426f90d18cfea850bdc7'

const web3 = new Web3(url) 
const abi = JSON.parse(fs.readFileSync('./00_OMG_abi.txt', 'utf8'))
const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'
//  aqui ya tengo acceso a lo metodos del contrato
const contract = new web3.eth.Contract(abi, address)

async function getDataOmg (address) {
    const name = await contract.methods.name().call()
    const symbol = await contract.methods.symbol().call()
    const totalSupply = await contract.methods.totalSupply().call()
    const balance = await contract.methods.balanceOf(address).call()
    return {
        name,
        symbol,
        totalSupply,
        balance,
    }
}
getDataOmg(address)
.then((result) => {
    console.log(result)
})
.catch(err => {console.error(err)})
