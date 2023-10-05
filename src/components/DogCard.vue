import { Dog } from '../interfaces/Dog';
<template>
  <div class="flex h-[400px] w-80 flex-col overflow-hidden">
    <div
      class="h-1/2 bg-[url('https://www.womanonly.cz/wp-content/uploads/2020/05/border-kolie-pes.jpg')] bg-cover transition-all duration-500 hover:scale-105"
    >
      <span v-if="dog.gender === 'Female'" class="flex justify-end pr-2 pt-1 text-2xl text-pink-500"
        ><font-awesome-icon :icon="['fas', 'venus']"
      /></span>
      <span v-else class="flex justify-end pr-2 pt-1 text-2xl text-blue-500"
        ><font-awesome-icon :icon="['fas', 'mars']"
      /></span>
    </div>
    <div class="grid h-1/2 grid-cols-6 gap-4 bg-white p-2">
      <span class="col-start-1 col-end-7 justify-self-center text-xl font-medium">{{
        dog.name
      }}</span>
      <span class="col-start-1 col-end-7 justify-self-center pb-7 italic"> {{ dog.breedId }}</span>
      <span class="col-start-1 col-end-3">{{ dog.height }} cm</span>
      <span class="col-start-5 col-end-7 justify-self-end">{{ dog.weight }} kg</span>
      <span class="col-start-1 col-end-3">{{ dog.price }} Kč</span>
      <span class="col-start-4 col-end-7 justify-self-end">{{
        dayjs(dog.dateOfBirth).format('D. M. YYYY')
      }}</span>
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
</script>

<style></style>
