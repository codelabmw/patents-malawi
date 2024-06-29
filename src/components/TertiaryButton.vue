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
        class="w-full px-5 py-3 mt-6 text-base font-light tracking-wider transition-colors duration-300 transform rounded-lg text-muted-foreground bg-muted lg:w-auto hover:bg-muted/95 focus:outline-none focus:bg-muted/95">{{
            label }}
    </button>

    <span v-if="href">
        <RouterLink :to="href!"
            class="inline-block w-full px-5 py-3 mt-6 text-base font-light tracking-wider transition-colors duration-300 transform rounded-lg text-muted-foreground bg-muted lg:w-auto hover:bg-muted/95 focus:outline-none focus:bg-muted/95">
            {{
                label }}
        </RouterLink>
    </span>
</template>