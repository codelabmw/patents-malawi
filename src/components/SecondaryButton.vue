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
        class="w-full px-5 py-3 mt-6 text-xs font-light tracking-wider transition-colors duration-300 transform rounded-lg bg-muted-foreground/20 text-muted-foreground lg:w-auto hover:bg-muted-foreground/10 focus:outline-none focus:bg-muted-foreground/10">{{
            label }}
    </button>

    <span v-if="href">
        <RouterLink :to="href!"
            class="inline-block w-full px-5 py-3 mt-6 text-xs font-light tracking-wider transition-colors duration-300 transform rounded-lg bg-muted-foreground/20 text-muted-foreground lg:w-auto hover:bg-muted-foreground/10 focus:outline-none focus:bg-muted-foreground/10">
            {{
                label }}
        </RouterLink>
    </span>
</template>