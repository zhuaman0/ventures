<template>
	<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
		<div
			v-for="product in products"
			:key="product.id"
			class="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-4 hover:tw-shadow-lg tw-cursor-pointer"
			@click="$router.push(`/products/${product.id}`)"
		>
			<h2 class="tw-font-semibold tw-text-xl">{{ product.name }}</h2>
			<p class="tw-text-gray-600 tw-mt-2">{{ product.shortDescription }}</p>
			<p class="tw-text-[#228B6B] tw-font-medium tw-mt-2">Цена: {{ product.price }} ₸</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	products: any[]
}>()
</script>
