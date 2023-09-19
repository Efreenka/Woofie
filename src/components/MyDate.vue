<template>
  <div class="flex h-14 flex-row justify-between md:mx-4">
    <label for="dateOfBirth">Datum narození:</label>
    <div class="flex flex-col w-44 md:w-56 break-words">
      <input 
        id="dateOfBirth" 
        type="date" 
        v-model="dateOfBirth" 
        @blur="$emit('validate')" 
        class=" pl-[2px]" 
      />
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
const emit = defineEmits(['update:modelValue', 'validate'])

const dateOfBirth = computed({
  get() {
    return dayjs(props.modelValue).format('YYYY-MM-DD')
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style></style>
