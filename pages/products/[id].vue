<template>
  <div v-if="product"  class="container mx-auto p-4">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="flex justify-center">
        <img :src="product.image" :alt="product.title" class="w-full md:w-1/2" />
      </div>
      <div class="p-4">
        <h1 class="text-3xl font-bold">{{ product.title }}</h1>
        <p class="mt-2">{{ product.description }}</p>
        <div class="mt-4">
          <span class="text-xl font-bold">Price: ${{ product.price }}</span>
        </div>
        <div class="mt-4">
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container mx-auto p-4 text-center">Loading product...</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const product = ref(null);
const route = useRoute();

onMounted(async () => {
  const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`);
  product.value = await response.json();
});
</script>