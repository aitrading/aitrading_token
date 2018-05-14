let MultiSigWalletWithDailyLimit = artifacts.require('./MultiSigWalletWithDailyLimit.sol')

//@ts-check
module.exports = function (deployer, network) {

    let owners;

    if (network === "development") {
        owners =
            [
                "0xd7126c8c920800706f826df0772d792343cfecca" // `npm run testrpc` first account
            ];
    } else if (network === "kovan") {
        owners =
            [
                "0xC1ce3201d76Bd9f9Ff50a8295B79b0359bE27538"
            ];
    } else if (network === "ropsten") {
        throw new Error('No mainnet ' + network + ' accounts configured yet');
        // owners =
        //     [
        //     ];
    }
    else if (network === "rinkeby") {
        throw new Error('No mainnet ' + network + ' accounts configured yet');
        // owners =
        //     [
        //     ];
    }
    else if (network === "mainnet") {
        throw new Error('No mainnet accounts configured yet');
        // owners =
        //     [
        //     ];
    }
    const requiredConfirmations = 1;
    const dailyLimit = 10;

    deployer.deploy(MultiSigWalletWithDailyLimit, owners, requiredConfirmations, dailyLimit);
}
