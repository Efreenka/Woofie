<template>
  <div>
    <div>
      <router-link to="dog">Pejsci</router-link>
      <router-link to="breed">Plemeno</router-link>
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
