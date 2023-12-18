<template>
  <div class="bg-white">
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img class="object-cover object-center rounded" alt="hero" src="@/public/online-shopping.png">
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Amazing Deals
            <br class="hidden lg:inline-block">on Every Purchase
          </h1>
          <p class="mb-8 leading-relaxed">
            Discover the latest trends in our new collection. Shop from the comfort of your home and get the best discounts of the season.
          </p>
          <div class="flex justify-center">
            <router-link to="/products">
              <button class="inline-flex text-white bg-main border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">Shop Now</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
</script>