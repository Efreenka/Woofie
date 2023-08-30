<template>
  <nav>
    <ul class="flex flex-col gap-5 bg-blue-900 pt-1 md:flex-row md:gap-10">
      <li>
        <RouterLink to="dog" class="text-xl hover:text-gray-300">Pejsci</RouterLink>
      </li>
      <li>
        <RouterLink to="breed" class="text-xl hover:text-gray-300">Plemena</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
