const ethers = require("hardhat");
const Contract = async () => {
  let Nft_contract = await ethers.getContractFactory(" NFTee");
  let Nft_token = await Nft_contract.deploy();
  await Nft_token.deployed();
  console.log("Your contract address is  ", Nft_token.address);
};

Contract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
