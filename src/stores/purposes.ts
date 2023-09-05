import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { Purpose } from '@/interfaces/Purpose'

export const usePurposeStore = defineStore('purposeStore', () => {
  const purposes = reactive([] as Purpose[])

  return { purposes }
})
