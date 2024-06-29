import './assets/main.css'
import { WalletConnectService } from './services/WalletConnectService'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// initialize wallet connect service and listen for events
WalletConnectService.initialize().listen();

app.mount('#app')

