<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const performSearch = () => {
  console.log('Поиск по:', searchQuery.value)
}
</script>

<template>
  <div class="tw-p-5 tw-bg-white tw-shadow-sm">
    <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between md:tw-items-center tw-gap-4">
      <h1 class="tw-text-3xl tw-font-bold tw-text-gray-800">Приветствую</h1>

      <div class="tw-flex tw-items-center tw-gap-4 tw-w-full md:tw-w-auto">
        <div class="tw-relative tw-w-full md:tw-w-96">
          <v-text-field
            v-model="searchQuery"
            density="comfortable"
            label="Поиск"
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            hide-details
            color="grey"
            class="no-hover-green"
            @keyup.enter="performSearch"
          />
        </div>

        <img
          src="https://i.pravatar.cc/40?u=user"
          alt="Avatar"
          class="tw-w-10 tw-h-10 tw-rounded-full tw-object-cover tw-shadow tw-ml-12"
        />
      </div>
    </div>
  </div>
</template>

<style>
  .no-hover-green .v-field__outline {
    border-color: #d1d5db !important;
  }
  .no-hover-green:hover .v-field__outline,
  .no-hover-green:focus-within .v-field__outline {
    border-color: #9ca3af !important;
  }
</style>
