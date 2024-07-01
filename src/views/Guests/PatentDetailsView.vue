<script setup lang="ts">
import EditIcon from '@/components/icons/EditIcon.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import ViewIcon from '@/components/icons/ViewIcon.vue';
import FileDownloadIcon from '@/components/icons/FileDownloadIcon.vue';
import { ref } from 'vue';
import DangerButton from '@/components/DangerButton.vue';
import { RouterLink } from 'vue-router';
import { Routes } from '@/router';
import Editor from 'primevue/editor';
import GuestLayout from '../AppLayouts/GuestLayout.vue';
import UnderDevelopment from '@/components/UnderDevelopment.vue';

const showDocument = ref(true)

const value = ref('Hie there');
</script>

<template>
    <GuestLayout>
        <div v-show="false" class="relative">
            <div class="absolute z-30 w-full border-b -top-8 border-muted-foreground/10">
            </div>

            <main class="mx-auto max-w-7xl">
                <h1 class="mt-8 mb-4 text-xs text-muted-foreground">Last updated Mar 24, 2024
                </h1>
                <div class="p-16 mt-2 mb-10 border rounded-lg">
                    <div class="flex items-center justify-between my-2">
                        <h2 class="text-xl font-semibold leading-7">The Patent Title </h2>
                        <RouterLink :to="Routes.edit_patent.path">
                            <EditIcon class="text-primary hover:cursor-pointer" />
                        </RouterLink>
                    </div>
                    <form>
                        <!-- Patent Summary -->
                        <h4 class="text-xs leading-7 text-muted-foreground/80">- Summary | </h4>

                        <p class="mt-1 mb-8 text-sm leading-6 text-muted-foreground">Here goes the summary, Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Explicabo quia dolorem quod ratione dolores
                            consequatur, maxime debitis modi.</p>
                        <!-- Patent Body -->
                        <div class="flex items-center justify-between my-2">
                            <h4 class="text-base leading-7 text-muted-foreground/80">Patent Document | </h4>
                            <div class="flex items-center space-x-8">
                                <ViewIcon @click="showDocument = !showDocument"
                                    class="hover:cursor-pointer hover:text-primary" />
                                <FileDownloadIcon class="hover:cursor-pointer hover:text-primary" />
                                <!-- <EditIcon class="text-primary hover:cursor-pointer" /> -->
                            </div>
                        </div>

                        <div v-if="showDocument">
                            <Editor v-model="value" editorStyle="min-height: 320px; border: none;">
                                <template v-slot:toolbar>
                                    <span class="clean">
                                    </span>
                                </template>
                            </Editor>
                        </div>


                        <!-- Submit button -->
                        <!-- 1. if its for the owner  -->
                        <!-- <div class="grid items-center grid-cols-2 mt-8 divide-x divide-muted-foreground/20">
                            <div>
                                <DangerButton label="Delete Patent" />
                            </div>

                            <div class="flex items-center justify-end">
                                <PrimaryButton label="Grant permission >" />
                            </div>
                        </div> -->

                        <!-- 2. if its not the owner -->
                        <div class="grid items-center grid-cols-2 mt-8 divide-x divide-muted-foreground/20">
                            <div class="flex flex-col justify-center">
                                <h2 class="font-medium">James Kamwendo</h2>
                                <p class="mt-2 text-muted-foreground">james@codelabmw.dev <br>
                                    (265 99 039 44 44)</p>
                            </div>
                            <div class="flex items-center justify-end">
                                <PrimaryButton label="Request for permission >" />
                            </div>
                        </div>

                    </form>
                </div>
            </main>
        </div>
        
        <div class="max-w-7xl mx-auto">
            <UnderDevelopment />
        </div>
    </GuestLayout>
</template>

<style scoped>
.custom-editor .ql-container {
    border: none !important;
}

.custom-editor .ql-toolbar {
    display: none !important;
}
</style>