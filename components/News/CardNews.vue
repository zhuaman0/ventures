<template>
    <div class="tw-w-[292px] tw-bg-white tw-flex tw-flex-col tw-h-full">
        <img :src="img" alt="news" class="tw-w-full tw-h-44 tw-object-cover" />

        <div class="tw-flex tw-flex-col tw-justify-between tw-flex-grow tw-p-4">
            <div>
            <div class="tw-text-gray-500 tw-text-sm">{{ date }}</div>
            <h2 class="tw-text-xl tw-font-bold tw-text-gray-900 tw-leading-snug">
                {{ title }}
            </h2>
            <p class="tw-text-gray-700">
                {{ description }}
            </p>
            </div>
            <a
            :href="link"
            class="tw-text-[#36CE9F] tw-font-medium tw-flex tw-items-center tw-gap-1 hover:tw-underline tw-mt-4"
            >
            Подробнее
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="tw-h-4 tw-w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
                />
            </svg>
            </a>
        </div>
    </div>
</template>    

<script setup>
    defineProps({
        img: String,
        date: String,
        title: String,
        description: String,
        link: String
    })
</script>
    