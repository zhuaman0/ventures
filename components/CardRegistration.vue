<template>
	<div>
		<ul class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4 tw-mt-[15px] tw-max-w-[900px]">
			<li v-for="(card, index) in cards" :key="index" class="tw-bg-white tw-p-7">
					<img class="tw-mb-[10px]" :src="card.img" :alt="card.title">
					<h1 class="tw-text-[24px] tw-font-[600] tw-mb-[10px]">{{ card.title }}</h1>
					<p class="tw-text-[16px] tw-leading-[20px] tw-mb-[10px]">{{ card.para }}</p>
					<div class="tw-border-[2px] tw-border-[#36CE9F] tw-w-[220px] tw-h-[50px]">
						<button
							class="tw-text-[#36CE9F] tw-font-[600] tw-p-2 tw-w-full tw-h-full"
							@click="typeOfRegistration(card.title)"
						>
							Зарегистрироваться
						</button>
						</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	cards: {
		img: string,
		title: string,
		para: string,
		link: string
	}[]
}>()

const emit = defineEmits(['typeRegistration'])
const router = useRouter();

const typeOfRegistration = (type: string) => {
	router.push({ path: '/auth/registration', query: { type } })
}
</script>

<style scoped>

</style>