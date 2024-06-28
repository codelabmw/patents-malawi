<script setup lang="ts">
import { RouterView } from 'vue-router'
import InfoBanner from './components/InfoBanner.vue'
</script>

<template>
  <header>
    <InfoBanner
      msg="The application is still in alpha and as such should not be considered as the end product and be known that it will move to a permanent domain!" />
  </header>

  <RouterView />
</template>
