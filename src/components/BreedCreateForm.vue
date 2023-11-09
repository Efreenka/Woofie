<template>
    <div class="container-form">
        <form @submit.prevent="submitBreedForm" class="form">
            <div class="field">
                <label for="name">Jméno plemene:</label>
                <div class="input-error-field">
                    <input 
                        type="text" 
                        id="name"
                        placeholder="Jméno psa"
                        v-model="formData.name"
                    >
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
                        >
                    </div>

                    <span>-</span>

                    <div  class="input-error-field-custom">
                        <input 
                            type="number" 
                            id="maxHeight"
                            placeholder="Max. výška"
                            v-model="formData.maxHeight"
                            class="input-custom"
                        >
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
                        >
                    </div>

                    <span>-</span>

                    <div class="input-error-field-custom">
                        <input 
                            type="number" 
                            id="maxWeight"
                            placeholder="Max. váha"
                            v-model="formData.maxWeight"
                            class="input-custom"
                        >
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
                        >
                    </div>

                    <span>-</span>

                    <div class="input-error-field-custom">
                        <input 
                            type="number" 
                            id="maxPrice"
                            placeholder="Max. cena"
                            v-model="formData.maxPrice"
                            class="input-custom"
                        >
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
                    >
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
                    >
                </div>
            </div>

            <input
                class="submit-breed-button"
                type="submit"
                value="Odeslat"
            />
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Breed } from '@/interfaces/Breed';
import { useBreedStore } from '@/stores/breeds'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['closeModal'])

const storeBreed = useBreedStore()
const { addBreed } = storeBreed
const { breeds } = storeToRefs(storeBreed)

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

const submitBreedForm = async () => {
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
        purpose: formData.purpose,
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

.min-max-field{
    display: flex;
    flex-direction: row;
    gap: 9px;
}

.input-error-field-custom{
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
}

input[type=text],[type=number] {
    padding-left: 5px;
}

.input-custom {
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

    .min-max-field{
        gap: 6px;
    }

    .input-custom {
        width: 78px;
    }

    label {
        font-size: 14px;
    }

    input[type=text],[type=number] {
        padding-left: 4px;
        font-size: 12px;
    }

    .submit-breed-button {
        width: 80px;
        font-size: 14px;
    }
}
</style>
