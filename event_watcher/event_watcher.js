/*jshint esversion: 6*/

// run with local Provider
const Web3 = require('web3');

// contract address 0xC444dbf4952357a26c5f5C5f7039FA1ECd1cC4Ec ABI on Ropstan Testnet
const contract_addr = '0xC444dbf4952357a26c5f5C5f7039FA1ECd1cC4Ec';
const contract_abi = [{"constant":false,"inputs":[{"name":"ipfsMetadataHash","type":"string"},{"name":"partialKey","type":"string"},{"name":"indirectKeyIdx","type":"string"},{"name":"seed","type":"uint256"},{"name":"ipfsEncryptedHash","type":"string"},{"name":"realFilesize","type":"uint256"}],"name":"encryptIPFS","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"allowIpfsRegister","type":"bool"}],"name":"activateRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newRewardExRate","type":"uint256"}],"name":"setRewardExchangeRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ipfsMetadataHash","type":"string"}],"name":"decryptIPFS","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"rewardexchanger","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"ownerKill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentTokenContract","outputs":[{"name":"tok_addr","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_exchanger","type":"address"}],"name":"delegateExchangerAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ipfsMetadataHash","type":"string"}],"name":"fetchParallelKeyForIPFS","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeSub","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeDiv","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"exchanging_token_addr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pos","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeMul","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"defaultRewardFileSize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allowIpfsReg","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allowTokenEx","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeAdd","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"fetchKeyForIPFS","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_ex_tok_addr","type":"address"},{"name":"enableTokenEx","type":"bool"},{"name":"_pos","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dataowner","type":"address"},{"indexed":false,"name":"ethersSent","type":"uint256"},{"indexed":false,"name":"tokensGranted","type":"uint256"}],"name":"RewardTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"registor","type":"address"},{"indexed":false,"name":"ipfsHash","type":"string"}],"name":"RegisteredFreeRecord","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"registor","type":"address"},{"indexed":false,"name":"ipfsMetadataHash","type":"string"},{"indexed":false,"name":"underlyingFileSize","type":"uint256"},{"indexed":false,"name":"tokenCost","type":"uint256"}],"name":"RegisteredEncryptedRecord","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"accesser","type":"address"},{"indexed":true,"name":"dataowner","type":"address"},{"indexed":false,"name":"ipfsMetadataHash","type":"string"},{"indexed":false,"name":"tokenCost","type":"uint256"}],"name":"PurchaseTxRecord","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"msg","type":"string"},{"indexed":false,"name":"allowIpfsREgistration","type":"bool"}],"name":"RewardEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"msg","type":"string"},{"indexed":false,"name":"newExchangeRate","type":"uint256"}],"name":"NewExchangeRate","type":"event"}];

// old web3 versions 0.20.x 
// web3.eth.contract(contractAbi).at(contractAddress);
// new web3 versions 1.0.x
// web3.eth.Contract(contractAbi, contractAddress);
const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'));
let contract_instance = new web3.eth.Contract(contract_abi, contract_addr);

contract_instance.events.allEvents((err, result) => {
    console.log(JSON.stringify(result));
});
