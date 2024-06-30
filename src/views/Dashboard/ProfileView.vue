<script setup lang="ts">
import AuthenticatedLayout from '../AppLayouts/AuthenticatedLayout.vue';
import TertiaryButton from '@/components/TertiaryButton.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
</script>

<template>
    <AuthenticatedLayout>
        <div>
            <div class="relative">
                <div class="absolute z-30 w-full border-b -top-0 border-muted-foreground/10">
                </div>
                <main class="mx-auto max-w-7xl">
                    <div class="p-16 mt-2 mb-10 border rounded-lg">
                        <h2 class="text-xl font-semibold leading-7">Your Profile</h2>
                        <p class="mt-1 mb-8 text-sm leading-6 text-muted-foreground">This information formally
                            identifies you, please make sure you give the correct offical details about you.</p>

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
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-muted-foreground focus:ring-0 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <label for="patent_title" class="block text-sm font-medium leading-6">Email</label>
                                <div class="mt-4">
                                    <div
                                        class="flex rounded-md shadow-sm ring-1 ring-inset ring-muted-foreground/40 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">

                                        <input type="text" name="patent_title" id="patent_title"
                                            autocomplete="patent_title"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-3 placeholder:text-muted-foreground/70 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="example@email.com" />
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4">
                                <label for="phone" class="block text-sm font-medium leading-6">Your Phone Number</label>
                                <div class="mt-4">
                                    <div
                                        class="flex rounded-md shadow-sm ring-1 ring-inset ring-muted-foreground/40 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                                        <span
                                            class="flex items-center pl-3 select-none text-muted-foreground/80 sm:text-sm">265/</span>
                                        <input type="text" name="phone" id="phone" autocomplete="phone"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-muted-foreground/70 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="" />
                                    </div>
                                </div>

                                <p class="mt-2 text-xs leading-6 text-muted-foreground">Make sure the number is correct
                                    and reachable.
                                </p>
                            </div>

                            <!-- Submit button -->

                            <div class="flex items-center justify-end mt-6 gap-x-6">
                                <TertiaryButton label="Cancel" />
                                <PrimaryButton label="Update Profile >" />
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    </AuthenticatedLayout>
</template>