<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)

const { elementX, elementY, isOutside, elementWidth, elementHeight } = useMouseInElement(target)

const cardTransform = computed(() => {
    const MAX_ROTATION = 10;

    const rX = (
        MAX_ROTATION / 2 - (
            elementY.value / elementHeight.value
        ) * MAX_ROTATION
    ).toFixed(2)

    const rY = (
        (
            elementX.value / elementWidth.value
        ) * MAX_ROTATION - MAX_ROTATION / 2
    ).toFixed(2)

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<template>
    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2" ref="target" :style="{
        transform: cardTransform,
        transition: 'transform .25s ease out',
    }">
        <img class="w-full h-full md:max-w-[20vw]" src="@/assets/images/Light-Bulb-Illustration.svg"
            alt="Light-Bulb-Illustration.svg" />

    </div>
</template>