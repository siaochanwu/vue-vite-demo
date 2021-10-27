<script setup> //when setup in script tag, no need to return variables or function 
import { ref } from 'vue'
import Nav from './Nav.vue'

  const ordername = ref('')
  const order = ref('')
  const memo = ref('')

  function submit() {
    console.log(ordername.value, order.value, memo.value)
    let query = {
      "entry.1161454384": ordername.value,
      "entry.1837970017": order.value,
      "entry.272986113": memo.value
    }
    post(query)
  }

  function post (query) {
    const data = new URLSearchParams(query).toString()
    fetch(`https://docs.google.com/forms/u/0/d/e/1FAIpQLSc9FD_lrhsjHEx1A6uhUU1X4QwKGYFViwmLB4Acj2U8_qHfLQ/formResponse?&${data}&submit=SUBMIT`, {
      method: 'POST',
      mode: 'no-cors',
      body: data, //必填 型態queryString
      redirect: 'follow',
      referrer: 'no-referrer',
    })
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }

</script>

<template>

<div class="bg-purple-100 text-center">

  <Nav />

  <form class="text-center border-4 border-dashed border-yellow-300 w-6/12 m-auto bg-blue-200">
    <h1 class="text-3xl mt-5 text-yellow-500 font-bold">送到Google Sheet 去!!</h1>
    <div class="flex items-center">
      <h3 class="text-3xl w-6/12">name:</h3>
      <input class="p-2 mx-3 shadow-md rounded my-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="entry.1161454384" v-model="ordername">
    </div>
    <div class="flex items-center">
      <h3 class="text-3xl w-6/12">餐點:</h3>
      <select class="p-2 mx-3 shadow-md rounded my-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="entry.1837970017" id="" v-model="order">
        <option value="大麥克套餐">大麥克套餐</option>
        <option value="麥克雞套餐">麥克雞套餐</option>
        <option value="勁辣雞腿堡套餐">勁辣雞腿堡套餐</option>
        <option value="雙層吉事堡套餐">雙層吉事堡套餐</option>
        <option value="其他">其他</option>
      </select>
    </div>
    <div class="flex items-center">
      <h3 class="text-3xl w-6/12">備註:</h3>
      <input class="p-2 mx-3 shadow-md rounded my-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" v-model="memo" name="entry.272986113">
    </div>
    
    <input type="submit" value="send" class="p-2 my-5 font-mono text-3xl rounded bg-purple-400 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" @click="submit">
  </form>
<!-- 
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
  </form> -->
</div>
  
</template>

<style scoped>
</style>
