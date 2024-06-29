<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
import TheFeatures from '@/components/TheFeatures.vue';
import AnimatedHeroImage from './Partials/AnimatedHeroImage.vue';
</script>

<template>
  <main>
    <div class="relative">

      <NavBar />

      <!-- HERO SECTION -->
      <div class="my-2 relative w-full flex flex-col justify-center h-[85vh] bg-no-repeat">
        <!-- bg-right-bottom bg-[length:800px_800px] bg-no-repeat w-full h-full -->

        <div class="container px-6 py-16 mx-auto max-w-7xl">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="pl-7 lg:max-w-lg xl:max-w-xl">
                <h1 class="text-3xl font-medium text-primary lg:text-4xl xl:text-6xl">Secure, transparent
                  and to be trusted!</h1>

                <p class="mt-3 text-sm lg:text-lg font-light text-muted-foreground/80">Reserve ownership rights of your
                  intellectual
                  properties
                  knowing
                  they're safe
                  and secure with the latest blockchain technlogy.</p>

                <div class="flex items-center space-x-4 mt-4">
                  <PrimaryButton label="Browse patents" href="/browse" />
                  <SecondaryButton label="Learn how it works" href="/how-it-works" />
                </div>
              </div>
            </div>

            <AnimatedHeroImage />

          </div>

        </div>

        <div class="absolute bottom-0 -z-10 -right-0 overflow-clip">
          <img class="w-full h-full relative -right-1/2" src="@/assets/images/Decorations.svg" alt="Decorations.svg" />
        </div>
      </div>


      <!-- FEATURES SECTION -->
      <div class="mx-auto my-12 max-w-7xl">
        <TheFeatures />
      </div>

      <!-- JUMBLETRON -->
      <div class="mx-auto max-w-7xl">
        <div class="my-20 bg-primary rounded-3xl">
          <div class="flex flex-col items-center px-4 py-24 text-center">
            <h2 class="text-2xl font-normal tracking-tight text-primary-foreground xl:text-3xl">
              Secure your intellectual properties! It's worth it.
            </h2>

            <div class="inline-flex w-full mt-8 sm:w-auto">
              <SecondaryButton class="text-muted-foreground" label="Learn why it's vital" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
