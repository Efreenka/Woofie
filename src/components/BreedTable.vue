<template>
  <div>
    <section class="table">
      <o-field grouped group-multiline class="buttonField">
        <button class="addBreedButton" id="show-modal" @click="emit('showModal')">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </o-field>

      <o-table :data="breeds">
        <o-table-column v-slot="props" field="name" label="Jméno" position="centered">
          {{ props.row.name }}
        </o-table-column>

        <o-table-column v-slot="props" field="minHeight" label="Min. výška" position="centered">
          {{ props.row.minHeight }}
        </o-table-column>

        <o-table-column v-slot="props" field="maxHeight" label="Max. výška" position="centered">
          {{ props.row.maxHeight }}
        </o-table-column>

        <o-table-column v-slot="props" field="minWeight" label="Min. váha" position="centered">
          {{ props.row.minWeight }}
        </o-table-column>

        <o-table-column v-slot="props" field="maxWeight" label="Max. váha" position="centered">
          {{ props.row.maxWeight }}
        </o-table-column>

        <o-table-column v-slot="props" field="minPrice" label="Min. cena" position="centered">
          {{ props.row.minPrice }}
        </o-table-column>

        <o-table-column v-slot="props" field="maxPrice" label="Max. cena" position="centered">
          {{ props.row.maxPrice }}
        </o-table-column>

        <o-table-column v-slot="props" field="lifeSpan" label="Životnost" position="centered">
          {{ props.row.lifeSpan }}
        </o-table-column>

        <o-table-column v-slot="props" field="purpose" label="Využití" position="centered">
          {{ props.row.purpose }}
        </o-table-column>
      </o-table>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useBreedStore } from '@/stores/breeds'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['showModal'])

const storeBreed = useBreedStore()
const { breeds } = storeToRefs(storeBreed)
</script>

<style>
.table {
  padding-top: 30px;
  margin: auto;
  width: 90%;
}

.buttonField {
  background-color: white;
}

.addBreedButton {
  margin-left: 20px;
  font-size: 20px;
}
</style>
