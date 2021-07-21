require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy radar muscle punch gesture cover army gesture'; 
let testAccounts = [
"0x76fb35e8d588e9ddaadfc1ff4d077776a0174690ab8f2f595cdc0e6f25e12e54",
"0xbf661d45dea128edaa135422e7ea9db0b8dc5c38cf7b463a303e4a311fabde0d",
"0x81c5c751e0deea5af6af2a075a09cc11086bfbfb5e18f4a4e3cb3e3c16390fe1",
"0xb97f98e0568f0d59d3a0b77ddc14f6ec03e0e24b9656c3a5ed46f08751a3f427",
"0x15b81bed01a237164fb5c9b6d2dd227a30e8feeab89865d7604a0a328091d7c0",
"0xb5d1701cec47645c1b289dc4af1d15e1b173784a99cecf714dd6548c6a7580a0",
"0x0ae3a9e92af459ccf1fab29c20a0768ef7ddcdba63a7897c40019f279f34668d",
"0xf478ee9c52e5ea5916c41b3e9182cf561d2a4ee08b84dff3fe23c669db40fb6e",
"0x8e9756227412735a5e61ab0bd7cf962ac576a08012f082bc7d8ecd0c05da6100",
"0xbbc16249f69e84c0caac94f3b79f56e08b30613776e70f0992e0c2e1399cc0c7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

