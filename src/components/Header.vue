<template>
  <div
    class="text-white bg-blue-900 py-3.5 pr-6 pl-2 w-screen flex flex-row fixed top-0 z-50 justify-between md:h-16"
  >
    <div class="flex flex-col md:flex-row items-center md:items-start md:basis-[90%]  md:gap-12">
      <div class="flex flex-row-reverse justify-around md:basis-[5%] gap-3 min-w-[90px]">
        <font-awesome-icon :icon="['fas', 'dog']" style="color: rgb(163, 227, 255)" class="w-9 h-9" />
        <button @click="hamburgerMenu()" class="md:hidden block border-none"><font-awesome-icon :icon="['fas', 'bars']" style="color: #a3e3ff;" /></button>
      </div>
      <div class="md:basis-2/5">
        <MainMenu @click="showMenu = false" :class="{ hidden: !showMenu, show: showMenu, 'md:block': true }" />
      </div>
    </div>
    <div class="flex gap-6 md:gap-10 mr-3 pt-1 md:basis-[10%]">
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
  @apply h-24 block align-bottom text-start pt-3 md:pt-0 md:h-0;
}
</style>
