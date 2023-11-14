<template>
  <div class="container-form">
    <form @submit.prevent="submitBreedForm" class="form">
      <div class="field">
        <label for="name">Název plemene:</label>
        <div class="input-error-field">
          <input type="text" id="name" placeholder="Název plemene" v-model="formData.name" />
          <span v-if="v$.name.$errors.length > 0" class="error"
            >{{ v$.name.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="field">
        <label for="minHeight">Výška:</label>
        <div class="min-max-field">
          <div class="input-error-field-custom">
            <input
              type="number"
              id="minHeight"
              placeholder="Min. výška"
              v-model="formData.minHeight"
              class="input-custom"
              min="0"
              max="1000"
            />
            <span v-if="v$.minHeight.$errors.length > 0" class="error-custom"
              >{{ v$.minHeight.$errors[0].$message }}
            </span>
          </div>

          <span>-</span>

          <div class="input-error-field-custom">
            <input
              type="number"
              id="maxHeight"
              placeholder="Max. výška"
              v-model="formData.maxHeight"
              class="input-custom"
              min="0"
              max="1000"
            />
            <span v-if="v$.maxHeight.$errors.length > 0" class="error-custom"
              >{{ v$.maxHeight.$errors[0].$message }}
            </span>
          </div>
        </div>
      </div>

      <div class="field">
        <label for="minWeight">Váha:</label>
        <div class="min-max-field">
          <div class="input-error-field-custom">
            <input
              type="number"
              id="minWeight"
              placeholder="Min. váha"
              v-model="formData.minWeight"
              class="input-custom"
              min="0"
              max="1000"
            />
            <span v-if="v$.minWeight.$errors.length > 0" class="error-custom"
              >{{ v$.minWeight.$errors[0].$message }}
            </span>
          </div>

          <span>-</span>

          <div class="input-error-field-custom">
            <input
              type="number"
              id="maxWeight"
              placeholder="Max. váha"
              v-model="formData.maxWeight"
              class="input-custom"
              min="0"
              max="1000"
            />
            <span v-if="v$.maxWeight.$errors.length > 0" class="error-custom"
              >{{ v$.maxWeight.$errors[0].$message }}
            </span>
          </div>
        </div>
      </div>

      <div class="field">
        <label for="minPrice">Cena:</label>
        <div class="min-max-field">
          <div class="input-error-field-custom">
            <input
              type="number"
              id="minPrice"
              placeholder="Min. cena"
              v-model="formData.minPrice"
              class="input-custom"
              min="0"
            />
            <span v-if="v$.minPrice.$errors.length > 0" class="error-custom"
              >{{ v$.minPrice.$errors[0].$message }}
            </span>
          </div>

          <span>-</span>

          <div class="input-error-field-custom">
            <input
              type="number"
              id="maxPrice"
              placeholder="Max. cena"
              v-model="formData.maxPrice"
              class="input-custom"
              min="0"
            />
            <span v-if="v$.maxPrice.$errors.length > 0" class="error-custom"
              >{{ v$.maxPrice.$errors[0].$message }}
            </span>
          </div>
        </div>
      </div>

      <div class="field">
        <label for="lifeSpan">Životnost:</label>
        <div class="input-error-field">
          <input
            type="number"
            id="lifeSpan"
            placeholder="Životnost"
            v-model="formData.lifeSpan"
            min="0"
            max="1000"
          />
          <span v-if="v$.lifeSpan.$errors.length > 0" class="error"
            >{{ v$.lifeSpan.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="field">
        <label for="purpose">Využití plemene:</label>
        <div class="input-error-field">
          <input
            type="text"
            id="purpose"
            placeholder="Využití plemene"
            v-model="formData.purpose"
          />
          <span v-if="v$.purpose.$errors.length > 0" class="error"
            >{{ v$.purpose.$errors[0].$message }}
          </span>
        </div>
      </div>

      <input class="submit-breed-button" type="submit" value="Odeslat" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Breed } from '@/interfaces/Breed'
import { useBreedStore } from '@/stores/breeds'
import useVuelidate from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'
import { toast } from 'vue3-toastify'

const emit = defineEmits(['closeModal'])

const storeBreed = useBreedStore()
const { addBreed } = storeBreed

const formData = reactive({
  id: uuidv4(),
  name: '',
  minHeight: null,
  maxHeight: null,
  minWeight: null,
  maxWeight: null,
  minPrice: null,
  maxPrice: null,
  lifeSpan: null,
  purpose: ''
} as Breed)

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
    minHeight: { required: helpers.withMessage(requiredMessage, required) },
    maxHeight: { required: helpers.withMessage(requiredMessage, required) },
    minWeight: { required: helpers.withMessage(requiredMessage, required) },
    maxWeight: { required: helpers.withMessage(requiredMessage, required) },
    minPrice: { required: helpers.withMessage(requiredMessage, required) },
    maxPrice: { required: helpers.withMessage(requiredMessage, required) },
    lifeSpan: { required: helpers.withMessage(requiredMessage, required) },
    purpose: { required: helpers.withMessage(requiredMessage, required) }
  }
})

