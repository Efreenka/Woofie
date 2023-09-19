import { Gender } from '@/interfaces/Gender'

export interface Dog {
  id: string
  name: string
  breedId: string
  gender: Gender | string
  height: number | null
  weight: number | null
  price: number | null
  dateOfBirth: Date
}
