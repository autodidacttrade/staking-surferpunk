require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();

  console.log("✅ Wallet address:", signer.address);

  const balance = await hre.ethers.provider.getBalance(signer.address);

  // ✅ usamos el util correcto desde hre.ethers
  const formatted = hre.ethers.formatEther(balance);

  console.log("💰 Balance:", formatted, "ETH");
}

main().catch((error) => {
  console.error("❌ Error al verificar balance:", error);
  process.exitCode = 1;
});





