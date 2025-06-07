<template>
    <section class="tw-py-16 tw-px-4 tw-max-w-[1300px] tw-mx-auto">
        <h2
            data-aos="fade-up"
            data-aos-duration="800"
            class="tw-text-3xl sm:tw-text-4xl tw-font-bold tw-text-[#181236] tw-text-start tw-mb-12"
            style="max-width: 600px;"
            >
            {{ $t('categories.title') }}
        </h2>

        <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6">
        <div
            data-aos="fade-up"
            class="tw-border tw-rounded tw-p-6 tw-text-start hover:tw-shadow-lg tw-transition"
        >
            <img src="/assets/icons/index/plane.svg" alt="Стартапам" class="tw-mb-4" />
            <h3 class="tw-font-bold tw-text-lg tw-text-[#181236]">{{ $t('categories.startups_title') }}</h3>
            <p class="tw-mt-2 tw-text-[#181236]">{{ $t('categories.startups_text') }}</p>
        </div>

        <div
            data-aos="fade-up"
            data-aos-duration="1200"
            class="tw-border tw-rounded tw-p-6 tw-text-start hover:tw-shadow-lg tw-transition"
        >
            <img src="/assets/icons/index/building.svg" alt="Инвесторам" class="tw-mb-4" />
            <h3 class="tw-font-bold tw-text-lg tw-text-[#181236]">{{ $t('categories.investors_title') }}</h3>
            <p class="tw-mt-2 tw-text-[#181236]">{{ $t('categories.investors_text') }}</p>
        </div>

        <div
            data-aos="fade-up"
            data-aos-duration="1400"
            class="tw-border tw-rounded tw-p-6 tw-text-start hover:tw-shadow-lg tw-transition"
        >
            <img src="/assets/icons/index/briefcase.svg" alt="Корпорациям" class="tw-mb-4" />
            <h3 class="tw-font-bold tw-text-lg tw-text-[#181236]">{{ $t('categories.corporations_title') }}</h3>
            <p class="tw-mt-2 tw-text-[#181236]">{{ $t('categories.corporations_text') }}</p>
        </div>

        <div
            data-aos="fade-up"
            data-aos-duration="1600"
            class="tw-border tw-rounded tw-p-6 tw-text-start hover:tw-shadow-lg tw-transition"
        >
            <img src="/assets/icons/index/user-group.svg" alt="Специалистам" class="tw-mb-4" />
            <h3 class="tw-font-bold tw-text-lg tw-text-[#181236]">{{ $t('categories.specialists_title') }}</h3>
            <p class="tw-mt-2 tw-text-[#181236]">{{ $t('categories.specialists_text') }}</p>
        </div>
        </div>
    </section>
</template>
