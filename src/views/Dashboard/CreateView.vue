<script setup lang="ts">
import AuthenticatedLayout from '../AppLayouts/AuthenticatedLayout.vue';
import Editor from 'primevue/editor';
import { ref } from "vue";
import TertiaryButton from '@/components/TertiaryButton.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';


const value = ref('');

</script>

<template>
    <AuthenticatedLayout>
        <div>
            <div class="relative">
                <div class="absolute z-30 w-full border-b -top-0 border-muted-foreground/10">
                </div>
                <main class="mx-auto max-w-7xl">
                    <div class="p-16 mt-2 mb-10 border rounded-lg">
                        <h2 class="text-xl font-semibold leading-7">Register a
                            patent</h2>
                        <p class="mt-1 mb-8 text-sm leading-6 text-muted-foreground">This information will be displayed
                            publicly
                            so that anyone who has the same idea as yours is notified to make informed decisions.</p>

                        <form>
                            <div>
                                <label for="username" class="block text-sm font-medium leading-6">Inventor
                                    Name <span class="text-accent">*</span>
                                </label>
                                <div class="mt-4">
                                    <div
                                        class="flex rounded-md shadow-sm ring-1 ring-inset ring-muted-foreground/40 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                                        <span
                                            class="flex items-center pl-3 select-none text-muted-foreground/80 sm:text-sm">Full
                                            offical name/</span>
                                        <input type="text" name="username" id="username" autocomplete="username"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-muted-foreground focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Jane Smith" required>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <label for="patent_title" class="block text-sm font-medium leading-6">Patent
                                    Title <span class="text-accent">*</span></label>
                                <div class="mt-4">
                                    <div
                                        class="flex rounded-md shadow-sm ring-1 ring-inset ring-muted-foreground/40 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                                        <span
                                            class="flex items-center pl-3 select-none text-muted-foreground/80 sm:text-sm">Descriptive/</span>
                                        <input type="text" name="patent_title" id="patent_title"
                                            autocomplete="patent_title"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-muted-foreground/70 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="" required>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <label for="category" class="block text-sm font-medium leading-6 ">Category</label>
                                <div class="mt-2">
                                    <select id="category" name="category" autocomplete="category-name"
                                        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-muted-foreground/40 focus:ring-2 focus:ring-inset focus:ring-ring sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>Category name</option>
                                        <option>Category name</option>
                                        <option>Category name</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mt-4">
                                <label for="patent_about" class="block text-sm font-medium leading-6">Patent
                                    Summary <span class="text-accent">*</span></label>
                                <div class="mt-4">
                                    <textarea id="patent_about" required name="patent_about" rows="3"
                                        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-muted-foreground/70  ring-muted-foreground/40 focus-within:ring-2 focus-within:ring-inset sm:text-sm sm:leading-6"></textarea>
                                </div>
                                <p class="mt-2 text-xs leading-6 text-muted-foreground">Be as accurate as you can using
                                    keywords
                                    that will entail what your idea is all about.
                                </p>
                            </div>

                            <!-- Description Editor -->

                            <div class="card">
                                <label for="patent_about" class="block my-4 text-sm font-medium leading-6">Patent
                                    Description <span class="text-accent">*</span></label>
                                <Editor v-model="value" editorStyle="height: 320px">
                                    <template v-slot:toolbar>
                                        <span class="ql-formats">
                                            <select class="ql-header">
                                                <option selected></option>
                                                <option value="1">Heading 1</option>
                                                <option value="2">Heading 2</option>
                                                <option value="3">Heading 3</option>
                                            </select>
                                            <select class="ql-font">
                                                <option selected></option>
                                                <option value="serif">Serif</option>
                                                <option value="monospace">Monospace</option>
                                            </select>
                                            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                                            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                                            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                                            <button v-tooltip.bottom="'Ordered List'" class="ql-list"
                                                value="ordered"></button>
                                            <button v-tooltip.bottom="'Bullet List'" class="ql-list"
                                                value="bullet"></button>
                                            <button v-tooltip.bottom="'Align Left'" class="ql-align" value=""></button>
                                            <button v-tooltip.bottom="'Align Center'" class="ql-align"
                                                value="center"></button>
                                            <button v-tooltip.bottom="'Align Right'" class="ql-align"
                                                value="right"></button>
                                            <button v-tooltip.bottom="'Align Justify'" class="ql-align"
                                                value="justify"></button>
                                        </span>
                                    </template>
                                </Editor>
                            </div>

                            <!-- Notifications -->

                            <div class="pb-12 mt-8 border-b border-muted-foreground/10">
                                <h2 class="text-base font-semibold leading-7 ">Notifications</h2>
                                <p class="mt-1 text-sm leading-6 text-muted-foreground/90">We'll let you know afrer
                                    processing your
                                    request and verify its
                                    integrity. But you can also pick what other notifications you want to hear about.
                                </p>

                                <div class="mt-10 space-y-10">
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6">By Email
                                        </legend>
                                        <div class="mt-6 space-y-6">
                                            <div class="relative flex gap-x-3">
                                                <div class="flex items-center h-6">
                                                    <input id="candidates" name="candidates" type="checkbox"
                                                        class="w-4 h-4 rounded border-muted-foreground/40 text-primary focus:ring-primary">
                                                </div>
                                                <div class="text-sm leading-6">
                                                    <label for="candidates" class="font-medium ">Candidates</label>
                                                    <p class="text-muted-foreground/90">Get notified when a candidate
                                                        applies for
                                                        the same patent to explore
                                                        options together.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </fieldset>
                                </div>
                            </div>

                            <!-- Submit button -->

                            <div class="flex items-center justify-end mt-6 gap-x-6">
                                <TertiaryButton label="Cancel" />
                                <PrimaryButton label="Send Request >" />
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    </AuthenticatedLayout>
</template>