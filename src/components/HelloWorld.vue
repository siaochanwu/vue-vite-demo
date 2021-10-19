<script setup>
import { ref } from 'vue'
import Nav from './Nav.vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>

<div class="bg-purple-100 text-center">

  <Nav />
  <div class="flex p-5">
    <div class="w-1/2 mt-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
      </div>
    </div>
  </div>
  <div class="w-1/2 mt-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
      </div>
    </div>
  </div>
  </div>
  
  <form class="text-center">
    <input class="p-2 mx-3 shadow-md rounded my-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="your email">
    <button class="btn p-2 font-mono bg-purple-400 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
      Sign up
    </button>
  </form>
</div>
  
</template>

<style scoped>
.btn {
  @apply font-semibold rounded-lg shadow-md text-white;
}
</style>
