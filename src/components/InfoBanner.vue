<script setup lang="ts">
defineProps<{
    msg: string,
}>()
</script>

<template>
    <div class="flex items-center justify-center overflow-hidden bg-primary text-primary-foreground py-2.5">
        <p class="text-[.65rem] leading-6">
            <strong class="font-normal">{{ msg }}</strong>
        </p>
    </div>
</template>
