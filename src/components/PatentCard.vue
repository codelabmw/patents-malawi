<script setup lang="ts">
import type { Patent } from '@/types';
import moment from 'moment'

defineProps<{ patent: Patent }>()
</script>

<template>
    <div class="w-full max-w-sm px-4 py-3 border rounded-xl bg-background cursor-pointer">
        <div class="flex items-center justify-end">
            <span class="px-3 py-1 text-xs uppercase rounded-full text-primary bg-primary/20">{{ patent.category }}</span>
        </div>

        <div>
            <h1 class="mt-4 text-lg font-semibold text-secondary-foreground">{{ patent.title }}</h1>
            <p class="mt-2 text-sm text-muted-foreground">{{ patent.summary }}</p>
        </div>

        <div>
            <div class="flex items-center justify-end mt-4 text-xs text-muted-foreground/60">
                <!-- <span>Pending</span> -->

                <!-- blocks uses unix time, (* 1000) = milliseconds -->
                <span>Created {{ moment(new Date().setTime(Number(patent.created_at) * 1000)).format('LL') }}</span>
            </div>
        </div>
    </div>
</template>