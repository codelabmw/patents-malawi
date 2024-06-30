/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string,
    // application details...
    readonly VITE_APP_NAME: string,
    readonly VITE_APP_URL: string,

    // wallet connect
    readonly VITE_WALLET_CONNECT_PROJECT_ID: string,

    // contracts on chain
    readonly VITE_PATENTS_CONTRACT_ADDRESS: string,
    readonly VITE_PROFILES_CONTRACT_ADDRESS: string,
    readonly VITE_CATEGORIES_CONTRACT_ADDRESS: string,
    readonly VITE_TAGS_CONTRACT_ADDRESS: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}