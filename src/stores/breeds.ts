import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { Breed } from '@/interfaces/Breed'

export const useBreedStore = defineStore('breedStore', () => {
  const breeds = reactive([
    {
      id: 'aa',
      name: 'Sheltie',
      minHeight: 20,
      maxHeight: 45,
      minWeight: 5,
      maxWeight: 20,
      minPrice: 20000,
      maxPrice: 40000,
      lifeSpan: 15,
      purpose: 'Pastevecký pes'
    },
    {
      id: 'ab',
      name: 'Border kolie',
      minHeight: 40,
      maxHeight: 60,
      minWeight: 12,
      maxWeight: 30,
      minPrice: 20000,
      maxPrice: 50000,
      lifeSpan: 15,
      purpose: 'Pastevecký pes'
    }
  ] as Breed[])

  function addBreed(breed: Breed) {
    breeds.push(breed)
  }

  return { breeds, addBreed }
})
