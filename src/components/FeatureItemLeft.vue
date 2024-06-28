<template>
    <div class="flex items-center justify-between item">
        <div class="w-1/2">
            <i>
                <slot name="icon"></slot>
            </i>
        </div>
        <div class="w-1/2 details">
            <h3 class="mb-6 text-xl font-normal text-primary">
                <slot name="heading"></slot>
            </h3>
            <slot></slot>
        </div>
    </div>
</template>