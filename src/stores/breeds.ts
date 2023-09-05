import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { Breed } from '@/interfaces/Breed'

export const useBreedStore = defineStore('breedStore', () => {
  const breeds = reactive([{
    name: "sheltie",
    minHeight: 20,
    maxHeight: 50,
    minWeight: 5,
    maxWeight: 20,
    minPrice: 10000,
    maxPrice: 40000,
    lifeSpan: 15,
    purpose: "Pastevecký pes"
  }] as Breed[])

  return { breeds }
})
