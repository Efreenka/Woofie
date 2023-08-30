<template>
  <div
    class="text-white bg-blue-900 py-3.5 pr-6 pl-2 w-screen flex flex-row fixed top-0 z-50 justify-between md:h-16"
  >
    <div class="flex flex-col md:flex-row items-center md:items-start md:basis-[90%] md:gap-12">
      <div class="flex flex-row-reverse justify-around md:basis-[5%] gap-3 min-w-[90px]">
        <font-awesome-icon :icon="['fas', 'dog']" class="w-9 h-9 text-icon" />
        <button @click="toggleHamburgerMenu" class="md:hidden block border-none">
          <font-awesome-icon :icon="['fas', 'bars']" class="text-icon" />
        </button>
      </div>
      <div class="md:basis-2/5">
        <MainMenu
          @click="showMenu = false"
          :class="{ hidden: !showMenu, show: showMenu }"
          class="md:block"
        />
      </div>
    </div>
    <div class="flex gap-6 pt-1 md:basis-[10%]">
      <DropdownMenu :items="languages" />
      <DropdownMenu :items="currencies" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import DropdownMenu from './DropdownMenu.vue'
import MainMenu from './MainMenu.vue'

const currencies = reactive(['CZK', 'EUR', 'USD'])

const languages = reactive(['CS', 'EN'])

const showMenu = ref(false)

function toggleHamburgerMenu() {
  showMenu.value = !showMenu.value
}
</script>

<style>
.hide {
  @apply hidden h-0;
}

.show {
  @apply h-24 block align-bottom text-start pt-3 md:pt-0 md:h-0;
}
</style>
