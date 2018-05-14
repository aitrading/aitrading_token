const MultiSigWalletWithDailyLimit = artifacts.require('./MultiSigWalletWithDailyLimit.sol')
const SafeMathLib = artifacts.require('./SafeMathLib.sol')
const AITTToken = artifacts.require('./AITTToken.sol')

//@ts-check
module.exports = async function (deployer) {
    let wallet = await MultiSigWalletWithDailyLimit.deployed();
    console.log("MultiSigWallet has been deployed: " + wallet.address);

    console.log("Deploying SafeMathLib ...");
    await deployer.deploy(SafeMathLib);
    console.log("Deploying SafeMathLib started ...");
    let safeMathLib = await SafeMathLib.deployed();
    console.log("SafeMathLib has been deployed: " + safeMathLib.address);
    await deployer.link(SafeMathLib, AITTToken);
    console.log("SafeMathLib has been linked");

    console.log("Deploying AITTToken ...");
    await deployer.deploy(AITTToken, wallet.address);
    console.log("Deploying AITTToken started ...");
    let token = await AITTToken.deployed();
    console.log("AITTToken has been deployed: " + token.address);

    console.log(token.logs);
};
