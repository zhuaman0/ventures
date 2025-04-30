<template>
  <div class="tw-flex tw-flex-col tw-min-h-screen tw-relative">
    <header>
      <BaseHeader/>
    </header>
      <div class="tw-flex-shrink-1 tw-flex-grow">
          <slot />
      </div>
    <footer>
      <BaseFooter/>
    </footer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>