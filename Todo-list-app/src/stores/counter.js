import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const dark = {
    color: 'md:container md:mx-auto h-screen w-screen grid place-items-center bg-indigo-950',
    bg: "self-start h-96 w-full pt-0 bg-[url('/src/assets/images/bg-desktop-dark.jpg')] bg-no-repeat"
  }
  const light = {
    color: 'md:container md:mx-auto h-screen grid place-items-center bg-yellow-700',
    bg: "self-start h-96 w-full pt-0 bg-[url('/src/assets/images/bg-desktop-light.jpg')] bg-no-repeat"
    
  }
  const buttonClicked = ref('')

  const todos = reactive({
    all: [],
    active: [],
    completed: [],
  })

  const darkmode = ref(true)
  const lightmode = ref(false)
  const doubleCount = computed(() => darkmode.value ? dark : light) 
  function increment() {
    darkmode.value = !darkmode.value
    lightmode.value = !lightmode.value
    console.log(doubleCount)
  }
  function getId(e){
    buttonClicked.value = e.target.id
  }
  const selected = computed(() => buttonClicked.value === 'all' ? todos.all : (buttonClicked.value === 'active' ? todos.active : todos.completed))

  return { darkmode, lightmode, doubleCount, increment, buttonClicked, todos, getId, selected }
})
