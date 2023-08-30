<template>
  <div
    class="relative inline-block hover:block"
    @mouseover="showDropdown = true"
    @mouseleave="showDropdown = false"
  >
    <button class="mt-[2px] w-10 pb-2">{{ selectedItem }}</button>
    <div v-if="showDropdown" class="absolute rounded-md bg-white py-1 text-blue-900 shadow-lg">
      <a
        href="#!"
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(item)"
        class="block cursor-pointer px-3 py-2 hover:bg-gray-100"
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
