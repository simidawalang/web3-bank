import { ethers } from "hardhat";

const deploy = async () => {
  const BankFactory = await ethers.getContractFactory("Bank");
  const BankContract = await BankFactory.deploy();

  await BankContract.deployed();

  console.log("Bank deployed to:", BankContract.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy()
  .then(() => {
    process.exitCode = 0;
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
