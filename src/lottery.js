import web3 from './web3';

const address = '0x2fdae339b2a94eb425a55cf3993a13b2e3dcc46b';

// This came from "https://rinkeby.etherscan.io/address/0xc09eb46ce7A8b32F4339390cB94A3568C20eCaa9#code"
// There is a way to get the ABI from etherscan.io.  I think you have to Verify & Publish
// "https://rinkeby.etherscan.io/verifyContract?a=0x2fdae339b2a94eb425a55cf3993a13b2e3dcc46b" to get the ABI.
// See also "Not getting the lottery manager in the browser" course Q&A
const abi = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
        inputs: [],
        name: 'enter',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getPlayers',
        outputs: [
            { internalType: 'address payable[]', name: '', type: 'address[]' }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'manager',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'pickWinner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'players',
        outputs: [
            { internalType: 'address payable', name: '', type: 'address' }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    { stateMutability: 'payable', type: 'receive' }
];

// console.log('YYY: ', abi, address);

export default new web3.eth.Contract(abi, address);

// This ABI output by deploy.js in the Lottery projects does not work:
// [
//     {
//       inputs: [],
//       stateMutability: 'nonpayable',
//       type: 'constructor',
//       constant: undefined,
//       payable: undefined,
//       signature: 'constructor'
//     },
//     {
//       inputs: [],
//       name: 'enter',
//       outputs: [],
//       stateMutability: 'payable',
//       type: 'function',
//       constant: undefined,
//       payable: true,
//       signature: '0xe97dcb62'
//     },
//     {
//       inputs: [],
//       name: 'getPlayers',
//       outputs: [ [Object] ],
//       stateMutability: 'view',
//       type: 'function',
//       constant: true,
//       payable: undefined,
//       signature: '0x8b5b9ccc'
//     },
//     {
//       inputs: [],
//       name: 'manager',
//       outputs: [ [Object] ],
//       stateMutability: 'view',
//       type: 'function',
//       constant: true,
//       payable: undefined,
//       signature: '0x481c6a75'
//     },
//     {
//       inputs: [],
//       name: 'pickWinner',
//       outputs: [],
//       stateMutability: 'nonpayable',
//       type: 'function',
//       constant: undefined,
//       payable: undefined,
//       signature: '0x5d495aea'
//     },
//     {
//       inputs: [ [Object] ],
//       name: 'players',
//       outputs: [ [Object] ],
//       stateMutability: 'view',
//       type: 'function',
//       constant: true,
//       payable: undefined,
//       signature: '0xf71d96cb'
//     }
//   ]
