<template>
  <div class="tw-bg-white tw-rounded-xl tw-shadow tw-p-4 tw-flex tw-flex-col tw-gap-2">
    <div class="tw-flex tw-items-center tw-gap-4">
      <img :src="logo" alt="logo" class="tw-w-12 tw-h-12 tw-object-contain" />
      <div>
        <h2 class="tw-font-bold tw-text-lg">{{ name }}</h2>
        <p class="tw-text-sm tw-text-gray-600">{{ description }}</p>
      </div>
    </div>
    <div class="tw-flex tw-flex-wrap tw-gap-2 tw-mt-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="tw-bg-gray-100 tw-text-sm tw-px-2 tw-py-1 tw-rounded-full"
      >
        {{ tag }}
      </span>
    </div>
    <NuxtLink
      to="#"
      class="tw-text-green-600 tw-mt-2 tw-text-sm hover:tw-underline"
    >
      Подробнее →
    </NuxtLink>
  </div>
</template>

  <script setup>
  defineProps({
    logo: String,
    name: String,
    description: String,
    tags: Array
  })
  </script>
  