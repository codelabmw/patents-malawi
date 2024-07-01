<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
import LoadingIcon from '@/components/icons/LoadingIcon.vue';

import { Routes } from '@/router';
import { useWeb3Modal } from '@web3modal/ethers/vue';
import { useRouter } from 'vue-router';
import { Connection } from '@/services/WalletConnectService';
import { ref } from 'vue';

const modal = useWeb3Modal()

const loading = ref<boolean>(false)
const router = useRouter()

document.addEventListener(Connection.CONNECTED, () => {
    router.push(Routes.intended)
}, { once: true })
</script>

<template>
    <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="relative inline-block p-4 overflow-hidden text-center align-middle transition-all transform">
            <div class="flex items-center justify-center mx-auto">
                <img src="@/assets/images/Connect-Illustration.svg" alt="Connect-Illustration.svg" class="w-[20%]" />
            </div>

            <div class="mt-5 text-center">
                <h2 class="text-2xl">Get Connected!</h2>
                <p class="max-w-4xl mt-6">
                    Patents Malawi uses blockchain technology to facilitate data management, as such to view <small>(at no cost)</small> and
                    create patents users must have a crypto currency wallet. You can easily get started with 
                    <a href="https://metamask.io" target="_blank" class="font-light text-primary hover:underline">MetaMask</a>,
                    when you're done you can continue with linking your wallet here to view and create patents.
                </p>
            </div>

            <div v-if="loading" class="mt-6 grid place-content-center">
                <LoadingIcon class="text-4xl text-primary" />
            </div>

            <div v-else class="flex items-center justify-center mt-6 space-x-2">
                <PrimaryButton @click="loading = true, modal.open()" label="Connect Wallet" />

                <SecondaryButton href="/" label="Back to Home" />
            </div>
        </div>
    </div>
</template>
