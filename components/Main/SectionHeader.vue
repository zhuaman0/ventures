<template>
  <div class="tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-text-start tw-items-center tw-px-2 lg:tw-px-0 tw-max-w-[1300px] tw-mx-auto">
    <div class="tw-w-full lg:tw-w-1/2 tw-max-w-xl">
      <section class="tw-py-12 tw-px-4 tw-center lg:tw-text-left">
        <h1 data-aos="fade-right" data-aos-duration="800" class="tw-text-3xl sm:tw-text-4xl tw-font-bold tw-text-[#36CE9F]">
          {{ t('main_title').split('\n')[0] }}<br class="tw-hidden sm:tw-block" />
          {{ t('main_title').split('\n')[1].replace(t('main_highlight'), '') }}
          <span class="tw-text-[#2B10F9]">{{ t('main_highlight') }}</span>
        </h1>
        <p data-aos="fade-right" data-aos-duration="1200" class="tw-mt-4 tw-text-[#181236]">
          {{ t('main_subtitle') }}
        </p>
        <button data-aos="fade-right" data-aos-duration="1500" class="tw-mt-6 tw-bg-[#36CE9F] tw-text-white tw-px-6 tw-py-2 tw-rounded hover:tw-bg-green-300 tw-transition">
          {{ t('main_button') }}
        </button>
      </section>
    </div>

    <div data-aos="fade-left" class="tw-w-full lg:tw-w-1/2 tw-flex tw-justify-center">
      <img src="/assets/image/beam-people-working.svg" alt="People working" class="tw-w-full tw-max-w-md" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
const { t } = useI18n()
</script>
