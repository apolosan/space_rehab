/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

 const HDWalletProvider = require('@truffle/hdwallet-provider');
 // const infuraKey = "fj4jll3k.....";
 
 const fs = require('fs');
 const path = require("path");
 const mnemonic = fs.readFileSync(path.resolve(__dirname, ".secret")).toString().trim();
 
 module.exports = {
   /**
    * Networks define how you connect to your ethereum client and let you set the
    * defaults web3 uses to send transactions. If you don't specify one truffle
    * will spin up a development blockchain for you on port 9545 when you
    * run `develop` or `test`. You can ask a truffle command to use a specific
    * network from the command line, e.g
    *
    * $ truffle test --network <network-name>
    */
 
   networks: {
     // Useful for testing. The `development` name is special - truffle uses it by default
     // if it's defined here and no other network is specified at the command line.
     // You should run a client (like ganache-cli, geth or parity) in a separate terminal
     // tab if you use this network and you must also set the `host`, `port` and `network_id`
     // options below to some value.
     //
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
     bsc_testnet: {
       provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s3.binance.org:8545`),
       network_id: 97,
       confirmations: 1,
       timeoutBlocks: 2000,
       networkCheckTimeout: 1000000000,
       skipDryRun: true
     },
     bsc_mainnet: {
       provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org:443`),
       network_id: 56,
       confirmations: 1,
       timeoutBlocks: 2000,
       networkCheckTimeout: 1000000000,
       skipDryRun: true
     },
     archive_node: {
       provider: () => new HDWalletProvider(mnemonic, `https://api.archivenode.io/tj6goq8q2bnthma1ldtjoy9yp114g83v`),
       network_id: 1,
       confirmations: 1,
       timeoutBlocks: 2000,
       networkCheckTimeout: 1000000000,
       skipDryRun: true
     },
     // Another network with more advanced options...
     // advanced: {
     // port: 8777,             // Custom port
     // network_id: 1342,       // Custom network
     // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
     // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
     // from: <address>,        // Account to send txs from (default: accounts[0])
     // websockets: true        // Enable EventEmitter interface for web3 (default: false)
     // },
     // Useful for deploying to a public network.
     // NB: It's important to wrap the provider as a function.
     ropsten: {
       provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/3583650156c340d4a08c51b6e50b7117`),
       network_id: 3,       // Ropsten's id
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
       gasPrice: 20000000000, // 200 gwei
       confirmations: 1,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
       networkCheckTimeout: 1000000000,
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },
     eth_mainnet: {
       provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/3583650156c340d4a08c51b6e50b7117`),
       network_id: 1,       // Ropsten's id
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
       gasPrice: 220000000000, // 180 gwei
       confirmations: 1,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
       networkCheckTimeout: 1000000000,
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },
     polygon: {
       provider: () => new HDWalletProvider(mnemonic, `https://rpc-mainnet.maticvigil.com/`),
       network_id: 137,       // Ropsten's id
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
       gasPrice: 6000000000, // 6 gwei
       confirmations: 1,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
       networkCheckTimeout: 1000000000,
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },    
     goerli: {
       provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/3583650156c340d4a08c51b6e50b7117`),
       network_id: 5,
       confirmations: 1,
       timeoutBlocks: 2000,
       networkCheckTimeout: 1000000000,
       skipDryRun: true
     },
     avalanche: {
       // provider: () => new HDWalletProvider(mnemonic, `https://api.avax.network/ext/bc/C/rpc`),
       provider: () => new HDWalletProvider({mnemonic: mnemonic, providerOrUrl: 'https://api.avax.network/ext/bc/C/rpc', chainId: 1}),
       network_id: 1, //43114,
       gas: 0xe8d4a51000,      
       gasPrice: 0x01,
       confirmations: 1,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
       networkCheckTimeout: 1000000000,
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },    
     xdai: {
       provider: new HDWalletProvider(mnemonic, `https://rpc.xdaichain.com`),
       network_id: 100,
       confirmations: 1,
       timeoutBlocks: 2000,
       networkCheckTimeout: 1000000000,
       skipDryRun: true
     },
     heco: {
       provider: new HDWalletProvider(mnemonic, `https://http-mainnet.hecochain.com`),
       network_id: 128,
       confirmations: 1,
       timeoutBlocks: 2000,
       networkCheckTimeout: 1000000000,
       skipDryRun: true
     },
     fantom: {
       provider: new HDWalletProvider(mnemonic, `https://rpcapi.fantom.network`),
       network_id: 250,
       gasPrice: 60000000000, // 6 gwei
       confirmations: 1,
       timeoutBlocks: 2000,
       networkCheckTimeout: 1000000000,
       skipDryRun: true
     },
     harmony: {
       provider: new HDWalletProvider({mnemonic: mnemonic, providerOrUrl: 'https://api.s0.b.hmny.io', chainId: 1666700000}),
       network_id: 1666700000,
       gas: 0xfffffffffff,
       gasLimit: 0xfffffffffff,
       confirmations: 1,
       timeoutBlocks: 2000,
       networkCheckTimeout: 1000000000,
       skipDryRun: true
     }
     // Useful for private networks
     // private: {
     // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
     // network_id: 2111,   // This network is yours, in the cloud.
     // production: true    // Treats this network as if it was a public net. (default: false)
     // }
   },
 
   // Set default mocha options here, use special reporters etc.
   mocha: {
     // timeout: 100000
     reporter: 'eth-gas-reporter',
     reporterOptions: {}
   },
 
   // Configure your compilers
   compilers: {
     solc: {
       version: "0.6.12",    // Fetch exact version from solc-bin (default: truffle's version)
       // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 5000
        },
       }
     }
   },
   plugins: [
     'truffle-plugin-verify'
   ],
   api_keys: {
     bsc_testnet: 'ZZ8TRV5ADDQ9K86XCJ6EBBB47C6FMGD2SQ',
     ftmscan: 'QVS2K8CNVXQW7HF12KRW354EBQSJVZCS7U'
   }
 };
 