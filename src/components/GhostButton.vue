<script lang="ts" setup>
import { RouterLink } from 'vue-router';

defineProps({
    label: { type: String, required: true },
    href: {
        type: String,
        required: false,
        default: ''
    },
    active: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <button v-if="!href"
        :class="`w-full px-2 py-2 text-xs font-light tracking-wider transition-colors duration-300 transform bg-transparent rounded-lg ${active ? 'text-primary bg-primary/10' : 'text-muted-foreground'} lg:w-auto hover:bg-muted-foreground/10 focus:outline-none focus:bg-primary/95`">{{
            label }}
    </button>

    <span v-if="href">
        <RouterLink :to="href!"
            :class="`inline-block w-full px-2 py-2 text-xs font-light tracking-wider transition-colors duration-300 transform bg-transparent rounded-lg ${active ? 'text-primary bg-primary/10' : 'text-muted-foreground'} lg:w-auto hover:bg-muted-foreground/10 focus:outline-none focus:bg-primary/95`">
            {{
                label }}
        </RouterLink>
    </span>
</template>