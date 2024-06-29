<script lang="ts" setup>
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import NotificationIcon from '@/components/icons/NotificationIcon.vue';

import { ref } from 'vue';
import { Routes } from '@/router';
import { RouterLink, useRouter } from 'vue-router'
import { useWeb3Modal } from '@web3modal/ethers/vue';
import { Connection } from '@/services/WalletConnectService';

const isOpen = ref(false)
const toggleProfile = ref(false)
const toggleNotification = ref(false)

const modal = useWeb3Modal()
const router = useRouter()

document.addEventListener(Connection.DISCONNECTED, () => {
    router.push(Routes.apply.name)
}, { once: true })
</script>

<template>
    <nav class="relative mx-auto max-w-7xl bg-background">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <RouterLink :to="Routes.home.path">
                    <ApplicationLogo class="w-48" />
                </RouterLink>

                <!-- Mobile menu button -->
                <div class="flex lg:hidden">
                    <button @click="isOpen = !isOpen" type="button" class="text-muted-foreground focus:outline-none"
                        aria-label="toggle menu">
                        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
                class="absolute inset-x-0 z-50 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-background md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                <div class="flex flex-col md:flex-row md:mx-6">
                    <RouterLink to="/dashboard" exactActiveClass="text-primary font-medium bg-primary/10 rounded"
                        class="rounded my-2 text-xs px-2.5 py-2 transition-colors duration-300 transform hover:bg-muted text-muted-foreground md:mx-1 md:my-0">
                        My Patents
                    </RouterLink>
                    <RouterLink to="/support" exactActiveClass="text-primary font-medium bg-primary/10 rounded"
                        class="rounded my-2 text-xs px-2.5 py-2 transition-colors duration-300 transform hover:bg-muted text-muted-foreground md:my-0">
                        Support
                    </RouterLink>
                </div>

                <!-- Notifications dropdown -->
                <div class="flex justify-center md:block">
                    <div class="relative ml-3">
                        <div>
                            <button type="button" @click="toggleNotification = !toggleNotification"
                                class="relative flex p-1 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-muted-foreground"
                                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">Open user menu</span>
                                <NotificationIcon class="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Profile dropdown -->
                <div class="flex justify-center md:block">
                    <div class="relative ml-3">
                        <div>
                            <button type="button" @click="toggleProfile = !toggleProfile"
                                class="relative flex p-1 text-sm rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-muted-foreground"
                                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">Open user menu</span>
                                <!-- <ProfileIcon class="text-lg" /> -->
                                <img class="w-6 h-6 rounded-full"
                                    src="https://api.iconify.design/teenyicons:anja-outline.svg" alt="">
                            </button>
                        </div>

                        <div v-if="toggleProfile"
                            class="absolute right-0 z-50 w-48 p-2 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                id="user-menu-item-0">Your Profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                id="user-menu-item-1">Settings</a>
                            <hr>
                            <button @click="modal.open()"
                                class="w-full block mt-2 px-4 py-2 text-left text-sm text-muted-foreground hover:bg-muted">
                                Wallet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <slot></slot>
</template>