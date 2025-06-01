<template>
  <aside class="tw-w-full tw-max-w-[250px] tw-space-y-4 tw-p-4 tw-bg-white tw-rounded-xl tw-shadow">
    <div>
      <h3 class="tw-font-semibold tw-mb-2">Индустрии</h3>
      <div
        v-for="industry in industries"
        :key="industry"
        class="tw-flex tw-items-center tw-gap-2"
      >
        <input type="checkbox" :id="industry" />
        <label :for="industry" class="tw-text-sm">{{ industry }}</label>
      </div>
    </div>
  </aside>
</template>

<script setup>
const industries = [
  'AdTech & MarTech',
  'AgroTech',
  'Alternative energy',
  'AudioTech',
  'BioTech',
  'Autonomous driving'
]
</script>
