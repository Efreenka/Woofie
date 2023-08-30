<template>
  <div
    class="fixed top-0 z-50 flex w-screen flex-row justify-between bg-blue-900 py-3.5 pl-2 pr-6 text-white md:h-16"
  >
    <div class="flex flex-col items-center md:basis-[90%] md:flex-row md:items-start md:gap-12">
      <div class="flex min-w-[90px] flex-row-reverse justify-around gap-3 md:basis-[5%]">
        <font-awesome-icon :icon="['fas', 'dog']" class="h-9 w-9 text-icon" />
        <button @click="toggleHamburgerMenu" class="block border-none md:hidden">
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
  @apply block h-24 pt-3 text-start align-bottom md:h-0 md:pt-0;
}
</style>
