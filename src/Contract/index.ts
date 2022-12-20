const ethers = require('ethers');
const contracts = require('./contracts.json');
const { END_POINT } = require('../general');

const provider = new ethers.providers.JsonRpcProvider(END_POINT);

const xenContract = new ethers.Contract(contracts.xenContract.address, contracts.xenContract.abi, provider);

module.exports = {
  provider,
  xenContract
};
