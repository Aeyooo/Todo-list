<template>
  <div class="md:container md:mx-auto h-screen grid grid-rows-2 " :class="darkmode ? 'bg-[#161722]' : 'bg-indigo-50'">
    <div class=" h-full w-full transition ease-out duration-500">
      <!-- <img :src="darkmode ? './assets/images/bg-desktop-dark.jpg' : './assets/images/bg-desktop-light.jpg'" /> -->
      <img v-if="darkmode" class="transition ease-out duration-500" src='./assets/images/bg-desktop-dark.jpg'/>
      <img v-else-if="lightmode" src='./assets/images/bg-desktop-light.jpg'/>

    </div>
    <TodoComponent class="max-h-none absolute w-2/5 h-auto grid grid-rows-[3rem,40px] border-red-600 place-self-center top-24"/>
  </div>
</template>

<script setup>
import TodoComponent from './components/TodoComponent.vue'
import { useCounterStore } from './stores/counter.js'
import { storeToRefs } from 'pinia'

const hi = useCounterStore()
const { darkmode, lightmode } = storeToRefs(hi)
const data = {
  component: { TodoComponent }
}

</script>

<style lang="scss" scoped>

</style> 