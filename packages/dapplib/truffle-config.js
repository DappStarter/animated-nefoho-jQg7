require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember smile grid kitten bridge giggle'; 
let testAccounts = [
"0xbaea2e386e93d1178bf9a96456c026454e664a796b7480362269eb7837cfb19f",
"0x8337784053a5ee21743480b6d47adc3c9e8ec8b85cf94848c4ec4d3b3b1fa9a0",
"0xad44978635266676b445094db3eeeb6d7e04e7c730756728db1813a8281f6fa4",
"0x81e728e894365835f9a684d3588bc06a086c0aebce2594c8e3a4e8a698c8a2b0",
"0x858acc26a6559adbb839f43b31ba5d4d944cc99d548d72ef5863e11432436ec2",
"0x142609eead4aec12478ef7dcbb46f658e6342281860330afa89a1688cc219d4c",
"0x34cff1d6a524592dc978af54efee939f9738c3cb31527003811826fa3ecc937a",
"0x2f84dfb5a00ceda2fce2df38cc9826f0b62da6cfb03e235980182b97250d1665",
"0xf8622178dd70dd820586be8641b377c76f79b4012a583e93005fbc0d1134cec5",
"0x7675d61b7de9e8b6952061f0c71905ad72428a6a98c3220fb7a8349e43be2517"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

