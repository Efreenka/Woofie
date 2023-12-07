<template>
  <div class="containerBreed">
    <div class="a">
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
    <BreedTable @showModal="showModal"></BreedTable>
    <span>Ahooooj</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheModal from '@/components/TheModal.vue'
import BreedCreateForm from '@/components/BreedCreateForm.vue'
import BreedTable from '@/components/BreedTable.vue'

const isModalOpen = ref(false)

const showModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style>
.containerBreed {
  background-color: rgb(244, 248, 248);
  padding-top: 64px;
  min-height: 100vh;
  margin: auto;
  width: 75%;
}

.a {
  margin: 10px 20px;
}

@media (max-width: 768px) {
  .containerBreed {
    width: 100%;
  }
}
</style>
