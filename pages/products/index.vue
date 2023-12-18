<!-- pages/index.vue -->
<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <div
          v-for="product in products"
          :key="product.id"
          @click="goToProduct(product.id)"
          class="cursor-pointer border p-3 rounded hover:shadow-md transition-shadow"
      >
        <img :src="product.image" :alt="product.title" class="w-full h-64 object-cover rounded-t" />
        <h2 class="text-lg font-bold mt-2">{{ product.title }}</h2>
        <p class="text-gray-600">Price: ${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const products = ref([]);
const router = useRouter();

onMounted(async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  products.value = await response.json();
});

function goToProduct(id: number) {
  router.push(`/products/${id}`);
}
</script>