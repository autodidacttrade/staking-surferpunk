# SurferPunk Token + Staking DApp + NFT Access Pass (ERC-721) (Hardhat | Solidity)

This project includes the smart contracts and scripts for **SRFPK (SurferPunk)**, an ERC-20 token deployed on Ethereum’s Sepolia testnet, and a basic staking contract with time-based reward logic.

## 🔧 Stack Used

- Solidity ^0.8.20
- Hardhat + Ethers.js
- OpenZeppelin Contracts
- MetaMask / Rabby Wallet
- Remix IDE
- Sepolia Testnet

## 📄 Smart Contracts

- `SurferPunk.sol`: ERC-20 Token (1,000,000 supply)
- `StakingPool.sol`: Allows staking SRFPK and distributing time-based rewards

## 📂 Scripts

- `deploy-surferpunk.js`: Deploys the token to Sepolia
- `deploy-staking.js`: Deploys the staking contract and funds it with 100,000 SURFPK
- `stake-test.js`: Full test script (approve → stake → wait → unstake → check balance)

## 🔐 Environment (.env structure)

See the included `.env.example` file for format:

PRIVATE_KEY=your_private_key
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_key
ETHERSCAN_API_KEY=your_etherscan_key

## 🧾 NFT Access Pass (ERC-721)

A simple ERC-721 contract `AccessNFT.sol` was added to serve as a permission layer or membership token. Only the contract owner can mint NFTs, and each token has a unique `tokenURI`.

### 📂 NFT Scripts

- `deploy-nft.js` – Deploys the `AccessNFT` contract to Sepolia.
- `mint-nft.js` – Mints an NFT to the owner’s wallet with a test image link as `tokenURI`.

The minted NFT can be imported into MetaMask via the Sepolia network using:

- **Contract Address:** `0x48aCE087Ef1089fabBa71850e7AEA9A75c2D4119`
- **Token ID:** `0`

> *Note: the current `tokenURI` points to a simple Imgur image and is not a full metadata object yet. You can improve this later by uploading structured metadata to IPFS.*
## 📬 Contact

Created by **Jim Soria Rivera**  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/jim-soria-rivera)
