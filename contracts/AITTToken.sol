pragma solidity ^0.4.18;

import './CrowdsaleToken.sol';

contract AITTToken is CrowdsaleToken {

    string public constant name = "AI Trading Token";
    string public constant symbol = "AITT";
    uint public constant decimals = 18;
    uint public constant initialSupply = 888888888 * 10 ** 18;

    function AITTToken(address _teamMultisigWallet) public CrowdsaleToken(_teamMultisigWallet, name, symbol, initialSupply, decimals, false) {
    }
}
