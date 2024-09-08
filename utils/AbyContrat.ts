export const AbyToken = [{ inputs: [{ internalType: 'string', name: 'name_', type: 'string' }, { internalType: 'string', name: 'symbol_', type: 'string' }, { internalType: 'uint8', name: 'decimals_', type: 'uint8' }, { internalType: 'uint256', name: 'totalSupply_', type: 'uint256' }, { internalType: 'address', name: 'pinkAntiBot_', type: 'address' }, { internalType: 'address', name: 'serviceFeeReceiver_', type: 'address' }, { internalType: 'uint256', name: 'serviceFee_', type: 'uint256' }], stateMutability: 'payable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'owner', type: 'address' }, { indexed: true, internalType: 'address', name: 'spender', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' }, { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'owner', type: 'address' }, { indexed: true, internalType: 'address', name: 'token', type: 'address' }, { indexed: false, internalType: 'enum TokenType', name: 'tokenType', type: 'uint8' }, { indexed: false, internalType: 'uint256', name: 'version', type: 'uint256' }], name: 'TokenCreated', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'from', type: 'address' }, { indexed: true, internalType: 'address', name: 'to', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { inputs: [], name: 'VERSION', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'address', name: 'spender', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'approve', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }], name: 'decreaseAllowance', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'enableAntiBot', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'addedValue', type: 'uint256' }], name: 'increaseAllowance', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'pinkAntiBot', outputs: [{ internalType: 'contract IPinkAntiBot', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'bool', name: '_enable', type: 'bool' }], name: 'setEnableAntiBot', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'recipient', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'transfer', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'sender', type: 'address' }, { internalType: 'address', name: 'recipient', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'transferFrom', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }]

export const AbyContractAddress = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_paymentToken',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'claimer',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'TokensClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'buyer',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'TokensPurchased',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'claimer',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'USDTClaimed',
    type: 'event'
  },
  {
    inputs: [],
    name: '_tokenPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: '_tokens',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokens',
        type: 'uint256'
      }
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'checkTimePhase',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'claimTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'claimUSDT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'currentPhase',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'total',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'phase',
            type: 'uint256'
          }
        ],
        internalType: 'struct SalesOficialUnity2.Phase',
        name: '',
        type: 'tuple'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'endSale',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'phaseId',
        type: 'uint256'
      }
    ],
    name: 'phase',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'total',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'phase',
            type: 'uint256'
          }
        ],
        internalType: 'struct SalesOficialUnity2.Phase',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'saleEnded',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'switchPhase',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'tokensSold',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

export const AbyUsdt = [{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'owner', type: 'address' }, { indexed: true, internalType: 'address', name: 'spender', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'address', name: 'userAddress', type: 'address' }, { indexed: false, internalType: 'address payable', name: 'relayerAddress', type: 'address' }, { indexed: false, internalType: 'bytes', name: 'functionSignature', type: 'bytes' }], name: 'MetaTransactionExecuted', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' }, { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' }, { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }], name: 'RoleAdminChanged', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' }, { indexed: true, internalType: 'address', name: 'account', type: 'address' }, { indexed: true, internalType: 'address', name: 'sender', type: 'address' }], name: 'RoleGranted', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' }, { indexed: true, internalType: 'address', name: 'account', type: 'address' }, { indexed: true, internalType: 'address', name: 'sender', type: 'address' }], name: 'RoleRevoked', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'from', type: 'address' }, { indexed: true, internalType: 'address', name: 'to', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { inputs: [], name: 'CHILD_CHAIN_ID', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'CHILD_CHAIN_ID_BYTES', outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'DEFAULT_ADMIN_ROLE', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'DEPOSITOR_ROLE', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'ERC712_VERSION', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'ROOT_CHAIN_ID', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'ROOT_CHAIN_ID_BYTES', outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'address', name: 'spender', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'approve', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }], name: 'decreaseAllowance', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'user', type: 'address' }, { internalType: 'bytes', name: 'depositData', type: 'bytes' }], name: 'deposit', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'userAddress', type: 'address' }, { internalType: 'bytes', name: 'functionSignature', type: 'bytes' }, { internalType: 'bytes32', name: 'sigR', type: 'bytes32' }, { internalType: 'bytes32', name: 'sigS', type: 'bytes32' }, { internalType: 'uint8', name: 'sigV', type: 'uint8' }], name: 'executeMetaTransaction', outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }], stateMutability: 'payable', type: 'function' }, { inputs: [], name: 'getChainId', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'pure', type: 'function' }, { inputs: [], name: 'getDomainSeperator', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'user', type: 'address' }], name: 'getNonce', outputs: [{ internalType: 'uint256', name: 'nonce', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }], name: 'getRoleAdmin', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'uint256', name: 'index', type: 'uint256' }], name: 'getRoleMember', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }], name: 'getRoleMemberCount', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'grantRole', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'hasRole', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'addedValue', type: 'uint256' }], name: 'increaseAllowance', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'string', name: 'name_', type: 'string' }, { internalType: 'string', name: 'symbol_', type: 'string' }, { internalType: 'uint8', name: 'decimals_', type: 'uint8' }, { internalType: 'address', name: 'childChainManager', type: 'address' }], name: 'initialize', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'renounceRole', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'revokeRole', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'recipient', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'transfer', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'sender', type: 'address' }, { internalType: 'address', name: 'recipient', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'transferFrom', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'withdraw', outputs: [], stateMutability: 'nonpayable', type: 'function' }]

export const contract = '0x97013c6D1cA7Be2C8a7a72d90Dd947cA2D5C62b5'

export const contractUSDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'

export const contractToken = '0x248f2b2Ca86Dc1033be2Df56E5481f4f8BBE8c89'
