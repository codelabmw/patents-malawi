<script setup lang="ts">
import AuthenticatedLayout from '../AppLayouts/AuthenticatedLayout.vue';
import GhostButton from '@/components/GhostButton.vue';
import PatentCard from '@/components/PatentCard.vue';
import UpdateIcon from '@/components/icons/UpdateIcon.vue';

import { onMounted, ref } from 'vue';
import { Routes } from '@/router';
import { RouterLink } from 'vue-router';
import type { Patent } from '@/types';
import { BrowserProvider, Contract, type Eip1193Provider, type JsonRpcSigner } from 'ethers';
import { Contracts, WalletConnectService } from '@/services/WalletConnectService';

const isSelected = ref(false);
const patents = ref<Array<Patent>>([])
const loading = ref<boolean>(true)

let provider: Eip1193Provider | undefined
let signer: JsonRpcSigner
let patents_contract: Contract

onMounted(async () => {
  // initalize variables
  provider = WalletConnectService.instance.modal.getWalletProvider()
  signer = await (new BrowserProvider(provider!)).getSigner()
  patents_contract = new Contract(Contracts.Patents.address, Contracts.Patents.abi, signer)

  load().then(() => loading.value = false)
})

async function load() {
  patents.value = await patents_contract.mine()
}
</script>

<template>
    <AuthenticatedLayout>
        <div>
            <div class="relative">
                <!-- Sub Navigation Area -->
                <div class="absolute z-30 w-full mb-20 -top-20 border-y border-muted-foreground/10">
                    <div class="relative mx-auto max-w-7xl bg-background">
                        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                            <div class="flex items-center justify-between">
                                <!-- Search Field -->
                                <input id="patents" name="patents" type="search" autocomplete="patents" required
                                    class="min-w-0 flex-auto rounded-xl border-0 bg-muted-foreground/15 px-3.5 pt-1.5 pb-2 placeholder:text-[.65rem] text-muted-foreground shadow-sm sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-primary/40"
                                    placeholder="Search">

                                <!-- Mobile menu button -->
                                <div class="flex lg:hidden">
                                    <button @click="isSelected = !isSelected" type="button"
                                        class="text-muted-foreground focus:outline-none" aria-label="toggle menu">
                                        <svg v-if="!isSelected" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                        </svg>

                                        <svg v-if="isSelected" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div :class="[isSelected ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
                                class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-background md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                                <div class="flex flex-col items-center md:flex-row md:mx-4">
                                    <GhostButton label="All" />
                                    <GhostButton label="Approved" />
                                    <GhostButton label="Pending" />
                                    <GhostButton label="Rejected" />
                                    <GhostButton label="Filters" />
                                </div>

                                <div class="flex justify-center md:block">
                                    <RouterLink :to="Routes.create.path"
                                        class="px-4 py-2 text-xs transition-colors duration-300 transform rounded-md bg-primary text-primary-foreground md:my-0">
                                        Create
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main -->
            <main class="block mx-auto mt-20 max-w-7xl">
                <div v-if="!loading">
                    <div v-if="patents.length" class="min-h-screen py-8 px-6">
                        <div class="grid grid-cols-1 gap-8 xl:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div class="w-full" v-for="(patent, i) in patents" :key="i">
                                <RouterLink :to="`/dashboard/patents/${patent.id}`">
                                    <PatentCard :patent="patent" />
                                </RouterLink>
                            </div>
                        </div>
                    </div>

                    <div v-else class="w-full h-[70vh] grid place-content-center">
                        <div class="text-center">
                            <div class="grid place-content-center">
                                <UpdateIcon class="text-6xl text-muted-foreground" />
                            </div>
                            <p class="max-w-lg mt-4 text-muted-foreground">
                                It seems that you don't have any patents! Created patents will appear here.
                            </p>
                            <div class="mt-6">
                                <RouterLink :to="Routes.create.path"
                                    class="px-4 py-2 text-base transition-colors duration-300 transform rounded-md bg-primary text-primary-foreground md:my-0">
                                    Create Patent
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- loading state -->
                <div v-else class="py-10 px-6">
                    <div class="w-full animate-pulse">
                        <div class="grid grid-cols-1 gap-8 xl:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div class="w-full" v-for="i in 9" :key="i">
                                <div class="w-full h-64 bg-muted-foreground/20 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
