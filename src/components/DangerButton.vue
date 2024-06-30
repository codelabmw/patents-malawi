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

const emit = defineEmits(['click'])
</script>

<template>
    <button v-if="!href" @click="emit('click')"
        class="w-full px-5 py-3 mt-6 text-base font-light tracking-wider transition-colors duration-300 transform rounded-lg text-accent-foreground bg-accent lg:w-auto hover:bg-accent/95 focus:outline-none focus:bg-accent/95">{{
            label }}
    </button>

    <span v-if="href">
        <RouterLink :to="href!"
            class="inline-block w-full px-5 py-3 mt-6 text-base font-light tracking-wider transition-colors duration-300 transform rounded-lg text-accent-foreground bg-accent lg:w-auto hover:bg-accent/95 focus:outline-none focus:bg-accent/95">
            {{
                label }}
        </RouterLink>
    </span>
</template>