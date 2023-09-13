import { Gender } from '@/interfaces/Gender'

export interface Dog {
  id: string
  name: string
  breedId: string
  gender: Gender | string
  height: number
  weight: number
  price: number
  dayOfBirth: Date
}