const v$ = useVuelidate(rules, formData)

const submitBreedForm = async () => {
  const result = await v$.value.$validate()

  if (result) {
    const breed = reactive({
      id: formData.id,
      name: formData.name,
      minHeight: formData.minHeight,
      maxHeight: formData.maxHeight,
      minWeight: formData.minWeight,
      maxWeight: formData.maxWeight,
      minPrice: formData.minPrice,
      maxPrice: formData.maxPrice,
      lifeSpan: formData.lifeSpan,
      purpose: formData.purpose
    })

    addBreed(breed)

    formData.id = uuidv4()
    formData.name = ''
    formData.minHeight = null
    formData.maxHeight = null
    formData.minWeight = null
    formData.maxWeight = null
    formData.minPrice = null
    formData.maxPrice = null
    formData.lifeSpan = null
    formData.purpose = ''

    emit('closeModal')
  } else {
    toast.error('Chyba! Vyplňte správně formulář!', {
      autoClose: 5000
    })
  }
}
</script>

<style scoped>
.container-form {
  height: 425px;
  width: 500px;
  background-color: rgb(235, 248, 254);
  padding: 10px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 4px;
}

.field {
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 16px;
}

.input-error-field {
  display: flex;
  flex-direction: column;
  width: 224px;
  overflow-wrap: break-word;
}

.min-max-field {
  display: flex;
  flex-direction: row;
  gap: 9px;
}

.input-error-field-custom {
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
}

input[type='text'],
[type='number'] {
  padding-left: 5px;
}

.input-custom {
  width: 100px;
}

.error {
  font-size: 12px;
  color: rgb(239, 68, 68);
  padding-left: 4px;
}

.error-custom {
  font-size: 12px;
  color: rgb(239, 68, 68);
  padding-left: 4px;
  width: 100px;
}

.submit-breed-button {
  background-color: rgb(31, 109, 173);
  color: white;
  padding: 4px;
  margin-right: 16px;
  width: 96px;
  align-self: flex-end;
  border-radius: 6px;
  border-width: 1px;
}

.submit-breed-button:hover {
  cursor: pointer;
}

@media (max-width: 768px) {
  .container-form {
    width: 320px;
  }

  .field {
    margin: 0px;
  }

  .input-error-field {
    width: 176px;
  }

  .min-max-field {
    gap: 6px;
  }

  .input-custom {
    width: 78px;
  }

  label {
    font-size: 14px;
  }

  input[type='text'],
  [type='number'] {
    padding-left: 4px;
    font-size: 12px;
  }

  .error {
    font-size: 10px;
  }

  .error-custom {
    font-size: 10px;
    width: 78px;
  }

  .submit-breed-button {
    width: 80px;
    font-size: 14px;
  }
}
</style>
