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