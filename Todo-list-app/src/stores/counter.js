import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const darkmode = ref(true)
  const lightmode = ref(false) 
  function increment() {
    darkmode.value = !darkmode.value
    lightmode.value = !lightmode.value
  }

  return { darkmode, lightmode, increment}
})


