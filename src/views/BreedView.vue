<template>
  <div class="container">
    <div class="a">
      <button
        id="show-modal"
        @click="showModal"
      >
        <font-awesome-icon :icon="['fas', 'plus']" />
      </button>

      <Teleport to="body">
        <TheModal :show="isModalOpen" @closeModal="closeModal">
          <template #header>
            <h3>Registrace plemene</h3>
          </template>
          <template #body>
            <BreedCreateForm @closeModal="closeModal"></BreedCreateForm>
          </template>
        </TheModal>
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheModal from '@/components/TheModal.vue'
import BreedCreateForm from '@/components/BreedCreateForm.vue'

const isModalOpen = ref(false)

const showModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style>
.container {
  background-color: rgb(244, 248, 248);
  padding-top: 64px;
  height: 100vh;
  margin: auto;
  width: 75%;
}

.a {
  margin: 10px 20px;
}
</style>
