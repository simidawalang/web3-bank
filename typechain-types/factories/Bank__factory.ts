/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Bank, BankInterface } from "../Bank";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "bankName",
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
    name: "bankOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "customerBalance",
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
    name: "depositMoney",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBankBalance",
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
    name: "getCustomerBalance",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setBankName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_total",
        type: "uint256",
      },
    ],
    name: "withdrawMoney",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610e51806100606000396000f3fe60806040526004361061007b5760003560e01c80637b83b50b1161004e5780637b83b50b1461011b578063a853409a14610146578063e147aaa714610171578063f274c8971461019c5761007b565b806316c05aa21461008057806327d358011461008a57806337ebe47b146100b557806370142690146100f2575b600080fd5b6100886101c5565b005b34801561009657600080fd5b5061009f610261565b6040516100ac9190610950565b60405180910390f35b3480156100c157600080fd5b506100dc60048036038101906100d791906107ac565b6102ef565b6040516100e991906109f2565b60405180910390f35b3480156100fe57600080fd5b5061011960048036038101906101149190610811565b610307565b005b34801561012757600080fd5b506101306103af565b60405161013d91906109f2565b60405180910390f35b34801561015257600080fd5b5061015b610446565b60405161016891906109f2565b60405180910390f35b34801561017d57600080fd5b5061018661048d565b6040516101939190610935565b60405180910390f35b3480156101a857600080fd5b506101c360048036038101906101be91906107d5565b6104b1565b005b6000341415610209576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610200906109b2565b60405180910390fd5b34600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102589190610a7f565b92505081905550565b6001805461026e90610b99565b80601f016020809104026020016040519081016040528092919081815260200182805461029a90610b99565b80156102e75780601f106102bc576101008083540402835291602001916102e7565b820191906000526020600020905b8154815290600101906020018083116102ca57829003601f168201915b505050505081565b60026020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038c90610972565b60405180910390fd5b80600190805190602001906103ab929190610662565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610440576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610437906109d2565b60405180910390fd5b47905090565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461053f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053690610972565b60405180910390fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548111156105c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b890610992565b60405180910390fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106109190610ad5565b925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561065d573d6000803e3d6000fd5b505050565b82805461066e90610b99565b90600052602060002090601f01602090048101928261069057600085556106d7565b82601f106106a957805160ff19168380011785556106d7565b828001600101855582156106d7579182015b828111156106d65782518255916020019190600101906106bb565b5b5090506106e491906106e8565b5090565b5b808211156107015760008160009055506001016106e9565b5090565b600061071861071384610a32565b610a0d565b90508281526020810184848401111561073057600080fd5b61073b848285610b57565b509392505050565b60008135905061075281610dd6565b92915050565b60008135905061076781610ded565b92915050565b600082601f83011261077e57600080fd5b813561078e848260208601610705565b91505092915050565b6000813590506107a681610e04565b92915050565b6000602082840312156107be57600080fd5b60006107cc84828501610743565b91505092915050565b600080604083850312156107e857600080fd5b60006107f685828601610758565b925050602061080785828601610797565b9150509250929050565b60006020828403121561082357600080fd5b600082013567ffffffffffffffff81111561083d57600080fd5b6108498482850161076d565b91505092915050565b61085b81610b09565b82525050565b600061086c82610a63565b6108768185610a6e565b9350610886818560208601610b66565b61088f81610c89565b840191505092915050565b60006108a7602b83610a6e565b91506108b282610c9a565b604082019050919050565b60006108ca602583610a6e565b91506108d582610ce9565b604082019050919050565b60006108ed602983610a6e565b91506108f882610d38565b604082019050919050565b6000610910603683610a6e565b915061091b82610d87565b604082019050919050565b61092f81610b4d565b82525050565b600060208201905061094a6000830184610852565b92915050565b6000602082019050818103600083015261096a8184610861565b905092915050565b6000602082019050818103600083015261098b8161089a565b9050919050565b600060208201905081810360008301526109ab816108bd565b9050919050565b600060208201905081810360008301526109cb816108e0565b9050919050565b600060208201905081810360008301526109eb81610903565b9050919050565b6000602082019050610a076000830184610926565b92915050565b6000610a17610a28565b9050610a238282610bcb565b919050565b6000604051905090565b600067ffffffffffffffff821115610a4d57610a4c610c5a565b5b610a5682610c89565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610a8a82610b4d565b9150610a9583610b4d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610aca57610ac9610bfc565b5b828201905092915050565b6000610ae082610b4d565b9150610aeb83610b4d565b925082821015610afe57610afd610bfc565b5b828203905092915050565b6000610b1482610b2d565b9050919050565b6000610b2682610b2d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b84578082015181840152602081019050610b69565b83811115610b93576000848401525b50505050565b60006002820490506001821680610bb157607f821691505b60208210811415610bc557610bc4610c2b565b5b50919050565b610bd482610c89565b810181811067ffffffffffffffff82111715610bf357610bf2610c5a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f6e6c79207468652062616e6b206f776e65722063616e20706572666f726d2060008201527f7468697320616374696f6e000000000000000000000000000000000000000000602082015250565b7f596f75206861766520696e7375666669656e742066756e647320746f2077697460008201527f6864726177000000000000000000000000000000000000000000000000000000602082015250565b7f596f75206e65656420746f206465706f73697420736f6d6520616d6f756e742060008201527f6f66206d6f6e6579210000000000000000000000000000000000000000000000602082015250565b7f596f75206d75737420626520746865206f776e6572206f66207468652062616e60008201527f6b20746f2073656520616c6c2062616c616e6365732e00000000000000000000602082015250565b610ddf81610b09565b8114610dea57600080fd5b50565b610df681610b1b565b8114610e0157600080fd5b50565b610e0d81610b4d565b8114610e1857600080fd5b5056fea2646970667358221220e7159a464deb5f0f9ae71ec04751c878476497502877ac503082bfa0ef9468b164736f6c63430008040033";

type BankConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BankConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bank__factory extends ContractFactory {
  constructor(...args: BankConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Bank> {
    return super.deploy(overrides || {}) as Promise<Bank>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Bank {
    return super.attach(address) as Bank;
  }
  override connect(signer: Signer): Bank__factory {
    return super.connect(signer) as Bank__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BankInterface {
    return new utils.Interface(_abi) as BankInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bank {
    return new Contract(address, _abi, signerOrProvider) as Bank;
  }
}