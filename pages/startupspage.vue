<script setup>
    import StartupCard from '/components/Startup/StartupCard.vue'
    import StartupFilter from '/components/Startup/StartupFilter.vue'
    
    const startups = [
        {
        logo: '/assets/image/image 7.svg',
        name: 'Ubex',
        description: 'Повышаем эффективность рекламы за счёт современных технологий',
        tags: ['AdTech & MarTech', 'Media'],
        },
        {
        logo: 'https://via.placeholder.com/40x40',
        name: 'UMAP',
        description: 'Решение для навигации и ориентирования в помещениях',
        tags: ['Computer Vision', 'AudioTech'],
        },
    ]
    
    const industries = [
        'AdTech & MarTech',
        'Media',
        'Computer Vision',
        'AudioTech',
    ]
</script>
    
<template>
    <div class="tw-min-h-screen tw-bg-gray-50 tw-p-6">
        <div class="tw-flex tw-gap-6">
            <StartupFilter :industries="industries" />
    
            <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-flex-1">
            <StartupCard
                v-for="startup in startups"
                :key="startup.name"
                :logo="startup.logo"
                :name="startup.name"
                :description="startup.description"
                :tags="startup.tags"
            />
            </div>
        </div>
    </div>
</template>