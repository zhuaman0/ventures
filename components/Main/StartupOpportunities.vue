<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

import womansit from '/assets/icons/index/womansit.svg'
import mansearching from '/assets/icons/index/mansearching.svg'
import beamanalytics from '/assets/icons/index/beamanalytics.svg'
import beamremote from '/assets/icons/index/beamremote.svg'

const cards = [
  {
    title: "Подайте заявку на пилот",
    description: "Знакомьтесь с запросами компаний на технологии и сразу откликайтесь на них",
    image: womansit,
  },
  {
    title: "Найдите инвестора",
    description: "Связывайтесь с инвесторами и привлекайте венчурный капитал",
    image: mansearching,
  },
  {
    title: "Все на одной платформе",
    description: "Выбирайте инструменты для повышения эффективности бизнеса и партнеров",
    image: beamanalytics,
  },
  {
    title: "Станьте экспертом",
    description: "Участвуйте в мероприятиях, подпишитесь на медиа-проекты и получайте полезный ",
    image: beamremote,
  }
]

const cardsPerSlide = ref(4)

function updateCardsPerSlide() {
  const width = window.innerWidth
  if (width < 640) cardsPerSlide.value = 1
  else if (width < 768) cardsPerSlide.value = 2
  else if (width < 1024) cardsPerSlide.value = 4
  else cardsPerSlide.value = 4
}

const slides = computed(() => {
  const perSlide = cardsPerSlide.value
  const result = []
  for (let i = 0; i < cards.length; i += perSlide) {
    result.push(cards.slice(i, i + perSlide))
  }
  return result
})

onMounted(() => {
  updateCardsPerSlide()
  window.addEventListener('resize', updateCardsPerSlide)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCardsPerSlide)
})

const currentSlide = ref(0)

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prev = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}
</script>


<template>
  <section class="tw-py-20 tw-bg-[#D6F1E8]">
    <div class="tw-max-w-7xl tw-mx-auto tw-px-2">
      <div class="tw-relative">

        <div class="tw-flex tw-flex-col sm:tw-flex-row tw-items-start sm:tw-items-center tw-justify-between tw-gap-4 tw-mb-12">
          <h2 data-aos="fade-up" class="tw-text-3xl sm:tw-text-4xl tw-font-bold tw-text-[#0D0B33]">
            Возможности для стартапа
          </h2>

          <div class="tw-flex tw-gap-2 sm:tw-mt-0">
            <v-btn icon size="small" @click="prev" class="tw-rounded-full">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn icon size="small" @click="next" class="tw-rounded-full">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>

        <v-carousel
          v-model="currentSlide"
          cycle
          hide-delimiter-background
          hide-delimiters
          :show-arrows="false"
          height="100%"
        >

          <v-carousel-item v-for="(slide, index) in slides" :key="index">
            <div
              :class="{
                'tw-grid': true,
                'tw-grid-cols-1': cardsPerSlide === 1,
                'sm:tw-grid-cols-2': cardsPerSlide > 1,
                'lg:tw-grid-cols-3': cardsPerSlide > 2,
                'xl:tw-grid-cols-4': cardsPerSlide > 3,
              }"
              class="tw-gap-6 tw-px-4"
            >
              <div
				    data-aos="fade-up"
                v-for="(card, i) in slide"
                :key="i"
                class="tw-bg-white tw-rounded-lg tw-shadow-md tw-text-start tw-flex tw-flex-col tw-justify-between tw-h-full tw-p-6"
              >
                <img
                  :src="card.image"
                  alt="index"
                  class="tw-w-full tw-h-auto tw-mb-4"
                />
                <div>
                  <h3 class="tw-font-bold tw-text-lg tw-text-[#0D0B33]">
                    {{ card.title }}
                  </h3>
                  <p class="tw-mt-2 tw-text-gray-600">{{ card.description }}</p>
                </div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </section>
</template>


