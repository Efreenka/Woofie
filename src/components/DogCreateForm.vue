<template>
  <div class="mx-auto h-[480px] w-[320px] rounded-md bg-formBg p-3 shadow-md md:w-[500px]">
    <form @submit.prevent="submitDogForm" class="flex flex-col gap-1 pt-1">
      <div class="flex h-14 flex-row justify-between md:mx-4">
        <label for="name" class="text-sm md:text-base">Jméno psa:</label>
        <div class="flex w-44 flex-col break-words md:w-56">
          <input
            id="name"
            type="text"
            placeholder="Jméno psa"
            v-model="formData.name"
            @blur="v$.name.$touch"
            class="pl-1 text-sm md:text-base"
          />
          <span v-if="v$.name.$errors.length > 0" class="text-xs text-red-500"
            >{{ v$.name.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="flex h-14 flex-row justify-between md:mx-4">
        <label for="breed" class="text-sm md:text-base">Plemeno psa:</label>
        <div class="flex w-44 flex-col break-words md:w-56">
          <select
            id="breed"
            class="text-sm md:text-base"
            v-model="formData.breedId"
            @blur="v$.breedId.$touch"
          >
            <option disabled value="">Psí plemena</option>
            <option v-for="breed in breeds" :key="breed.name" :value="breed.name">
              {{ breed.name }}
            </option>
          </select>
          <span v-for="error in v$.breedId.$errors" :key="error.$uid" class="text-xs text-red-500">
            {{ error.$message }}</span
          >
        </div>
      </div>

      <div class="flex h-14 flex-row justify-between md:mx-4">
        <label for="height" class="text-sm md:text-base">Výška psa:</label>
        <div class="flex w-44 flex-col break-words md:w-56">
          <input
            id="height"
            type="number"
            placeholder="Výška psa"
            v-model="formData.height"
            @blur="v$.height.$touch"
            class="pl-1 text-sm md:text-base"
            :disabled="!formData.breedId"
          />
          <span v-for="error in v$.height.$errors" :key="error.$uid" class="text-xs text-red-500">
            {{ error.$message }}</span
          >
        </div>
      </div>

      <div class="flex h-14 flex-row justify-between md:mx-4">
        <label for="weight" class="text-sm md:text-base">Váha psa:</label>
        <div class="flex w-44 flex-col break-words md:w-56">
          <input
            id="weight"
            type="number"
            placeholder="Váha psa"
            v-model="formData.weight"
            @blur="v$.weight.$touch"
            class="pl-1 text-sm md:text-base"
            :disabled="!formData.breedId"
          />
          <span v-for="error in v$.weight.$errors" :key="error.$uid" class="text-xs text-red-500">
            {{ error.$message }}</span
          >
        </div>
      </div>

      <div class="flex h-14 flex-row justify-between md:mx-4">
        <label for="price" class="text-sm md:text-base">Cena psa:</label>
        <div class="flex w-44 flex-col break-words md:w-56">
          <input
            id="price"
            type="number"
            placeholder="Cena psa"
            v-model="formData.price"
            @blur="v$.price.$touch"
            class="pl-1 text-sm md:text-base"
            :disabled="!formData.breedId"
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
        :disabled="!formData.breedId"
      ></MyDate>

      <div class="flex h-14 flex-row justify-between md:mx-4">
        <label for="gender" class="text-sm md:text-base">Pohlaví psa:</label>
        <div class="flex w-44 flex-col break-words md:w-56">
          <select
            id="gender"
            class="text-sm md:text-base"
            v-model="formData.gender"
            @blur="v$.gender.$touch"
          >
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
        class="mr-4 w-20 self-end rounded-md border bg-button p-1 text-sm text-white hover:cursor-pointer md:w-24 md:text-base"
        type="submit"
        value="Odeslat"
      />
    </form>
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
import { required, minLength, helpers, minValue, maxValue } from '@vuelidate/validators'
import { Gender } from '../interfaces/Gender'
import MyDate from './MyDate.vue'
import { toast } from 'vue3-toastify'
import type { Breed } from '@/interfaces/Breed'

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

const breed = computed(() => {
  const oneBreed = breeds.value.find((b: Breed) => b.name === formData.breedId)
  return oneBreed
})

const vatidateName = (value: string) => {
  const regex = /^\S[\p{L}\s]*$/u // Unicode: flag "u" and class \p
  return regex.test(value)
}

const requiredMessage = 'Pole není vyplněno!'

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage(requiredMessage, required),
      minLength: helpers.withMessage('Toto pole by mělo mít alespoň 3 znaky!', minLength(3)),
      vatidateName: helpers.withMessage(
        'Pole musí obsahovat pouze písmena, žádná mezera před jménem!',
        vatidateName
      )
    },
    breedId: { required: helpers.withMessage(requiredMessage, required) },
    height: {
      required: helpers.withMessage(requiredMessage, required),
      minValue: helpers.withMessage(
        `Minimální výška plemene je: ${breed.value?.minHeight} cm!`,
        minValue(breed.value?.minHeight || 0)
      ),
      maxValue: helpers.withMessage(
        `Maximální výška plemene je: ${breed.value?.maxHeight} cm!`,
        maxValue(breed.value?.maxHeight || 20)
      )
    },
    weight: {
      required: helpers.withMessage(requiredMessage, required),
      minValue: helpers.withMessage(
        `Minimální váha plemene je: ${breed.value?.minWeight} kg!`,
        minValue(breed.value?.minWeight || 0)
      ),
      maxValue: helpers.withMessage(
        `Maximální váha plemene je: ${breed.value?.maxWeight} kg!`,
        maxValue(breed.value?.maxWeight || 20)
      )
    },
    price: {
      required: helpers.withMessage(requiredMessage, required),
      minValue: helpers.withMessage(
        `Minimální cena plemene je: ${breed.value?.minPrice} Kč!`,
        minValue(breed.value?.minPrice || 0)
      ),
      maxValue: helpers.withMessage(
        `Maximální cena plemene je: ${breed.value?.maxPrice} Kč!`,
        maxValue(breed.value?.maxPrice || 20)
      )
    },
    dateOfBirth: { required: helpers.withMessage(requiredMessage, required) },
    gender: { required: helpers.withMessage(requiredMessage, required) }
  }
})

const v$ = useVuelidate(rules, formData)

const submitDogForm = async () => {
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
    toast.error('Chyba! Vyplňte správně formulář!', {
      autoClose: 5000
    })
  }
}
</script>

<style></style>
