<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
</script>

<template>
    <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="relative inline-block p-4 overflow-hidden text-center align-middle transition-all transform">
            <div class="flex items-center justify-center mx-auto">
                <img src="@/assets/images/Connect-Illustration.svg" alt="Connect-Illustration.svg" class="w-[20%]" />
            </div>

            <div class="mt-5 text-center">
                <h2 class="text-2xl">Authentication</h2>
                <p class="max-w-3xl mt-6 text-xs">
                    Patents Malawi uses the blockchain technology to facilitate data management, as such users who want
                    to apply for patents must have a crypto currency wallet. You can easily get started with <span
                        class="font-light underline text-primary">MetaMask</span>,
                    when you're done you can continue with linking your wallet here to apply for patents.
                </p>
            </div>

            <div class="flex items-center justify-center mt-6 space-x-2">
                <PrimaryButton href="/dashboard" label="Connect Wallet" />

                <SecondaryButton href="/" label="Back to Home" />
            </div>
        </div>
    </div>
</template>
