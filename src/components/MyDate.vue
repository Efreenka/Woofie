<template>
  <div class="flex h-14 flex-row justify-between md:mx-4">
    <label for="dateOfBirth" class="text-sm md:text-base">Datum narození:</label>
    <div class="flex w-44 flex-col break-words md:w-56">
      <input
        id="dateOfBirth"
        type="date"
        v-model="dateOfBirth"
        @blur="$emit('validate')"
        class="pl-[2px] text-sm md:text-base"
        :disabled="disabled"
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
const props = defineProps(['modelValue', 'errors', 'disabled'])
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
