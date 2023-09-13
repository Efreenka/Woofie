<template>
  <div class="flex h-16 flex-row justify-between md:mx-4">
    <label for="dayOfBirth">Datum narození:</label>
    <div>
      <input id="dayOfBirth" type="date" v-model="value" class="w-44 md:w-56" />
      <span v-for="error in errors" :key="error.$uid" class="text-sm text-red-500">
        {{ error.$message }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
const props = defineProps(['modelValue', 'errors'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return dayjs(props.modelValue).format('YYYY-MM-DD')
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style></style>
