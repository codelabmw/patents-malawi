<template>
    <div class="flex items-center justify-between item">
        <div class="w-1/2">
            <i>
                <slot name="icon"></slot>
            </i>
        </div>
        <div class="w-1/2 details">
            <h3 class="flex items-baseline mb-6 text-xl font-normal text-primary">
                <slot name="heading"></slot>
                <div class="w-14 h-1 ml-1.5 rounded bg-primary"></div>
            </h3>
            <slot></slot>
        </div>
    </div>
</template>