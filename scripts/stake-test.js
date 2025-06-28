require("dotenv").config();
const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();

  const SRFPK_ADDRESS = "0x30e1844134Ef7Cff0C734D2B86afc982a1BaAe60";
  const STAKING_ADDRESS = "0x2c8A20588c821d3D0bc9490EA289bA2B1C1c729E";

  const token = await hre.ethers.getContractAt("IERC20", SRFPK_ADDRESS);
  const staking = await hre.ethers.getContractAt("StakingPool", STAKING_ADDRESS);

  const stakeAmount = ethers.parseEther("100");

  console.log("🔐 Approving staking contract...");
  const approveTx = await token.approve(STAKING_ADDRESS, stakeAmount);
  await approveTx.wait();

  console.log("📥 Staking 100 SRFPK...");
  const stakeTx = await staking.stake(stakeAmount);
  await stakeTx.wait();

  console.log("⏳ Waiting 20 seconds to accumulate rewards...");
  await new Promise((resolve) => setTimeout(resolve, 20000)); // espera 20 segundos

  console.log("💸 Unstaking...");
  const unstakeTx = await staking.unstake();
  await unstakeTx.wait();

  const finalBalance = await token.balanceOf(deployer.address);
  console.log("✅ Final balance:", ethers.formatEther(finalBalance), "SRFPK");
}

main().catch((error) => {
  console.error("❌ Error in stake test:", error);
  process.exitCode = 1;
});
