/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string,
    // custom env variables...
    readonly VITE_APP_NAME: string,
    readonly VITE_APP_URL: string,
    readonly VITE_WALLET_CONNECT_PROJECT_ID: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}