<template>
  <div>
    <div
      class="mx-auto h-[540px] w-[320px] rounded-md bg-formBg p-3 shadow-md md:h-[540px] md:w-[500px]"
    >
      <form @submit.prevent="submitForm" class="flex flex-col gap-1 pt-1">
        <div class="flex h-16 flex-row justify-between md:mx-4">
          <label for="name">Jméno psa:</label>
          <div class="flex flex-col">
            <input id="name" type="text" v-model="formData.name" class="w-44 md:w-56" />

            <span v-for="error in v$.name.$errors" :key="error.$uid" class="text-sm text-red-500">
              {{ error.$message }}</span
            >
          </div>
        </div>

        <div class="flex h-16 flex-row justify-between md:mx-4">
          <label for="breed">Plemeno psa:</label>
          <div class="flex flex-col">
            <select id="breed" class="w-44 md:w-56" v-model="formData.breedId">
              <option disabled value="">Psí plemena</option>
              <option v-for="breed in breeds" :key="breed.name" :value="breed.name">
                {{ breed.name }}
              </option>
            </select>
            <span
              v-for="error in v$.breedId.$errors"
              :key="error.$uid"
              class="text-sm text-red-500"
            >
              {{ error.$message }}</span
            >
          </div>
        </div>

        <div class="flex h-16 flex-row justify-between md:mx-4">
          <label for="height">Výška psa:</label>
          <div class="flex flex-col">
            <input id="height" type="number" v-model="formData.height" class="w-44 md:w-56" />
            <span v-for="error in v$.height.$errors" :key="error.$uid" class="text-sm text-red-500">
              {{ error.$message }}</span
            >
          </div>
        </div>

        <div class="flex h-16 flex-row justify-between md:mx-4">
          <label for="weight">Váha psa:</label>
          <div class="flex flex-col">
            <input id="weight" type="number" v-model="formData.weight" class="w-44 md:w-56" />
            <span v-for="error in v$.weight.$errors" :key="error.$uid" class="text-sm text-red-500">
              {{ error.$message }}</span
            >
          </div>
        </div>

        <div class="flex h-16 flex-row justify-between md:mx-4">
          <label for="price">Cena psa:</label>
          <div class="flex flex-col">
            <input id="price" type="number" v-model="formData.price" class="w-44 md:w-56" />
            <span v-for="error in v$.price.$errors" :key="error.$uid" class="text-sm text-red-500">
              {{ error.$message }}</span
            >
          </div>
        </div>

        <MyDate v-model:modelValue="formData.dayOfBirth" :errors="v$.dayOfBirth.$errors"></MyDate>

        <div class="flex h-16 flex-row justify-between md:mx-4">
          <label for="gender">Pohlaví psa:</label>
          <div class="flex flex-col">
            <select id="gender" class="w-44 md:w-56" v-model="formData.gender">
              <option disabled value="">Pohlaví psa</option>
              <option :value="Gender[0]">Pes</option>
              <option :value="Gender[1]">Fena</option>
            </select>

            <span v-for="error in v$.gender.$errors" :key="error.$uid" class="text-sm text-red-500">
              {{ error.$message }}</span
            >
          </div>
        </div>
        <input
          class="mr-4 w-24 self-end rounded-md border bg-button text-white"
          type="submit"
          value="Odeslat"
        />
      </form>
    </div>

    <h1>Kartička</h1>
    <div v-for="dog in dogs" :key="dog.id">
      <span>{{ dog.name }}</span>
      <span>{{ dog.breedId }}</span>
      <span>{{ dog.price }}</span>
      <span>{{ dog.gender }}</span>
      <span>{{ dayjs(dog.dayOfBirth).format('DD. MM. YYYY') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import type { Dog } from '@/interfaces/Dog'
import { v4 as uuidv4 } from 'uuid'
import { useDogStore } from '@/stores/dogs'
import { useBreedStore } from '@/stores/breeds'
import { storeToRefs } from 'pinia'
import useVuelidate from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'
import { Gender } from '../interfaces/Gender'
import MyDate from './MyDate.vue'
import dayjs from 'dayjs'

const emit = defineEmits(['close'])

const storeDog = useDogStore()
const { dogs } = storeToRefs(storeDog)
const { addDog } = storeDog
const storeBreed = useBreedStore()
const { breeds } = storeToRefs(storeBreed)

const formData = reactive({
  id: uuidv4(),
  name: '',
  breedId: '',
  height: 0,
  weight: 0,
  price: 0,
  dayOfBirth: new Date(),
  gender: ''
} as Dog)

// <div>
//     <p>Errors</p>
//     <span v-for="error in v$.$errors" :key="error.$uid"> {{ error.$property }} - {{ error.$message }}, </span>
// </div>

// const containsUser = (value:any) => {
//     return value.includes('a')
// }
// name: { required: helpers.withMessage("Pole není vyplněno", required), minLength: minLength(3), containsUser: helpers.withMessage("ahoj", containsUser), },

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Pole není vyplněno', required),
      minLength: minLength(3)
    },
    breedId: { required: helpers.withMessage('Pole není vyplněno', required) },
    height: { required: helpers.withMessage('Pole není vyplněno', required) },
    weight: { required: helpers.withMessage('Pole není vyplněno', required) },
    price: { required: helpers.withMessage('Pole není vyplněno', required) },
    dayOfBirth: { required: helpers.withMessage('Pole není vyplněno', required) },
    gender: { required: helpers.withMessage('Pole není vyplněno', required) }
  }
})

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
  const result = await v$.value.$validate()
  if (result) {
    const dog = reactive({
      id: formData.id,
      name: formData.name,
      breedId: formData.breedId,
      height: formData.height,
      weight: formData.weight,
      price: formData.price,
      dayOfBirth: formData.dayOfBirth,
      gender: formData.gender
    })
    console.log(dog.gender)
    addDog(dog)

    formData.id = uuidv4()
    formData.name = ''
    formData.breedId = ''
    formData.height = 0
    formData.weight = 0
    formData.price = 0
    formData.dayOfBirth = new Date()
    formData.gender = ''

    emit('close')
  } else {
    alert('error')
  }
}
</script>

<style></style>
