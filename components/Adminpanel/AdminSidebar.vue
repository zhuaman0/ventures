<template>
    <div class="tw-w-64 tw-bg-[#228B6B] tw-text-white tw-min-h-screen tw-py-6 tw-px-4">
      <h2 class="tw-text-3xl tw-font-bold tw-mb-12">{{ t('admin.sidebarTitle') }}</h2>
      <ul class="tw-space-y-2">
        <li
          v-for="item in navItems"
          :key="item.to"
          :class="[
            'tw-relative tw-flex tw-items-center tw-gap-3 tw-py-3 tw-pl-5 tw-pr-4 tw-rounded-lg tw-transition-all tw-duration-300 tw-group',
            route.path === item.to
              ? 'tw-bg-[#2A9E7E]'
              : 'hover:tw-bg-[#2A9E7E]/70 tw-opacity-90 hover:tw-opacity-100',
            item.extraClass || ''
          ]"
        >
          <span
            class="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-1.5 tw-rounded-r-full tw-bg-[#00FFC2] tw-transition-opacity"
            :class="{ 'tw-opacity-100': route.path === item.to, 'tw-opacity-0': route.path !== item.to }"
          />
          <img :src="item.icon" class="tw-w-5 tw-h-5" />
          <NuxtLink :to="item.to" @click="sideBarItem(item.text)" class="tw-text-lg tw-font-medium tw-truncate">
            {{ t(item.text) }}
          </NuxtLink>
          <span class="tw-ml-auto tw-text-white">⋮</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'

  import iconUsers from '@/assets/imgadmin/usersicon.svg'
  import iconStartups from '@/assets/imgadmin/startups.svg'
  import iconInvestors from '@/assets/imgadmin/investors.svg'
  import iconBack from '@/assets/imgadmin/back.svg'
import { useServiceStore } from '~/stores/services'
  const serviceStore = useServiceStore();
  
  const { t } = useI18n()
  const route = useRoute()
  const router = useRouter()
  
  const navItems = [
      {
      to: '/admin/',
      icon: iconUsers,
      text: 'Пользователи'   
    },
    {
      to: '/admin/startupusers',
      icon: iconStartups,
      text: 'Стартапы'
    },
    {
      to: '/admin/investorusers',
      icon: iconInvestors,
      text: 'Инвесторы'
    },
    {
      to: '/auth/login',
      icon: iconBack,
      text: 'Выйти'
    }
  ]

  const sideBarItem = (item) => {
	if(item === 'Выйти') {
		serviceStore.clearUser()
    router.push('/auth/login')
	}
  }
  </script>
