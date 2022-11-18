require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey =
  "37da07777fad29f5f7de71969b80d29c16f3298b1d303277b6ff7bd1749fbe26";
const quicknodeId = "e5e5fda073f1032c7408a4134e1f06c34205cbc5";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      // Quicknode
      url: `https://fragrant-thrilling-bush.matic-testnet.discover.quiknode.pro/${quicknodeId}`,
      accounts: [privateKey],
      chainId: 80001,
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
