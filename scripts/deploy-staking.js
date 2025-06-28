require("dotenv").config();
const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();

  // Dirección del contrato SURFPK ya desplegado en Sepolia
  const SRFPK_ADDRESS = "0x30e1844134Ef7Cff0C734D2B86afc982a1BaAe60";

  console.log("📤 Deploying StakingPool from:", deployer.address);

  // Obtener el contrato
  const StakingPool = await hre.ethers.getContractFactory("StakingPool");

  // Deploy
  const staking = await StakingPool.deploy(SURFPK_ADDRESS);
  await staking.waitForDeployment();

  const stakingAddress = await staking.getAddress();
  console.log("✅ StakingPool deployed to:", stakingAddress);

  // Opcional: transferir 100,000 SRFPK al contrato para recompensas
  const token = await hre.ethers.getContractAt("IERC20", SRFPK_ADDRESS);
  const amount = ethers.parseEther("100000");

  const tx = await token.transfer(stakingAddress, amount);
  await tx.wait();

  console.log("🎁 Staking contract funded with 100,000 SRFPK");
}

main().catch((error) => {
  console.error("❌ Error deploying StakingPool:", error);
  process.exitCode = 1;
});
