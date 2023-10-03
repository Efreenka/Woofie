<template>
  <div class=" w-3/4 h-screen m-auto  bg-bgColor pt-16 ">
    <div class="  bg-bgColor p-10 flex flex-row gap-4 flex-wrap justify-center ">
      
    <button id="show-modal" @click="showModal" class="  w-80 h-[400px] text-9xl bg-blue-100 text-white" ><font-awesome-icon :icon="['fas', 'plus']" /></button>

    <Teleport to="body">
      <TheModal :show="isModalOpen" @closeModal="closeModal">
        <template #header>
          <h3>Registrace psa</h3>
        </template>
        <template #body>
          <DogCreateForm @closeModal="closeModal"></DogCreateForm>
        </template>
      </TheModal>
    </Teleport>
  
    <DogCard v-for="dog in dogs" :dog="dog"></DogCard>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheModal from '@/components/TheModal.vue'
import DogCreateForm from '@/components/DogCreateForm.vue'
import DogCard from '@/components/DogCard.vue'
import { storeToRefs } from 'pinia'
import { useDogStore } from '@/stores/dogs'

const storeDog = useDogStore()
const { dogs } = storeToRefs(storeDog)

const isModalOpen = ref(false)

const showModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style></style>
