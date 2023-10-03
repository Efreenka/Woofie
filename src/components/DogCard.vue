import { Dog } from '../interfaces/Dog';
<template>
    <div class=" w-80 h-[400px] flex flex-col">
        <div class=" bg-[url('https://www.womanonly.cz/wp-content/uploads/2020/05/border-kolie-pes.jpg')] bg-cover h-1/2 " >
            <span v-if="dog.gender === 'Female'" class=" flex justify-end pr-2 pt-1 text-2xl text-pink-500"><font-awesome-icon :icon="['fas', 'venus']" /></span>
            <span v-else class=" flex justify-end pr-2 pt-1 text-2xl text-blue-500"><font-awesome-icon :icon="['fas', 'mars']" /></span>
        </div>
        <div  class=" bg-white h-1/2 grid grid-cols-6 gap-4 p-2">
            <span class="col-start-1 col-end-7 justify-self-center">{{ dog.name }}</span>
            <span class="col-start-1 col-end-7"> {{ dog.breedId }}</span>
            <span class="col-start-1 col-end-3">{{ dog.height }}</span>
            <span class="col-start-5 col-end-7 justify-self-end">{{ dog.weight }}</span>
            <span class="col-start-1 col-end-3">{{ dog.price }}</span>
            <span class="col-start-5 col-end-7 justify-self-end">{{ dayjs(dog.dateOfBirth).format('DD. MM. YYYY') }}</span>
        </div>
        
        
        
        
        
        
        
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import type { Dog } from '@/interfaces/Dog'
interface Props {
  dog: Dog
}

const props = defineProps<Props>()

const dogImg = 'https://www.womanonly.cz/wp-content/uploads/2020/05/border-kolie-pes.jpg'
</script>

<style>
    
</style>
