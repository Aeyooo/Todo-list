<template>
    <div>
        <div class="dss grid">
            <div v-for="elements in selected" class="grid h-10 max-h-none min-h-0">
                <ul>
                    <div class="each grid grid-cols-[50px,1fr] border-b-[1px] border-[#393a4c] h-full" :class="darkmode ? 'bg-[#25273c]' : 'bg-[#fafafa]'">
                        <input type="checkbox" class=" justify-self-start pl-2.5 ml-4" name="" id="">
                        <div class="self-center" :class="darkmode ? 'text-[#fafafa]' : 'text-[#393a4c]'">
                            {{ elements.text }}
                        </div>
                    </div>
        
                </ul>
            </div>
    
        </div>
        <footer  class=" w-full rounded-b-[5px] items-center grid grid-rows-[32px] grid-cols-3 h-8 text-[#4d5066] text-[14px] md:text-[13px]" :class="darkmode ? 'bg-[#25273c]' : 'bg-[#fafafa]'">
            <div class="justify-self-start pl-[15px]">{{ selected.length }} items left</div>
            <div class="three-foot grid grid-cols-3">
             <div @click="getId" class="all cursor-pointer text-[#3a7bfd]" ref="all" id="all">All</div>
             <div @click="getId" class="active cursor-pointer" ref="active" id="active">Active</div>
             <div @click="getId" class="completed cursor-pointer" ref="completed" id="completed">Completed</div>
            </div>
            <div class="clear-completed justify-self-end px-2">Clear Completed</div>
        </footer>

    </div>

</template>

<script setup>
import { useAddTodo } from '../stores/addTodo'
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
const storeThree = useCounterStore()
const storeTwo = useAddTodo()
const { selected, active } = storeToRefs(storeTwo)
const { darkmode } = storeToRefs(storeThree)
const { getId } = storeTwo
console.log(selected)
//const active = ref(null)




</script>

<style scoped>

</style>