<script setup> //每次组件实例被创建的时候执行
  import { ref } from 'vue'

  import Datepicker from 'vue3-datepicker'
  import { zhTW } from 'date-fns/locale' //選擇語系

  import Nav from './Nav.vue'

  const name = ref('')
  let picked = ref(new Date())

  console.log(new Date().getFullYear() - 1911) //110
  picked.value.setFullYear(picked.value.getFullYear() - 1911) //調整為民國年

  let start = new Date(new Date().setDate(picked.value.getDate() - 7))
  start = ref(start.setFullYear(start.getFullYear() - 1911))
  let end = new Date(new Date().setDate(picked.value.getDate() + 7))
  end = ref(end.setFullYear(end.getFullYear() - 1911))

  function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden')
  }

  function alert() {
    window.alert("Hi " + name.value)
  }
</script>

<template>
<div class="text-center bg-yellow-100">

  <Nav />
  
  <!-- 加入modal -->
  <div class="flex items-center justify-center h-full">
    <button class="m-5 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" @click="toggleModal()">Show Modal</button>
  </div>

  <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modal">
    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-900 opacity-75" />
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <label>Name</label>
          <input type="text" class="w-full bg-gray-100 p-2 mt-2 mb-3" />
          <label>Url</label>
          <input type="text" class="w-full bg-gray-100 p-2 mt-2 mb-3" />
        </div>
        <div class="bg-gray-200 px-4 py-3 text-right">
          <button type="button" class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" @click="toggleModal()"><i class="fas fa-times"></i> Cancel</button>
          <button type="button" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i class="fas fa-plus"></i> Create</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Vue3 datepicker 尚無法更改title格式 -->
  <form action="" class="border-dashed border-4 border-blue-500 w-2/12 mx-auto bg-blue-100 text-left p-5">
    <label for="">Date:</label>
    <datepicker class="my-5 p-2" v-model="picked" inputFormat="yyy-MM-dd" :upper-limit="end" :lower-limit="start" :locale="zhTW" />
    <label for="" class="block">Name:</label>
    <input class="p-2" type="text" placeholder="type your name" v-model="name">
    <button class="mt-5 p-2 bg-red-300 rounded hover:bg-green-500 hover:text-white block" @click="alert">alert btn</button>
  </form>
  
</div>
   
</template>