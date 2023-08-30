<template>
  <div
    class="relative inline-block hover:block"
    @mouseover="showDropdown = true"
    @mouseleave="showDropdown = false"
  >
    <button class="w-10 mt-[2px]">{{ selectedItem }}</button>
    <div v-if="showDropdown" class="absolute mt-2 py-1 bg-white shadow-lg rounded-md text-blue-900">
      <a
        href="#!"
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(item)"
        class="block px-3 py-2 cursor-pointer hover:bg-gray-100"
      >
        {{ item }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  items: string[]
}

const props = defineProps<Props>()

const showDropdown = ref(false)
const selectedItem = ref(props.items[0])

function selectItem(item: string) {
  selectedItem.value = item
  showDropdown.value = false
}
</script>
