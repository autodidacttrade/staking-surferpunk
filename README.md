# SurferPunk Token + Staking DApp (Hardhat | Solidity)

This project includes the smart contracts and scripts for **SURFPK (SurferPunk)**, an ERC-20 token deployed on Ethereum’s Sepolia testnet, and a basic staking contract with time-based reward logic.

## 🔧 Stack Used

- Solidity ^0.8.20
- Hardhat + Ethers.js
- OpenZeppelin Contracts
- MetaMask / Rabby Wallet
- Remix IDE
- Sepolia Testnet

## 📄 Smart Contracts

- `SurferPunk.sol`: ERC-20 Token (1,000,000 supply)
- `StakingPool.sol`: Allows staking SURFPK and distributing time-based rewards

## 📂 Scripts

- `deploy-surferpunk.js`: Deploys the token to Sepolia
- `deploy-staking.js`: Deploys the staking contract and funds it with 100,000 SURFPK
- `stake-test.js`: Full test script (approve → stake → wait → unstake → check balance)

## 🔐 Environment (.env structure)

See the included `.env.example` file for format:

PRIVATE_KEY=your_private_key
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_key
ETHERSCAN_API_KEY=your_etherscan_key

## 📬 Contact

Created by **Jim Soria Rivera**  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/jim-soria-rivera)
