import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/vue'

export class Chains {
    static mainnet = {
        chainId: 1,
        name: 'Ethereum',
        currency: 'ETH',
        explorerUrl: 'https://etherscan.io',
        rpcUrl: 'https://cloudflare-eth.com'
    }

    static sepolia = {
        chainId: 11155111,
        name: 'Sepolia',
        currency: 'ETH',
        explorerUrl: 'https://sepolia.etherscan.io',
        rpcUrl: 'https://eth-sepolia.g.alchemy.com/v2/demo'
    }
}

export enum Connection {
    CONNECTED = 'WALLET_CONNECTED',
    DISCONNECTED = 'WALLET_CDISCONNECTED'
}

export class WalletConnectService {
    private static _instance: WalletConnectService;

    static get instance() {
        if (!this._instance) {
            this._instance = new WalletConnectService
        }

        return this._instance
    }

    public modal;

    private constructor() {
        const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

        const metadata = {
            name: import.meta.env.VITE_APP_NAME,
            description: "Reserve ownership rights of your intellectual properties knowing they're safe and secure on Patents Malawi.",
            url: import.meta.env.VITE_APP_URL,
            icons: [
                `${import.meta.env.VITE_APP_URL}/icons/icon.svg`,
                `${import.meta.env.VITE_APP_URL}/icons/logo.svg`,
            ],
        }

        const ethersConfig = defaultConfig({
            metadata,
            defaultChainId: 1,
        })

        this.modal = createWeb3Modal({
            ethersConfig,
            chains: [Chains.mainnet, Chains.sepolia],
            projectId,
        })
    }

    static initialize(): WalletConnectService {
        return this.instance;
    }

    public listen(): void {
        this.modal.subscribeProvider(state => {
            if (state.isConnected) {
                document.dispatchEvent(new Event(Connection.CONNECTED))
            } else if (!state.isConnected) {
                document.dispatchEvent(new Event(Connection.DISCONNECTED))
            }
        })
    }

    public connected(): boolean {
        return this.modal.getIsConnected();
    }
}

export class Contracts {
    static Patents = {
        address: import.meta.env.VITE_PATENTS_CONTRACT_ADDRESS,
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_summary",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_body",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_category",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "_tags",
                        "type": "string[]"
                    },
                    {
                        "internalType": "string",
                        "name": "_user",
                        "type": "string"
                    }
                ],
                "name": "add",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "remove",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "renew",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_summary",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_body",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_category",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "_tags",
                        "type": "string[]"
                    }
                ],
                "name": "update",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "updateCreationFee",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "updateRenewalFee",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "withdraw",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_newOwner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "changeOwner",
                "outputs": [],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "count",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "creationFee",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "get",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "title",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "summary",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "body",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "created_at",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "updated_at",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "category",
                                "type": "string"
                            },
                            {
                                "internalType": "string[]",
                                "name": "tags",
                                "type": "string[]"
                            },
                            {
                                "internalType": "string",
                                "name": "user",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "author",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct Patent",
                        "name": "",
                        "type": "tuple"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "mine",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "title",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "summary",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "body",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "created_at",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "updated_at",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "category",
                                "type": "string"
                            },
                            {
                                "internalType": "string[]",
                                "name": "tags",
                                "type": "string[]"
                            },
                            {
                                "internalType": "string",
                                "name": "user",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "author",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct Patent[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renewalFee",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "revenew",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_limit",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_offset",
                        "type": "uint256"
                    }
                ],
                "name": "some",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "title",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "summary",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "body",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "created_at",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "updated_at",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "category",
                                "type": "string"
                            },
                            {
                                "internalType": "string[]",
                                "name": "tags",
                                "type": "string[]"
                            },
                            {
                                "internalType": "string",
                                "name": "user",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "author",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct Patent[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    }
}