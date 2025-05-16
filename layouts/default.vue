<template>
	<div v-if="serviceStore.pageLoading" class="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-fixed tw-w-full tw-h-full tw-top-0 tw-left-0 tw-z-[1001] tw-bg-[#00000067]">
		<v-progress-circular color="#228B6B" indeterminate></v-progress-circular>
	</div>
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
import { useServiceStore } from '~/stores/services';

const serviceStore = useServiceStore();
</script>

<style>

</style>