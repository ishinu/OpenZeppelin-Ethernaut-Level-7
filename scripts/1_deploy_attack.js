const { ethers } = require("hardhat");

var forceAddress = "0x830e26487499Bd1978E8dBBcEfA7F1053F5811F7";

async function main(){
  console.log("Deploying Attack contract...");
  const Attack = await ethers.getContractFactory("Attack");
  const attack = await Attack.deploy(forceAddress,{value:1});
  await attack.deployed();
  console.log("Attack contract deployed at : ",attack.address);
}

main();