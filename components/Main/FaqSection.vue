<script setup>
    import { ref } from 'vue'
    
    const activeIndex = ref(null)
    
    const toggleFAQ = (index) => {
        activeIndex.value = activeIndex.value === index ? null : index
    }
    
    const faqItems = [
        {
        question: 'Каковы сроки получения ответа на инвестиционное предложение?',
        answer: 'Мы стараемся рассмотреть каждое предложение внимательно, но сроки ответа могут варьироваться в зависимости от загруженности. Обычно мы стараемся ответить в течение нескольких недель.',
        },
        {
        question: 'Какие требования вы предъявляете к стартапам для инвестиций?',
        answer: 'Мы ищем инновационные проекты с сильной командой, четкой бизнес-моделью и потенциалом масштабирования.',
        },
        {
        question: 'Есть ли у вас минимальная или максимальная сумма инвестиций?',
        answer: 'Минимальная сумма инвестиций составляет $50,000. Максимальная сумма зависит от потенциала проекта.',
        },
        {
        question: 'Какие виды поддержки вы предоставляете стартапам после инвестиции?',
        answer: 'Мы предоставляем финансовую поддержку, менторство, доступ к нашей сети контактов и операционную помощь.',
        },
        {
        question: 'Как связаться с вашей компанией для дополнительных вопросов?',
        answer: 'Вы можете написать нам на email: contact@example.com или позвонить по телефону: +7 (XXX) XXX-XX-XX.',
        },
    ]
</script>
    
<template>
    <div class=" tw-py-12 tw-px-0 sm:tw-px-6 lg:tw-px-10">
        <div class="tw-max-w-[1250px] tw-mx-auto">
            <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-8">
            <div class="tw-w-full lg:tw-w-1/2">
                <h2 class="tw-text-[40px] tw-leading-[40px] tw-font-bold tw-mb-6 tw-text-[#181236]">Часто задаваемые <br/> вопросы</h2>
                <p class="tw-text-[#181236] tw-mb-8 tw-text-[16px] tw-leading-[24px]">
                    Если вы не нашли ответа на свой вопрос, то можете <br/> написать в нашу службу поддержки
                </p>
                <h4 
                    class="tw-border tw-border-[#228B6B] tw-text-[#228B6B] tw-font-semibold tw-text-[14px] tw-px-5 tw-py-3 tw-bg-white tw-inline-block" 
                    type="button">
                    Написать в службу поддержки
                </h4>
            </div>
            
            <div class="tw-w-full lg:tw-w-1/2">
                <div class="tw-space-y-4">
                <div 
                    v-for="(item, index) in faqItems"
                    :key="index"
                    class=" tw-overflow-hidden"
                >
                    <button
                    @click="toggleFAQ(index)"
                    class="tw-w-full tw-flex tw-justify-between tw-items-center tw-p-4 tw-bg-[#E7FFF7] tw-cursor-pointer"
                    >
                    <h3 class="tw-font-semibold tw-text-[16px] tw-leading-[24px] tw-text-[#181236] tw-text-left">
                        {{ item.question }}
                    </h3>
                    <span class="tw-text-2xl tw-text-[#228B6B] tw-ml-4">
                        {{ activeIndex === index ? '×' : '+' }}
                    </span>
                    </button>
                    
                    <div 
                    v-show="activeIndex === index"
                    class="tw-px-4 tw-pb-4 tw-pt-1 tw-bg-[#E7FFF7]"
                    >
                    <p class="tw-text-[14px] tw-leading-[20px] tw-text-[#6C757D]">
                        {{ item.answer }}
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
    