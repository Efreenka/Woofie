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
            <h3>custom body</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates vitae
              repellat rerum et voluptatem laborum praesentium in, mollitia asperiores tenetur quod
              enim aperiam unde quidem eligendi! Eos, suscipit tempore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum cumque, iste
              iure nisi at hic numquam ea voluptatibus, itaque labore, dolore animi necessitatibus.
              Eum magnam accusantium earum minus cupiditate.
            </p>
          </template>
        </TheModal>
      </Teleport>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
      <p>ksklefnklsefklkfseklfklefklsefkls</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheModal from '@/components/TheModal.vue'

const showModal = ref(false)
</script>

<style></style>
