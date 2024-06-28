<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import InfoBanner from './components/InfoBanner.vue'
</script>

<template>
  <header>
    <InfoBanner
      msg="The application is still in alpha and as such should not be considered as the end product and be known that it will move to a permanent domain!" />

    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
