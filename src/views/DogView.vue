<template>
  <div>
    <div class="mt-20">
      <button id="show-modal" @click="showModal">Show Modal</button>

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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheModal from '@/components/TheModal.vue'
import DogCreateForm from '@/components/DogCreateForm.vue'

const isModalOpen = ref(false)

const showModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style></style>
