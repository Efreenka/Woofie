<template>
  <div>
    <div class="mt-20">
      <button id="show-modal" @click="showModal = true">Show Modal</button>

      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <TheModal :show="showModal" @close="showModal = false">
          <template #header>
            <h3>Registrace psa</h3>
          </template>
          <template #body>
            <DogCreateForm @close="closeModal"></DogCreateForm>
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

const showModal = ref(false)
const closeModal = () => {
  showModal.value = false
}
</script>

<style></style>
