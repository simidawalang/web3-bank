import { ethers } from "hardhat";

const deploy = async () => {
  const BankFactory = await ethers.getContractFactory("Bank");
  const BankContract = await BankFactory.deploy();

  await BankContract.deployed();

  console.log("Bank deployed to:", BankContract.address);
};

deploy()
  .then(() => {
    process.exitCode = 0;
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
