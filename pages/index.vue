<!-- pages/index.vue -->
<template>
  <div>
    <LandingPage />
  </div>
</template>

<script setup lang="ts">
import LandingPage from '@/components/LandingPage.vue'
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Welcome to JataShop',
  // You can override any other meta tags or links here specifically for this page
})
</script>