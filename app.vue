<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import { useHead } from 'nuxt/app'

useHead({
  title: 'JataShop',
  meta: [
    { name: 'description', content: 'Welcome to JataShop, the best e-commerce platform!' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
})
</script>