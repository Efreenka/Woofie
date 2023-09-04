import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { Dog } from '@/interfaces/Dog'

export const useDogStore = defineStore('dogStore', () => {
  const dogs = reactive([] as Dog[])

  return { dogs }
})
