<script lang="ts" setup>
import { RouterLink } from 'vue-router';

defineProps({
    label: { type: String, required: true },
    href: {
        type: String,
        required: false,
        default: ''
    }
})
</script>

<template>
    <button v-if="!href"
        class="w-full px-5 py-3 mt-6 text-base font-light tracking-wider transition-colors duration-300 transform rounded-lg bg-muted text-muted:w-auto hover:brightness-95 focus:outline-none focus:brightness-95">{{
            label }}
    </button>

    <span v-if="href">
        <RouterLink :to="href!"
            class="inline-block w-full px-5 py-3 mt-6 text-base font-light tracking-wider transition-colors duration-300 transform rounded-lg bg-muted text-muted-foreground lg:w-auto hover:brightness-95 focus:outline-none focus:brightness-95">
            {{
                label }}
        </RouterLink>
    </span>
</template>