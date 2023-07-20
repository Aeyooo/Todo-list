<template>
    <div class="rounded-t-[10px]">
        <div class="dss grid">
            <div v-for="elements in selected" class="grid h-10 max-h-none min-h-0">
                <ul>
                    <div class="each grid grid-cols-[50px,1fr] border-b-[1px] border-[#393a4c] h-full" :class="darkmode ? 'bg-[#25273c]' : 'bg-[#fafafa]'">
                        <input @click="hh(elements)"
                         type="checkbox"
                         class=" justify-self-start pl-2.5 ml-4 appearance-none checked:bg-gradient-to-r from-[#57ddff] to-[#c058f3] ] h-[18px] w-[18px] rounded-[50%] border-[#393a4c] border-[1px] self-center checked:bg-[url('../assets/images/icon-check.svg)]"
                         :checked="elements.completed">
                        <label :for="elements.text" class="self-center" :class="darkmode ? 'text-[#fafafa]' : 'text-[#393a4c]'">
                            {{ elements.text }} 
                        </label>
                    </div>
        
                </ul>
            </div>
            
        </div>
        <footer  class=" w-full rounded-b-[5px] items-center grid grid-rows-[32px] grid-cols-3 h-8 text-[#4d5066] text-[14px] md:text-[13px]" :class="darkmode ? 'bg-[#25273c]' : 'bg-[#fafafa]'">
            <div class="justify-self-start pl-[15px]" v-if="buttonClicked.text === 'all' ||buttonClicked.text === 'active'">{{ todos.active.length }} Todos left</div>
            <div class="justify-self-start pl-[15px]" v-else-if="buttonClicked.text === 'completed'">{{ todos.completed.length }} Completed Todos</div>
            <div class="three-foot grid grid-cols-3">
             <div @click="getId" class="all cursor-pointer text-[#3a7bfd]" ref="all" id="all">All</div>
             <div @click="getId" class="active cursor-pointer" ref="active" id="active">Active</div>
             <div @click="getId" class="completed cursor-pointer" ref="completed" id="completed">Completed</div>
            </div>
            <div class="clear-completed justify-self-end px-2 cursor-pointer" v-if="buttonClicked.text === 'all' ||buttonClicked.text === 'completed'" @click="clearCompleted">Clear Completed</div>
        </footer>
    </div>

</template>

<script setup>
import { useAddTodo } from '../stores/addTodo'
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
const storeThree = useCounterStore()
const storeTwo = useAddTodo()
const { selected, active, todos, buttonClicked} = storeToRefs(storeTwo)
const { darkmode } = storeToRefs(storeThree)
const { getId } = storeTwo
console.log(selected.completed)

function hh (object){
    console.log(object.completed)
    object.completed = !object.completed
    console.log(object.completed)
    if (buttonClicked.value.text === 'all') {
        const pp = todos.value.all.filter(td => td.completed !== true)
        const ss = todos.value.all.filter(tds => tds.completed === true)
        todos.value.active = pp
        todos.value.completed = ss
        console.log(todos.value)
        
    } else if(buttonClicked.value.text === 'active') {

        console.log('ffi')
        todos.value.completed.push(object)
        let ida = selected.value.indexOf(object)
        selected.value.splice(ida,1)
        console.log(selected.value)

        
    } else {
        todos.value.active.push(object)
        const fv = todos.value.completed.filter(td => td.completed === true)
        todos.value.completed = fv
        //let idas = selected.value.indexOf(object)
        //selected.value.splice(idas,1)
    }
    
}

function clearCompleted(){
    todos.value.completed = []
    const we = todos.value.all.filter(td => td.completed !== true)
    todos.value.all = we

}
            
            
</script>


