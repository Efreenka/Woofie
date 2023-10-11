<template>
  <div>
    <div class="mx-auto h-[480px] w-[320px] rounded-md bg-formBg p-3 shadow-md md:w-[500px]">
      <form @submit.prevent="submitForm" class="flex flex-col gap-1 pt-1">
        <div class="flex h-14 flex-row justify-between md:mx-4">
          <label for="name">Jméno psa:</label>
          <div class="flex w-44 flex-col break-words md:w-56">
            <input
              id="name"
              type="text"
              placeholder="Jméno psa"
              v-model="formData.name"
              @blur="v$.name.$touch"
              class="pl-1"
            />
            <span v-if="v$.name.$errors.length > 0" class="text-xs text-red-500"
              >{{ console.log(v$.name.$errors[0].$message) }}
              {{ v$.name.$errors[0].$message }}
            </span>
          </div>
        </div>

        <div class="flex h-14 flex-row justify-between md:mx-4">
          <label for="breed">Plemeno psa:</label>
          <div class="flex w-44 flex-col break-words md:w-56">
            <select id="breed" v-model="formData.breedId" @blur="v$.breedId.$touch">
              <option disabled value="">Psí plemena</option>
              <option v-for="breed in breeds" :key="breed.name" :value="breed.name">
                {{ breed.name }}
              </option>
            </select>
            <span
              v-for="error in v$.breedId.$errors"
              :key="error.$uid"
              class="text-xs text-red-500"
            >
              {{ error.$message }}</span
            >
          </div>
        </div>

        <div class="flex h-14 flex-row justify-between md:mx-4">
          <label for="height">Výška psa:</label>
          <div class="flex w-44 flex-col break-words md:w-56">
            <input
              id="height"
              type="number"
              placeholder="Výška psa"
              v-model="formData.height"
              @blur="v$.height.$touch"
              class="pl-1"
            />
            <span v-for="error in v$.height.$errors" :key="error.$uid" class="text-xs text-red-500">
              {{ error.$message }}</span
            >
          </div>
        </div>

        <div class="flex h-14 flex-row justify-between md:mx-4">
          <label for="weight">Váha psa:</label>
          <div class="flex w-44 flex-col break-words md:w-56">
            <input
              id="weight"
              type="number"
              placeholder="Váha psa"
              v-model="formData.weight"
              @blur="v$.weight.$touch"
              class="pl-1"
            />
            <span v-for="error in v$.weight.$errors" :key="error.$uid" class="text-xs text-red-500">
              {{ error.$message }}</span
            >
          </div>
        </div>

        <div class="flex h-14 flex-row justify-between md:mx-4">
          <label for="price">Cena psa:</label>
          <div class="flex w-44 flex-col break-words md:w-56">
            <input
              id="price"
              type="number"
              placeholder="Cena psa"
              v-model="formData.price"
              @blur="v$.price.$touch"
              class="pl-1"
            />
            <span v-for="error in v$.price.$errors" :key="error.$uid" class="text-xs text-red-500">
              {{ error.$message }}
            </span>
          </div>
        </div>

        <MyDate
          v-model:modelValue="formData.dateOfBirth"
          :errors="v$.dateOfBirth.$errors"
          :validate="v$.dateOfBirth.$touch"
        ></MyDate>

        <div class="flex h-14 flex-row justify-between md:mx-4">
          <label for="gender">Pohlaví psa:</label>
          <div class="flex w-44 flex-col break-words md:w-56">
            <select id="gender" v-model="formData.gender" @blur="v$.gender.$touch">
              <option disabled value="">Pohlaví psa</option>
              <option :value="Gender[0]">Pes</option>
              <option :value="Gender[1]">Fena</option>
            </select>

            <span v-for="error in v$.gender.$errors" :key="error.$uid" class="text-xs text-red-500">
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

const emit = defineEmits(['closeModal'])

const storeDog = useDogStore()
const { addDog } = storeDog
const storeBreed = useBreedStore()
const { breeds } = storeToRefs(storeBreed)

const formData = reactive({
  id: uuidv4(),
  name: '',
  breedId: '',
  height: null,
  weight: null,
  price: null,
  dateOfBirth: new Date(),
  gender: ''
} as Dog)

const containsUser = (value: any) => {
  return value.includes('a')
}

const requiredMessage = 'Pole není vyplněno'

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage(requiredMessage, required),
      minLength: minLength(3),
      containsUser: helpers.withMessage("Pole musí obsahovat 'a'", containsUser)
    },
    breedId: { required: helpers.withMessage(requiredMessage, required) },
    height: { required: helpers.withMessage(requiredMessage, required) },
    weight: { required: helpers.withMessage(requiredMessage, required) },
    price: { required: helpers.withMessage(requiredMessage, required) },
    dateOfBirth: { required: helpers.withMessage(requiredMessage, required) },
    gender: { required: helpers.withMessage(requiredMessage, required) }
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
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender
    })

    addDog(dog)

    formData.id = uuidv4()
    formData.name = ''
    formData.breedId = ''
    formData.height = null
    formData.weight = null
    formData.price = null
    formData.dateOfBirth = new Date()
    formData.gender = ''

    emit('closeModal')
  } else {
    alert('error')
  }
}
</script>

<style></style>
