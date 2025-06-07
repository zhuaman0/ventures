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
</script>

<template>
    <section
        class="tw-flex tw-flex-col md:tw-flex-row tw-gap-8 tw-py-12 tw-max-w-screen-xl tw-mx-auto tw-px-4"
        >
        <div class="tw-mb-8 tw-w-full md:tw-w-1/2">
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
                :class="tab === index
                ? '!tw-text-[#228B6B] '
                : '!tw-text-gray-500 hover:!tw-bg-[#f0f9f7] hover:!tw-text-[#228B6B]'"
            >
                {{ name }}
            </v-tab>
            </v-tabs>
    
            <h2 data-aos="fade-right" class="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-gray-900 tw-mt-4">
            Какие требования для
            <span class="tw-text-[#7EE4C3]">{{ tabs[tab].toLowerCase() }}?</span>
            </h2>
        </div>
    
        <div
		    data-aos="fade-left" data-aos-duration="1200"
            class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-w-full md:tw-w-1/2"
            :style="{ minHeight: '400px' }"
        >
            <template v-if="tab === 0">
            <div
                v-for="(item, index) in startupRequirements"
                :key="index"
                class="tw-border tw-border-[#B9B1FC] tw-rounded-lg tw-p-6 tw-bg-white tw-shadow-sm"
            >
                <p
                class="tw-text-[#228B6B] tw-font-semibold tw-text-lg tw-mb-2 tw-border tw-border-[#228B6B] tw-rounded-full tw-p-2 tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center"
                >
                {{ item.number }}
                </p>
                <h3 class="tw-font-bold tw-text-lg tw-mb-2 tw-text-[#181236]">
                {{ item.title }}
                </h3>
                <p class="tw-text-sm tw-text-[#181236] tw-opacity-80">{{ item.description }}</p>
            </div>
            </template>
    
            <template v-else>
            <div
                class="tw-text-[#181236] tw-text-base tw-col-span-2 tw-flex tw-items-center tw-justify-center tw-text-center tw-h-full"
            >
                Контент для "{{ tabs[tab] }}" будет добавлен позже.
            </div>
            </template>
        </div>
    </section>
</template>
    
    
<style scoped>
    .v-tab--selected .v-tab__slider {
        opacity: 0 !important;
    }
    
    .v-tabs {
        box-shadow: none !important;
        border-bottom: none !important;
    }
</style>
    