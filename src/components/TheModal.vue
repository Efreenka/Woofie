<template>
  <div>
    <Transition name="modal">
      <div
        v-if="props.show"
        class="fixed left-0 top-0 z-[100] flex h-full w-full bg-black bg-opacity-50 transition-opacity duration-300 ease-in"
      >
        <div
          class="m-auto flex max-w-[700px] flex-col items-center gap-6 rounded-sm bg-white px-[30px] py-5"
        >
          <button class="self-end" @click="$emit('close')">
            <font-awesome-icon
              :icon="['fas', 'xmark']"
              class="text-2xl text-slate-400 transition-colors duration-150 hover:text-black"
            />
          </button>
          <div class="">
            <slot name="header">default header</slot>
          </div>

          <div class="mb-6">
            <slot name="body">default body</slot>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
}

const props = defineProps<Props>()
</script>

<style>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
