const dotenv = require('dotenv').config()
const request = require('request')

const headers = {
    'Content-Type': 'application/json'
}

const body = JSON.stringify(
    {
        jsonrpc:"2.0",
        method:"eth_getBlockByNumber",
        params:["latest",true], 
        "id":1
    }
) 

const options = {
    url: `https://rinkeby.infura.io/v3/${process.env.PROJECT_ID}`,
    method: 'POST',
    headers,
    body 
}

function callback(error, response, body) {
    if(!error && response.statusCode == 200) {
        const json = response.body
        const obj = JSON.parse(json)
        // console.log('Response: ', obj)
        const hexValue = obj.result.number
        const decimalValue = parseInt(hexValue)
        console.log('Number Block Hex: ', hexValue)
        console.log('Number Block Dec: ', decimalValue)
    }
}

request(options, callback)






/*
curl https://rinkeby.infura.io/v3/8fbb5767c273426f90d18cfea850bdc7 -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x591e3710B82B5C5D1c3E7799d4b56102b7f03356
", "latest"],"id":1}'
{"jsonrpc":"2.0","error":{"code":-32600,"message":"invalid json request"}}%     
*/