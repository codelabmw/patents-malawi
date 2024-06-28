<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import ApplicationLogo from './ApplicationLogo.vue';
import { ref } from 'vue';

const isOpen = ref(false)
</script>

<template>
    <nav class="relative max-w-7xl bg-background">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <a href="/">
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
                class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-background md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                <div class="flex flex-col md:flex-row md:mx-6">
                    <RouterLink to="/" exactActiveClass="text-primary font-semibold bg-primary/10 rounded"
                        class="rounded my-2 text-sm px-2.5 py-2 transition-colors duration-300 transform hover:bg-muted text-muted-foreground md:mx-1 md:my-0">
                        Home
                    </RouterLink>
                    <RouterLink to="/browse" exactActiveClass="text-primary font-semibold bg-primary/10 rounded"
                        class="rounded my-2 text-sm px-2.5 py-2 transition-colors duration-300 transform hover:bg-muted text-muted-foreground md:mx-1 md:my-0">
                        Browse
                    </RouterLink>
                    <RouterLink to="/how-it-works" exactActiveClass="text-primary font-semibold bg-primary/10 rounded"
                        class="rounded my-2 text-sm px-2.5 py-2 transition-colors duration-300 transform hover:bg-muted text-muted-foreground md:mx-1 md:my-0">
                        How
                        it works
                    </RouterLink>
                    <RouterLink to="/terms" exactActiveClass="text-primary font-semibold bg-primary/10 rounded"
                        class="rounded my-2 text-sm px-2.5 py-2 transition-colors duration-300 transform hover:bg-muted text-muted-foreground md:mx-1 md:my-0">
                        Terms &
                        Policy</RouterLink>
                    <RouterLink to="/support" exactActiveClass="text-primary font-semibold bg-primary/10 rounded"
                        class="rounded my-2 text-sm px-2.5 py-2 transition-colors duration-300 transform hover:bg-muted text-muted-foreground md:my-0">
                        Support
                    </RouterLink>
                </div>

                <div class="flex justify-center md:block">
                    <RouterLink to="/apply"
                        class="px-4 py-2 text-sm transition-colors duration-300 transform rounded-md bg-primary text-primary-foreground md:my-0">
                        Apply
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>