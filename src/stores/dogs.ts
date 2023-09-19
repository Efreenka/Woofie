import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { Dog } from '@/interfaces/Dog'

export const useDogStore = defineStore('dogStore', () => {
  const dogs = reactive([] as Dog[])

  function addDog(dog: any) {
    dogs.push(dog)
  }

  return { dogs, addDog }
})
