<template>
  <div
    class="text-white bg-blue-900 py-3.5 px-6 w-screen flex flex-row fixed z-50 justify-between md:h-16"
  >
    <div class="flex flex-col md:flex-row md:basis-[90%] gap-3 md:gap-12">
      <div class="flex justify-center flex-row md:basis-[5%] gap-3">
        <font-awesome-icon :icon="['fas', 'dog']" style="color: #a3e3ff" class="w-9 h-9" />
        <button @click="hamburgerMenu()" class="md:hidden block border-none">:::</button>
      </div>
      <div class="md:basis-2/5">
        <MainMenu :class="{ hidden: !showMenu, show: showMenu, 'md:block': true }" />
      </div>
    </div>
    <div class="flex gap-8 md:gap-16 mr-3 md:basis-[10%]">
      <DropdownMenuVue :items="languages" />
      <DropdownMenuVue :items="currencies" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import DropdownMenuVue from './DropdownMenu.vue'
import MainMenu from './MainMenu.vue'

const currencies = reactive(['CZK', 'EUR', 'USD'])

const languages = reactive(['CS', 'EN'])

const showMenu = ref(false)

function hamburgerMenu() {
  showMenu.value = !showMenu.value
}
</script>

<style>
.hide {
  @apply hidden h-0;
}

.show {
  @apply h-24 block align-bottom;
}
</style>
