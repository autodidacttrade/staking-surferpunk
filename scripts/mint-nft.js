require("dotenv").config();
const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();

  const NFT_ADDRESS = "0x48aCE087Ef1089fabBa71850e7AEA9A75c2D4119"; // tu contrato AccessNFT
  const tokenURI = "https://i.imgur.com/3z4xz6Z.png";

  const nft = await hre.ethers.getContractAt("AccessNFT", NFT_ADDRESS);

  console.log("🖼️ Minting AccessNFT to:", deployer.address);

  const tx = await nft.mint(deployer.address, tokenURI);
  await tx.wait();

  console.log("✅ NFT minted successfully!");
}

main().catch((error) => {
  console.error("❌ Error minting NFT:", error);
  process.exitCode = 1;
});
