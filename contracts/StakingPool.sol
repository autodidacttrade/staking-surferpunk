// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakingPool is Ownable {
    IERC20 public token;
    uint256 public rewardRatePerSecond = 1e16; // 0.01 SRFPK por segundo

    struct Stake {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => Stake) public stakes;

    constructor(address _token) Ownable(msg.sender) { // ✅ aquí pasas el owner
        token = IERC20(_token);
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Cannot stake 0");
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        Stake storage user = stakes[msg.sender];
        user.amount += amount;
        user.timestamp = block.timestamp;
    }

    function unstake() external {
        Stake storage user = stakes[msg.sender];
        require(user.amount > 0, "Nothing to unstake");

        uint256 stakedTime = block.timestamp - user.timestamp;
        uint256 reward = stakedTime * rewardRatePerSecond;

        uint256 payout = user.amount + reward;
        user.amount = 0;
        user.timestamp = 0;

        require(token.transfer(msg.sender, payout), "Payout failed");
    }

    function getPendingRewards(address userAddr) external view returns (uint256) {
        Stake storage user = stakes[userAddr];
        if (user.amount == 0) return 0;
        uint256 stakedTime = block.timestamp - user.timestamp;
        return stakedTime * rewardRatePerSecond;
    }

    function fundRewards(uint256 amount) external onlyOwner {
        require(token.transferFrom(msg.sender, address(this), amount), "Funding failed");
    }
}

