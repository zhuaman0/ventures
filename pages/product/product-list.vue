<template>
	<div class="tw-max-w-7xl tw-mx-auto tw-mt-[20px] tw-mb-[90px]">
		<RouteRouterPath :breadcrumbs="breadcrumbs"/>
		<h1 class="tw-font-bold tw-text-[32px] tw-my-[15px]">Стартапы</h1>
		<span class="tw-font-[400] tw-text-[16px] tw-text-[#767A87] tw-leading-[120%]">Всего 3245 стартапов</span>
		<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-4 tw-gap-4 tw-pt-7 tw-mb-10">
			<div class="tw-hidden sm:tw-block tw-bg-white tw-w-full tw-py-4 tw-px-6">
				<h1 class="tw-font-[500] tw-text-[20px] tw-leading-[120%] tw-text-black">Филтрь</h1>
				<div class="tw-my-[20px]">
					<span class="tw-text-[#1811236] tw-font-[400] tw-text-[16px]">
						Индустрии
						<ul>
							<li>
								<v-checkbox label="Checkbox"></v-checkbox>
							</li>
						</ul>
					</span>
				</div>
			</div>
			<div class="tw-col-span-3">
				<div class="tw-flex tw-items-center tw-bg-white tw-px-4 tw-py-2 tw-mb-[20px] tw-cursor-pointer lg:flex">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5ZM10.5 2.25C5.94365 2.25 2.25 5.94365 2.25 10.5C2.25 15.0563 5.94365 18.75 10.5 18.75C12.5082 18.75 14.3488 18.0325 15.7794 16.8398L20.4699 21.5304C20.7628 21.8233 21.2377 21.8233 21.5306 21.5304C21.8235 21.2375 21.8235 20.7626 21.5306 20.4697L16.8401 15.7792C18.0326 14.3486 18.75 12.5081 18.75 10.5C18.75 5.94365 15.0563 2.25 10.5 2.25Z" fill="#919191"></path></svg>
					<input type="text" placeholder="Поиск" class="tw-w-full tw-h-[56px] focus:tw-outline-none tw-text-[16px] tw-text-[#767A87]">
				</div>
				<div class="tw-mb-[20px]">
					<ul>
						<li class="tw-bg-[#E7E4FF] tw-flex tw-items-center tw-max-w-[119px] tw-py-[4px] tw-pr-[8px] tw-pl-[8px]">
							<span>AudioTech</span>
							<img src="/assets/icons/back.svg" alt="">
						</li>
					</ul>
				</div>
				<div class="">
					<DetailItem/>
				</div>
				<div class="tw-bg-white tw-w-full tw-py-4 tw-px-4 tw-flex tw-items-center">
					<div>
						<h1 class="tw-font-[600] tw-text-[24px]">Полный список участников будет доступен после регистрации на площадке</h1>
						<button class="tw-bg-[#228B6B] tw-text-white tw-py-[16px] tw-px-[72px] tw-mt-4">Присоединиться</button>
					</div>
					<img src="/assets/img/access.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'default',
	name: 'detail'
})
const breadcrumbs = [ 
	{ 
		title: 'Главная',
		disabled: false,
		href: '/'
	},
	{
		title: 'Найти стартап',
		disabled: true,
    	href: '/auth/login/' 
	}
]
</script>

<style scoped>

</style>