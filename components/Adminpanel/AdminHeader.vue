<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const searchQuery = ref('')
const performSearch = () => {
  console.log(t('admin.search') + ':', searchQuery.value)
}
</script>

<template>
  <div class="tw-p-5 tw-bg-white tw-shadow-sm">
    <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between md:tw-items-center tw-gap-4">
      <h1 class="tw-text-3xl tw-font-bold tw-text-gray-800">{{ t('admin.greeting') }}</h1>
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
