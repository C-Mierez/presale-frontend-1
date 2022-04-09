/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestToken, TestTokenInterface } from "../TestToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001c2c38038062001c2c833981810160405281019062000037919062000377565b82828160039080519060200190620000519291906200023e565b5080600490805190602001906200006a9291906200023e565b505050620000a93362000082620000b260201b60201c565b600a6200009091906200059e565b836200009d9190620006db565b620000bb60201b60201c565b505050620008e3565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200012e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001259062000437565b60405180910390fd5b62000142600083836200023460201b60201c565b8060026000828254620001569190620004e6565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001ad9190620004e6565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000214919062000459565b60405180910390a362000230600083836200023960201b60201c565b5050565b505050565b505050565b8280546200024c9062000789565b90600052602060002090601f016020900481019282620002705760008555620002bc565b82601f106200028b57805160ff1916838001178555620002bc565b82800160010185558215620002bc579182015b82811115620002bb5782518255916020019190600101906200029e565b5b509050620002cb9190620002cf565b5090565b5b80821115620002ea576000816000905550600101620002d0565b5090565b600062000305620002ff846200049f565b62000476565b9050828152602081018484840111156200031e57600080fd5b6200032b84828562000753565b509392505050565b600082601f8301126200034557600080fd5b815162000357848260208601620002ee565b91505092915050565b6000815190506200037181620008c9565b92915050565b6000806000606084860312156200038d57600080fd5b600084015167ffffffffffffffff811115620003a857600080fd5b620003b68682870162000333565b935050602084015167ffffffffffffffff811115620003d457600080fd5b620003e28682870162000333565b9250506040620003f58682870162000360565b9150509250925092565b60006200040e601f83620004d5565b91506200041b82620008a0565b602082019050919050565b62000431816200073c565b82525050565b600060208201905081810360008301526200045281620003ff565b9050919050565b600060208201905062000470600083018462000426565b92915050565b60006200048262000495565b9050620004908282620007bf565b919050565b6000604051905090565b600067ffffffffffffffff821115620004bd57620004bc62000853565b5b620004c88262000882565b9050602081019050919050565b600082825260208201905092915050565b6000620004f3826200073c565b915062000500836200073c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005385762000537620007f5565b5b828201905092915050565b6000808291508390505b600185111562000595578086048111156200056d576200056c620007f5565b5b60018516156200057d5780820291505b80810290506200058d8562000893565b94506200054d565b94509492505050565b6000620005ab826200073c565b9150620005b88362000746565b9250620005e77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620005ef565b905092915050565b600082620006015760019050620006d4565b81620006115760009050620006d4565b81600181146200062a576002811462000635576200066b565b6001915050620006d4565b60ff8411156200064a5762000649620007f5565b5b8360020a915084821115620006645762000663620007f5565b5b50620006d4565b5060208310610133831016604e8410600b8410161715620006a55782820a9050838111156200069f576200069e620007f5565b5b620006d4565b620006b4848484600162000543565b92509050818404811115620006ce57620006cd620007f5565b5b81810290505b9392505050565b6000620006e8826200073c565b9150620006f5836200073c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620007315762000730620007f5565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b60005b838110156200077357808201518184015260208101905062000756565b8381111562000783576000848401525b50505050565b60006002820490506001821680620007a257607f821691505b60208210811415620007b957620007b862000824565b5b50919050565b620007ca8262000882565b810181811067ffffffffffffffff82111715620007ec57620007eb62000853565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b620008d4816200073c565b8114620008e057600080fd5b50565b61133980620008f36000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610dff565b60405180910390f35b6100e660048036038101906100e19190610c4d565b610308565b6040516100f39190610de4565b60405180910390f35b61010461032b565b6040516101119190610f01565b60405180910390f35b610134600480360381019061012f9190610bfe565b610335565b6040516101419190610de4565b60405180910390f35b610152610364565b60405161015f9190610f1c565b60405180910390f35b610182600480360381019061017d9190610c4d565b61036d565b60405161018f9190610de4565b60405180910390f35b6101b260048036038101906101ad9190610b99565b610417565b6040516101bf9190610f01565b60405180910390f35b6101d061045f565b6040516101dd9190610dff565b60405180910390f35b61020060048036038101906101fb9190610c4d565b6104f1565b60405161020d9190610de4565b60405180910390f35b610230600480360381019061022b9190610c4d565b6105db565b60405161023d9190610de4565b60405180910390f35b610260600480360381019061025b9190610bc2565b6105fe565b60405161026d9190610f01565b60405180910390f35b60606003805461028590611031565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190611031565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600080610313610685565b905061032081858561068d565b600191505092915050565b6000600254905090565b600080610340610685565b905061034d858285610858565b6103588585856108e4565b60019150509392505050565b60006012905090565b600080610378610685565b905061040c818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104079190610f53565b61068d565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461046e90611031565b80601f016020809104026020016040519081016040528092919081815260200182805461049a90611031565b80156104e75780601f106104bc576101008083540402835291602001916104e7565b820191906000526020600020905b8154815290600101906020018083116104ca57829003601f168201915b5050505050905090565b6000806104fc610685565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156105c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b990610ee1565b60405180910390fd5b6105cf828686840361068d565b60019250505092915050565b6000806105e6610685565b90506105f38185856108e4565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f490610ec1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561076d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076490610e41565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161084b9190610f01565b60405180910390a3505050565b600061086484846105fe565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108de57818110156108d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c790610e61565b60405180910390fd5b6108dd848484840361068d565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610954576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094b90610ea1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bb90610e21565b60405180910390fd5b6109cf838383610b65565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4c90610e81565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ae89190610f53565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b4c9190610f01565b60405180910390a3610b5f848484610b6a565b50505050565b505050565b505050565b600081359050610b7e816112d5565b92915050565b600081359050610b93816112ec565b92915050565b600060208284031215610bab57600080fd5b6000610bb984828501610b6f565b91505092915050565b60008060408385031215610bd557600080fd5b6000610be385828601610b6f565b9250506020610bf485828601610b6f565b9150509250929050565b600080600060608486031215610c1357600080fd5b6000610c2186828701610b6f565b9350506020610c3286828701610b6f565b9250506040610c4386828701610b84565b9150509250925092565b60008060408385031215610c6057600080fd5b6000610c6e85828601610b6f565b9250506020610c7f85828601610b84565b9150509250929050565b610c9281610fbb565b82525050565b6000610ca382610f37565b610cad8185610f42565b9350610cbd818560208601610ffe565b610cc6816110c1565b840191505092915050565b6000610cde602383610f42565b9150610ce9826110d2565b604082019050919050565b6000610d01602283610f42565b9150610d0c82611121565b604082019050919050565b6000610d24601d83610f42565b9150610d2f82611170565b602082019050919050565b6000610d47602683610f42565b9150610d5282611199565b604082019050919050565b6000610d6a602583610f42565b9150610d75826111e8565b604082019050919050565b6000610d8d602483610f42565b9150610d9882611237565b604082019050919050565b6000610db0602583610f42565b9150610dbb82611286565b604082019050919050565b610dcf81610fe7565b82525050565b610dde81610ff1565b82525050565b6000602082019050610df96000830184610c89565b92915050565b60006020820190508181036000830152610e198184610c98565b905092915050565b60006020820190508181036000830152610e3a81610cd1565b9050919050565b60006020820190508181036000830152610e5a81610cf4565b9050919050565b60006020820190508181036000830152610e7a81610d17565b9050919050565b60006020820190508181036000830152610e9a81610d3a565b9050919050565b60006020820190508181036000830152610eba81610d5d565b9050919050565b60006020820190508181036000830152610eda81610d80565b9050919050565b60006020820190508181036000830152610efa81610da3565b9050919050565b6000602082019050610f166000830184610dc6565b92915050565b6000602082019050610f316000830184610dd5565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610f5e82610fe7565b9150610f6983610fe7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f9e57610f9d611063565b5b828201905092915050565b6000610fb482610fc7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561101c578082015181840152602081019050611001565b8381111561102b576000848401525b50505050565b6000600282049050600182168061104957607f821691505b6020821081141561105d5761105c611092565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6112de81610fa9565b81146112e957600080fd5b50565b6112f581610fe7565b811461130057600080fd5b5056fea26469706673582212209814e8a41c817efa773538b58debd730437cc7d9c2afc9559567b906da6a9a0164736f6c63430008040033";

export class TestToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestToken> {
    return super.deploy(
      name,
      symbol,
      supply,
      overrides || {}
    ) as Promise<TestToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, supply, overrides || {});
  }
  attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new utils.Interface(_abi) as TestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}
