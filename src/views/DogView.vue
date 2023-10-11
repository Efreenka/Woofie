<template>
  <div class="m-auto grid h-screen justify-center bg-bgColor pt-16 md:w-3/4">
    <div class="flex flex-row flex-wrap gap-8 bg-bgColor p-10">
      <button
        id="show-modal"
        @click="showModal"
        class="h-[400px] w-80 bg-blue-100 text-9xl text-white transition-all hover:bg-white hover:text-blue-100 hover:duration-500"
      >
        <font-awesome-icon :icon="['fas', 'plus']" />
      </button>

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

      <DogCard v-for="dog in dogs" :key="dog.id" :dog="dog"></DogCard>
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
