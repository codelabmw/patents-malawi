<script setup lang="ts">
import GhostButton from '@/components/GhostButton.vue';
import NavBar from '@/components/NavBar.vue';
import PatentCard from '@/components/PatentCard.vue';
import UpdateIcon from '@/components/icons/UpdateIcon.vue';
import { usePatentsStore } from '@/stores/patents';
import { ref } from 'vue';

const isSelected = ref(false);
const { patents } = usePatentsStore()
</script>

<template>

  <!-- NAVIGATION -->
  <NavBar />

  <!-- MAIN -->
  <div>
    <div class="relative">
      <!-- Sub Navigation Area -->
      <div class="absolute z-30 w-full mb-20 -top-20 border-y border-muted-foreground/10">
        <div class="relative mx-auto max-w-7xl bg-background">
          <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
              <!-- Search Field -->
              <input id="patents" name="patents" type="search" autocomplete="patents" required
                class="min-w-0 flex-auto rounded-xl border-0 bg-muted-foreground/15 px-3.5 pt-1.5 pb-2 placeholder:text-[.65rem] text-muted-foreground shadow-sm sm:text-sm sm:leading-6"
                placeholder="Search patents malawi">

              <!-- Mobile menu button -->
              <div class="flex lg:hidden">
                <button @click="isSelected = !isSelected" type="button" class="text-muted-foreground focus:outline-none"
                  aria-label="toggle menu">
                  <svg v-if="!isSelected" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                  </svg>

                  <svg v-if="isSelected" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div :class="[isSelected ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
              class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-background md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
              <div class="flex flex-col items-center md:flex-row">
                <GhostButton label="All" :active="true" />
                <GhostButton label="Filters" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main -->
    <main class="block mx-auto mt-20 max-w-7xl">
      <div v-if="patents.length" class="p-8">
        <PatentCard />
      </div>

      <div v-else class="w-full h-[70vh] grid place-content-center">
        <div class="text-center">
          <div class="grid place-content-center">
            <UpdateIcon class="text-8xl text-muted-foreground" />
          </div>
          <p class="max-w-lg mt-4 text-muted-foreground">
            Creation of patents feature is still in development, come back soon to check them out and avoid infringements!
          </p>
        </div>
      </div>
    </main>
  </div>

</template>
