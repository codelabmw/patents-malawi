<script setup lang="ts">
import AuthenticatedLayout from '../AppLayouts/AuthenticatedLayout.vue';
import Editor from 'primevue/editor';
import { onMounted, ref } from "vue";
import PrimaryButton from '@/components/PrimaryButton.vue';
import { BrowserProvider, Contract, type Eip1193Provider, type JsonRpcSigner } from 'ethers';
import { Contracts, WalletConnectService } from '@/services/WalletConnectService';
import LoadingIcon from '@/components/icons/LoadingIcon.vue';

const title = ref('')
const category = ref('')
const summary = ref('')
const body = ref('');

const loading = ref<boolean>(false)
const message = ref<string|null>(null)

let provider: Eip1193Provider | undefined
let signer: JsonRpcSigner
let patents_contract: Contract

onMounted(async () => {
  // initalize variables
  provider = WalletConnectService.instance.modal.getWalletProvider()
  signer = await (new BrowserProvider(provider!)).getSigner()
  patents_contract = new Contract(Contracts.Patents.address, Contracts.Patents.abi, signer)
})

const save = async () => {
    loading.value = true

    const creationFee: bigint = await patents_contract.creationFee()

    await patents_contract.add(
        title.value,
        summary.value,
        body.value,
        category.value,
        [], // tags
        '', // user's name
        {
            value: creationFee
        }
    )

    title.value = ''
    summary.value = ''
    body.value = ''
    category.value = ''

    message.value = 'Created patent.'

    setTimeout(() => {
        message.value = null
        loading.value = false
    }, 2700);
}
</script>

<template>
    <AuthenticatedLayout>
        <div class="relative">
            <div class="w-full border-b border-muted-foreground/10">
            </div>
            <main class="mx-auto max-w-7xl mt-8">
                <div class="p-16 mb-10 border rounded-lg">
                    <h2 class="text-xl font-semibold leading-7">Create Patent</h2>
                    <p class="mt-1 mb-8 text-sm leading-6 text-muted-foreground">
                        This information will be displayed publicly so that anyone who has the same idea as yours is
                        notified to make informed decisions.
                    </p>

                    <form @submit.prevent="save">
                        <div class="flex justify-between items-start mt-4">
                            <div class="flex-1">
                                <label for="patent_title" class="block text-sm font-medium leading-6">
                                    Patent Title
                                    <span class="text-accent">*</span>
                                </label>
                                <div class="mt-4">
                                    <div
                                        class="flex rounded-md shadow-sm ring-1 ring-inset ring-muted-foreground/40 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary/40 sm:max-w-md">
                                        <span
                                            class="flex items-center pl-3 select-none text-muted-foreground/80 sm:text-sm">Descriptive/</span>
                                        <input type="text" name="patent_title" id="patent_title" v-model="title"
                                            autocomplete="patent_title"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 outline-none placeholder:text-muted-foreground/70 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="" required>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <label for="category" class="block text-sm font-medium leading-6 ">
                                    Category
                                    <span class="text-accent">*</span>
                                </label>
                                <div class="mt-4">
                                    <select id="category" name="category" v-model="category" required autocomplete="category-name"
                                        class="block w-full bg-background rounded-md py-2 px-2 ring-1 ring-inset ring-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary/40 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option value="Software">Software</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Medicine">Medicin</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <label for="patent_about" class="block text-sm font-medium leading-6">Patent
                                Summary <span class="text-accent">*</span></label>
                            <div class="mt-4">
                                <textarea id="patent_about" v-model="summary" required name="patent_about" rows="3"
                                    class="block w-full rounded-md border-0 p-4 outline-none ring-1 ring-inset placeholder:text-muted-foreground/70 ring-muted-foreground/40 focus-within:ring-2 focus-within:ring-primary/40 sm:text-sm sm:leading-6"></textarea>
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
                            <Editor v-model="body" editorStyle="height: 500px;">
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

                        <!-- <div class="pb-12 mt-8 border-b border-muted-foreground/10">
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
                        </div> -->

                        <!-- Submit button -->

                        <div class="flex items-center justify-end mt-6 gap-x-6">
                            <!-- <TertiaryButton label="Cancel" /> -->
                            <PrimaryButton v-if="!loading" label="Send Request >" />
                            <LoadingIcon v-else-if="loading && !message" class="text-2xl text-primary" />
                            <span v-else class="text-sm text-muted-foreground">{{ message }}</span>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>