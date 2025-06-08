<template>
    <div class="tw-max-w-[1300px] tw-mx-auto tw-px-4 tw-my-8">
        <h1 class="tw-text-[#181236] tw-text-[32px] tw-font-normal tw-leading-[120%] tw-tracking-[0%] font-['Atyp_Display']">
            Статьи, новости и анонсы
        </h1>
        <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6 tw-my-6">
            <NewsCardNews
            :img="img1"
            date="01/10/2025"
            title="Инновационные тренды 2025: что следует ожидать"
            description="Наш аналитический отдел подготовил обзор самых горячих инновационных трен..."
            link="/news/DetailNewsfirst"
            />
            <NewsCardNews
            :img="img2"
            date="01/10/2025"
            title="Отчет о семинаре по стартап-финансированию"
            description="Приглашаем всех стартап-основателей и инвесторов на наш семинар..."
            link="/news/DetailNewssecond"
            />
            <NewsCardNews
            :img="img3"
            date="01/10/2025"
            title="Наш последний успешный инвесторский раунд!"
            description="Мы с гордостью объявляем о завершении нашего самого успешного раунда..."
            link="/news/DetailNewsthird"
            />
            <NewsCardNews
            :img="img4"
            date="01/10/2025"
            title="Наш венчурный эксперт в эфире о финансах стартапов"
            description="Наш главный эксперт по венчурным инвестициям будет гостем на радио..."
            link="/news/DetailNewsfour"
            />
        </div>
    </div>
</template>
    

<script setup>
import img1 from '@/assets/imgnews/Imagefirst.svg'
import img2 from '@/assets/imgnews/Imagesecond.svg'
import img3 from '@/assets/imgnews/Imagethird.svg'
import img4 from '@/assets/imgnews/Imagefour.svg'
</script>