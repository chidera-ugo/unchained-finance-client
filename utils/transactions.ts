export const transactions = {
  _format: 'hh-sol-artifact-1',
  contractName: 'Transactions',
  sourceName: 'contracts/Transactions.sol',
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'receiver',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'message',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'keyword',
          type: 'string',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: 'receiver',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'message',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'keyword',
          type: 'string',
        },
      ],
      name: 'addToBlockChain',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllTransactions',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'receiver',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'message',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'timestamp',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'keyword',
              type: 'string',
            },
          ],
          internalType: 'struct Transactions.TransactionsStruct[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'getTransaction',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'receiver',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'message',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'timestamp',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'keyword',
              type: 'string',
            },
          ],
          internalType: 'struct Transactions.TransactionsStruct',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTransactionCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  bytecode:
    '0x608060405234801561001057600080fd5b50610fe2806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806327506f53146100515780632e7700f01461006f57806333ea3dc81461008d578063b2da0960146100bd575b600080fd5b6100596100d9565b6040516100669190610c53565b60405180910390f35b61007761031c565b6040516100849190610c97565b60405180910390f35b6100a760048036038101906100a29190610955565b610325565b6040516100b49190610c75565b60405180910390f35b6100d760048036038101906100d291906108c2565b61056b565b005b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561031357838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101e690610e34565b80601f016020809104026020016040519081016040528092919081815260200182805461021290610e34565b801561025f5780601f106102345761010080835404028352916020019161025f565b820191906000526020600020905b81548152906001019060200180831161024257829003601f168201915b505050505081526020016004820154815260200160058201805461028290610e34565b80601f01602080910402602001604051908101604052809291908181526020018280546102ae90610e34565b80156102fb5780601f106102d0576101008083540402835291602001916102fb565b820191906000526020600020905b8154815290600101906020018083116102de57829003601f168201915b505050505081525050815260200190600101906100fd565b50505050905090565b60008054905090565b61032d61072b565b60018281548110610367577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461044690610e34565b80601f016020809104026020016040519081016040528092919081815260200182805461047290610e34565b80156104bf5780601f10610494576101008083540402835291602001916104bf565b820191906000526020600020905b8154815290600101906020018083116104a257829003601f168201915b50505050508152602001600482015481526020016005820180546104e290610e34565b80601f016020809104026020016040519081016040528092919081815260200182805461050e90610e34565b801561055b5780601f106105305761010080835404028352916020019161055b565b820191906000526020600020905b81548152906001019060200180831161053e57829003601f168201915b5050505050815250509050919050565b60008081548092919061057d90610e97565b919050555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190805190602001906106ba92919061078d565b506080820151816004015560a08201518160050190805190602001906106e192919061078d565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161071d96959493929190610be4565b60405180910390a150505050565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016060815260200160008152602001606081525090565b82805461079990610e34565b90600052602060002090601f0160209004810192826107bb5760008555610802565b82601f106107d457805160ff1916838001178555610802565b82800160010185558215610802579182015b828111156108015782518255916020019190600101906107e6565b5b50905061080f9190610813565b5090565b5b8082111561082c576000816000905550600101610814565b5090565b600061084361083e84610cd7565b610cb2565b90508281526020810184848401111561085b57600080fd5b610866848285610df2565b509392505050565b60008135905061087d81610f7e565b92915050565b600082601f83011261089457600080fd5b81356108a4848260208601610830565b91505092915050565b6000813590506108bc81610f95565b92915050565b600080600080608085870312156108d857600080fd5b60006108e68782880161086e565b94505060206108f7878288016108ad565b935050604085013567ffffffffffffffff81111561091457600080fd5b61092087828801610883565b925050606085013567ffffffffffffffff81111561093d57600080fd5b61094987828801610883565b91505092959194509250565b60006020828403121561096757600080fd5b6000610975848285016108ad565b91505092915050565b600061098a8383610aa6565b905092915050565b61099b81610dbc565b82525050565b6109aa81610d6e565b82525050565b6109b981610d6e565b82525050565b60006109ca82610d18565b6109d48185610d3b565b9350836020820285016109e685610d08565b8060005b85811015610a225784840389528151610a03858261097e565b9450610a0e83610d2e565b925060208a019950506001810190506109ea565b50829750879550505050505092915050565b6000610a3f82610d23565b610a498185610d4c565b9350610a59818560208601610e01565b610a6281610f6d565b840191505092915050565b6000610a7882610d23565b610a828185610d5d565b9350610a92818560208601610e01565b610a9b81610f6d565b840191505092915050565b600060c083016000830151610abe60008601826109a1565b506020830151610ad160208601826109a1565b506040830151610ae46040860182610bc6565b5060608301518482036060860152610afc8282610a34565b9150506080830151610b116080860182610bc6565b5060a083015184820360a0860152610b298282610a34565b9150508091505092915050565b600060c083016000830151610b4e60008601826109a1565b506020830151610b6160208601826109a1565b506040830151610b746040860182610bc6565b5060608301518482036060860152610b8c8282610a34565b9150506080830151610ba16080860182610bc6565b5060a083015184820360a0860152610bb98282610a34565b9150508091505092915050565b610bcf81610db2565b82525050565b610bde81610db2565b82525050565b600060c082019050610bf960008301896109b0565b610c066020830188610992565b610c136040830187610bd5565b8181036060830152610c258186610a6d565b9050610c346080830185610bd5565b81810360a0830152610c468184610a6d565b9050979650505050505050565b60006020820190508181036000830152610c6d81846109bf565b905092915050565b60006020820190508181036000830152610c8f8184610b36565b905092915050565b6000602082019050610cac6000830184610bd5565b92915050565b6000610cbc610ccd565b9050610cc88282610e66565b919050565b6000604051905090565b600067ffffffffffffffff821115610cf257610cf1610f3e565b5b610cfb82610f6d565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610d7982610d92565b9050919050565b6000610d8b82610d92565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610dc782610dce565b9050919050565b6000610dd982610de0565b9050919050565b6000610deb82610d92565b9050919050565b82818337600083830152505050565b60005b83811015610e1f578082015181840152602081019050610e04565b83811115610e2e576000848401525b50505050565b60006002820490506001821680610e4c57607f821691505b60208210811415610e6057610e5f610f0f565b5b50919050565b610e6f82610f6d565b810181811067ffffffffffffffff82111715610e8e57610e8d610f3e565b5b80604052505050565b6000610ea282610db2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610ed557610ed4610ee0565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610f8781610d80565b8114610f9257600080fd5b50565b610f9e81610db2565b8114610fa957600080fd5b5056fea2646970667358221220c7bce7508f7a4e2879529ed65f1e8c0bd89dc4e5a0cdd9ffa87de2b32f56d72264736f6c63430008040033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806327506f53146100515780632e7700f01461006f57806333ea3dc81461008d578063b2da0960146100bd575b600080fd5b6100596100d9565b6040516100669190610c53565b60405180910390f35b61007761031c565b6040516100849190610c97565b60405180910390f35b6100a760048036038101906100a29190610955565b610325565b6040516100b49190610c75565b60405180910390f35b6100d760048036038101906100d291906108c2565b61056b565b005b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561031357838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101e690610e34565b80601f016020809104026020016040519081016040528092919081815260200182805461021290610e34565b801561025f5780601f106102345761010080835404028352916020019161025f565b820191906000526020600020905b81548152906001019060200180831161024257829003601f168201915b505050505081526020016004820154815260200160058201805461028290610e34565b80601f01602080910402602001604051908101604052809291908181526020018280546102ae90610e34565b80156102fb5780601f106102d0576101008083540402835291602001916102fb565b820191906000526020600020905b8154815290600101906020018083116102de57829003601f168201915b505050505081525050815260200190600101906100fd565b50505050905090565b60008054905090565b61032d61072b565b60018281548110610367577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461044690610e34565b80601f016020809104026020016040519081016040528092919081815260200182805461047290610e34565b80156104bf5780601f10610494576101008083540402835291602001916104bf565b820191906000526020600020905b8154815290600101906020018083116104a257829003601f168201915b50505050508152602001600482015481526020016005820180546104e290610e34565b80601f016020809104026020016040519081016040528092919081815260200182805461050e90610e34565b801561055b5780601f106105305761010080835404028352916020019161055b565b820191906000526020600020905b81548152906001019060200180831161053e57829003601f168201915b5050505050815250509050919050565b60008081548092919061057d90610e97565b919050555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190805190602001906106ba92919061078d565b506080820151816004015560a08201518160050190805190602001906106e192919061078d565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161071d96959493929190610be4565b60405180910390a150505050565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016060815260200160008152602001606081525090565b82805461079990610e34565b90600052602060002090601f0160209004810192826107bb5760008555610802565b82601f106107d457805160ff1916838001178555610802565b82800160010185558215610802579182015b828111156108015782518255916020019190600101906107e6565b5b50905061080f9190610813565b5090565b5b8082111561082c576000816000905550600101610814565b5090565b600061084361083e84610cd7565b610cb2565b90508281526020810184848401111561085b57600080fd5b610866848285610df2565b509392505050565b60008135905061087d81610f7e565b92915050565b600082601f83011261089457600080fd5b81356108a4848260208601610830565b91505092915050565b6000813590506108bc81610f95565b92915050565b600080600080608085870312156108d857600080fd5b60006108e68782880161086e565b94505060206108f7878288016108ad565b935050604085013567ffffffffffffffff81111561091457600080fd5b61092087828801610883565b925050606085013567ffffffffffffffff81111561093d57600080fd5b61094987828801610883565b91505092959194509250565b60006020828403121561096757600080fd5b6000610975848285016108ad565b91505092915050565b600061098a8383610aa6565b905092915050565b61099b81610dbc565b82525050565b6109aa81610d6e565b82525050565b6109b981610d6e565b82525050565b60006109ca82610d18565b6109d48185610d3b565b9350836020820285016109e685610d08565b8060005b85811015610a225784840389528151610a03858261097e565b9450610a0e83610d2e565b925060208a019950506001810190506109ea565b50829750879550505050505092915050565b6000610a3f82610d23565b610a498185610d4c565b9350610a59818560208601610e01565b610a6281610f6d565b840191505092915050565b6000610a7882610d23565b610a828185610d5d565b9350610a92818560208601610e01565b610a9b81610f6d565b840191505092915050565b600060c083016000830151610abe60008601826109a1565b506020830151610ad160208601826109a1565b506040830151610ae46040860182610bc6565b5060608301518482036060860152610afc8282610a34565b9150506080830151610b116080860182610bc6565b5060a083015184820360a0860152610b298282610a34565b9150508091505092915050565b600060c083016000830151610b4e60008601826109a1565b506020830151610b6160208601826109a1565b506040830151610b746040860182610bc6565b5060608301518482036060860152610b8c8282610a34565b9150506080830151610ba16080860182610bc6565b5060a083015184820360a0860152610bb98282610a34565b9150508091505092915050565b610bcf81610db2565b82525050565b610bde81610db2565b82525050565b600060c082019050610bf960008301896109b0565b610c066020830188610992565b610c136040830187610bd5565b8181036060830152610c258186610a6d565b9050610c346080830185610bd5565b81810360a0830152610c468184610a6d565b9050979650505050505050565b60006020820190508181036000830152610c6d81846109bf565b905092915050565b60006020820190508181036000830152610c8f8184610b36565b905092915050565b6000602082019050610cac6000830184610bd5565b92915050565b6000610cbc610ccd565b9050610cc88282610e66565b919050565b6000604051905090565b600067ffffffffffffffff821115610cf257610cf1610f3e565b5b610cfb82610f6d565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610d7982610d92565b9050919050565b6000610d8b82610d92565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610dc782610dce565b9050919050565b6000610dd982610de0565b9050919050565b6000610deb82610d92565b9050919050565b82818337600083830152505050565b60005b83811015610e1f578082015181840152602081019050610e04565b83811115610e2e576000848401525b50505050565b60006002820490506001821680610e4c57607f821691505b60208210811415610e6057610e5f610f0f565b5b50919050565b610e6f82610f6d565b810181811067ffffffffffffffff82111715610e8e57610e8d610f3e565b5b80604052505050565b6000610ea282610db2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610ed557610ed4610ee0565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610f8781610d80565b8114610f9257600080fd5b50565b610f9e81610db2565b8114610fa957600080fd5b5056fea2646970667358221220c7bce7508f7a4e2879529ed65f1e8c0bd89dc4e5a0cdd9ffa87de2b32f56d72264736f6c63430008040033',
  linkReferences: {},
  deployedLinkReferences: {},
}
