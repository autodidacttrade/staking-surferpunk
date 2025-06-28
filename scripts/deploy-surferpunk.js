const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await hre.ethers.getContractFactory("SurferPunk");
  const token = await Token.deploy(ethers.parseEther("1000000"));

  await token.waitForDeployment(); // ✅ versión compatible con ethers v6

  console.log("✅ SurferPunk token deployed to:", await token.getAddress()); // también cambia
}

main().catch((error) => {
  console.error("❌ Error deploying contract:", error);
  process.exitCode = 1;
});




