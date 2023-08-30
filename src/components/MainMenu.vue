<template>
  <nav>
    <ul class="flex flex-col md:flex-row gap-5 md:gap-28 pt-1 bg-blue-900">
      <li>
        <router-link to="dog" class="text-xl hover:text-gray-300">Pejsci</router-link>
      </li>
      <li>
        <router-link to="breed" class="text-xl hover:text-gray-300">Plemeno</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
