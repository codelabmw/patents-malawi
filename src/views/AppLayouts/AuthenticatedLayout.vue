<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import { ref } from 'vue';

const isOpen = ref(false)
const toggleProfile = ref(false)
</script>

<template>
    <nav class="relative mx-auto max-w-7xl bg-background">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <a href="/dashboard">
                    <ApplicationLogo class="w-48" />
                </a>

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
                    <RouterLink to="/browse" exactActiveClass="text-primary font-medium bg-primary/10 rounded"
                        class="rounded my-2 text-xs px-2.5 py-2 transition-colors duration-300 transform hover:bg-muted text-muted-foreground md:mx-1 md:my-0">
                        Browse
                    </RouterLink>
                    <RouterLink to="/terms" exactActiveClass="text-primary font-medium bg-primary/10 rounded"
                        class="rounded my-2 text-xs px-2.5 py-2 transition-colors duration-300 transform hover:bg-muted text-muted-foreground md:mx-1 md:my-0">
                        Terms &
                        Policy</RouterLink>
                    <RouterLink to="/support" exactActiveClass="text-primary font-medium bg-primary/10 rounded"
                        class="rounded my-2 text-xs px-2.5 py-2 transition-colors duration-300 transform hover:bg-muted text-muted-foreground md:my-0">
                        Support
                    </RouterLink>
                </div>

                <div class="flex justify-center md:block">
                    <!-- Profile dropdown -->
                    <div class="relative ml-3">
                        <div>
                            <button type="button" @click="toggleProfile = !toggleProfile"
                                class="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="">
                            </button>
                        </div>

                        <div v-if="toggleProfile"
                            class="absolute right-0 z-50 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                id="user-menu-item-0">Your Profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                id="user-menu-item-1">Settings</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                id="user-menu-item-2">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <slot></slot>
</template>