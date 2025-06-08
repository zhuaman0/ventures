<template>
    <section class="tw-flex tw-flex-col md:tw-flex-row tw-gap-8 tw-py-12 tw-max-w-screen-xl tw-mx-auto tw-px-4">
      <div class="tw-w-full md:tw-w-1/2">
        <v-tabs
          v-model="tab"
          bg-color="transparent"
          color="#7EE4C3"
          slider-color="#7EE4C3"
          grow
          class="tw-overflow-x-auto"
        >
          <v-tab
            v-for="(name, index) in tabs"
            :key="index"
            class="!tw-text-sm !tw-font-semibold tw-whitespace-nowrap !tw-py-3 !tw-px-5 tw-rounded-md tw-cursor-pointer transition-colors duration-300"
            :class="tab === index ? '!tw-text-[#228B6B]' : '!tw-text-gray-500 hover:!tw-bg-[#f0f9f7] hover:!tw-text-[#228B6B]'"
          >
            {{ name }}
          </v-tab>
        </v-tabs>
        <h2 data-aos="fade-right" class="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-gray-900 tw-mt-4">
          Какие требования для
          <span class="tw-text-[#7EE4C3]">{{ tabs[tab].toLowerCase() }}?</span>
        </h2>
      </div>
      <div class="tw-w-full md:tw-w-1/2">
        <div v-if="tab === 0">
          <ul>
            <li class="tw-border tw-border-[#B9B1FC] tw-px-4 tw-py-4 tw-mb-4" v-for="item in startupRequirements" :key="item.number">
              <h3 class="tw-font-semibold tw-text-lg">{{ item.number }}. {{ item.title }}</h3>
              <p class="tw-text-gray-600">{{ item.description }}</p>
            </li>
          </ul>
        </div>
        <div v-if="tab === 1">
          <ul>
            <li class="tw-border tw-border-[#B9B1FC] tw-px-4 tw-py-4 tw-mb-4" v-for="item in investorRequirements" :key="item.number">
              <h3 class="tw-font-semibold tw-text-lg">{{ item.number }}. {{ item.title }}</h3>
              <p class="tw-text-gray-600">{{ item.description }}</p>
            </li>
          </ul>
        </div>
        <div v-if="tab === 2">
          <ul>
            <li class="tw-border tw-border-[#B9B1FC] tw-px-4 tw-py-4 tw-mb-4" v-for="item in corporateRequirements" :key="item.number">
              <h3 class="tw-font-semibold tw-text-lg">{{ item.number }}. {{ item.title }}</h3>
              <p class="tw-text-gray-600">{{ item.description }}</p>
            </li>
          </ul>
        </div>
        <div v-if="tab === 3">
          <ul>
            <li class="tw-border tw-border-[#B9B1FC] tw-px-4 tw-py-4 tw-mb-4" v-for="item in expertRequirements" :key="item.number">
              <h3 class="tw-font-semibold tw-text-lg">{{ item.number }}. {{ item.title }}</h3>
              <p class="tw-text-gray-600">{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
    import { ref } from 'vue'
  
    const tab = ref(0)
  
    const tabs = ['Стартапы', 'Инвесторы', 'Корпорации', 'Специалисты']
  
    const startupRequirements = [
      {
        number: '01',
        title: 'Технологический уклон в инновации',
        description: 'Обязательно наличие инновационной технологии',
      },
      {
        number: '02',
        title: 'Зарегистрированное юрлицо или ИП',
        description: 'Бизнес должен быть оформлен юридически',
      },
      {
        number: '03',
        title: 'Бизнес-план и анализ рынка',
        description: 'Иметь базовый бизнес-план с описанием идеи и цели',
      },
      {
        number: '04',
        title: 'Наличие MVP или готового продукта',
        description: 'Проекты на стадии прототипа и идеи временно не рассматриваются',
      },
    ]
  
    const investorRequirements = [
      {
        number: '01',
        title: 'Опыт в инвестициях',
        description: 'Наличие опыта в венчурных или корпоративных инвестициях',
      },
      {
        number: '02',
        title: 'Финансовая устойчивость',
        description: 'Подтверждение источников и объёмов доступного капитала',
      },
      {
        number: '03',
        title: 'Интерес к инновациям',
        description: 'Интерес к технологиям и новым бизнес-моделям',
      },
    ]
  
    const corporateRequirements = [
      {
        number: '01',
        title: 'Инновационная стратегия',
        description: 'Наличие внутренней стратегии по работе со стартапами',
      },
      {
        number: '02',
        title: 'Команда для внедрения решений',
        description: 'Отдел/специалисты для пилотов и интеграций',
      },
      {
        number: '03',
        title: 'Потребность в технологиях',
        description: 'Проблемы, которые можно решить с помощью новых решений',
      },
    ]
  
    const expertRequirements = [
      {
        number: '01',
        title: 'Опыт в отрасли',
        description: 'Подтверждённая экспертиза в конкретной профессиональной области',
      },
      {
        number: '02',
        title: 'Портфолио и публикации',
        description: 'Публикации, исследования или реализованные проекты',
      },
      {
        number: '03',
        title: 'Готовность к менторству',
        description: 'Готовность делиться знаниями и сопровождать проекты',
      },
    ]
  
    const allRequirements = [startupRequirements, investorRequirements, corporateRequirements, expertRequirements]
  </script>
  
  <style scoped>
    .v-tab--selected .v-tab__slider {
      opacity: 0 !important;
    }
  
    .v-tabs {
      box-shadow: none !important;
      border-bottom: none !important;
    }
  </style>
  