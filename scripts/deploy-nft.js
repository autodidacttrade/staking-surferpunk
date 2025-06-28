require("dotenv").config();
const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("📤 Deploying AccessNFT from:", deployer.address);

  const AccessNFT = await hre.ethers.getContractFactory("AccessNFT");
  const nft = await AccessNFT.deploy();

  await nft.waitForDeployment();
  const nftAddress = await nft.getAddress();

  console.log("✅ AccessNFT deployed to:", nftAddress);
}

main().catch((error) => {
  console.error("❌ Error deploying AccessNFT:", error);
  process.exitCode = 1;
});
