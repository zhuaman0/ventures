<template>
  <div class="tw-flex-1 tw-py-4 tw-text-center" :class="{'tw-border-r tw-border-gray-200': hasBorder}">
    <p class="tw-text-3xl tw-font-bold tw-text-gray-800">{{ value }}</p>
    <p class="tw-text-sm tw-text-gray-600 tw-mt-1">{{ title }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  hasBorder: Boolean
})
</script>