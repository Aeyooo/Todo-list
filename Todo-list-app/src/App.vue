<template>
  <div class="md:container md:mx-auto h-screen grid grid-rows-2 " :class="darkmode ? 'bg-indigo-950' : 'bg-indigo-50'">
    <div class=" h-full w-full">
      <!-- <img :src="darkmode ? './assets/images/bg-desktop-dark.jpg' : './assets/images/bg-desktop-light.jpg'" /> -->
      <img v-if="darkmode" src='./assets/images/bg-desktop-dark.jpg'/>
      <img v-else-if="lightmode" src='./assets/images/bg-desktop-light.jpg'/>

    </div>
    <TodoComponent class="md:absolute w-2/5 h-1/2 grid grid-rows-[4rem,.16fr] border-red-600 place-self-center top-24"/>
  </div>
</template>

<script setup>
import TodoComponent from './components/TodoComponent.vue'
import { useCounterStore } from './stores/counter.js'
import {ref} from 'vue'
import { storeToRefs } from 'pinia'

const hi = useCounterStore()
const { darkmode, doubleCount, lightmode } = storeToRefs(hi)
const data = {
  component: { TodoComponent }
}

</script>

<style lang="scss" scoped>

</style> 