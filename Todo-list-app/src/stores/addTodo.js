import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAddTodo = defineStore('todoAdd', () => {
  const buttonClicked = reactive({
    text: 'all',
    coloured: true,
    color: 'hsl(220, 98%, 61%)'
  })
  const todoss = reactive({
    ids: 0,
    texts: '',
    isCompleted: false,
  })
  const active = ref(null)
  const addColor = ref('all')
  const todos = reactive({
    all: [],
    active: [],
    completed: [],
  })
  

  const addTodo = (e) => {
    if (todoss.texts !== '') {
        todoss.ids++
        const todo = reactive({
            id: todoss.ids,
            text: todoss.texts,
            completed: todoss.isCompleted
        })
        console.log(e.target)
        todos.all.push(todo)
        todos.active.push(todo)
        buttonClicked.text = 'all'
        todoss.texts = ''
        addColor.value = 'all'
        
        
    }
  }
  
  const three = reactive({
      all: true,
      active: false,
      completed: false
  })
  const two = reactive({
      all: false,
      active: true,
      completed: false
  })
  const one = reactive({
      all: false,
      active: false,
      completed: true
  })
  const color = computed(() => addColor.value === 'all' ? three : (addColor.value === 'active' ? two : one))
  

  function getId(e){
    console.log(e.target)
    buttonClicked.text = e.target.id
    buttonClicked.coloured = true
    addColor.value = e.target.id
    const parent = e.target.parentNode
    if (color.value.all) {
      e.target.style.color = 'hsl(220, 98%, 61%)'
      e.target.nextSibling.style.color = '#4d5066'
      parent.childNodes[2].style.color = '#4d5066'
         
    } else if (color.value.active){
      e.target.style.color = 'hsl(220, 98%, 61%)'
      e.target.nextSibling.style.color = '#4d5066'
      e.target.previousSibling.style.color = '#4d5066'
    } else {
      e.target.style.color = 'hsl(220, 98%, 61%)'
      parent.childNodes[0].style.color = '#4d5066'
      parent.childNodes[1].style.color = '#4d5066'
    }
  }
  const selected = computed(() => buttonClicked.text === 'all' ? todos.all : (buttonClicked.text === 'active' ? todos.active : todos.completed))

  return { buttonClicked, active, todoss, todos, addTodo, getId, selected}
})
