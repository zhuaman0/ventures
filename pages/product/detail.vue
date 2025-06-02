<template>
	<div class="tw-max-w-4xl tw-mx-auto tw-py-10">
		<h1 class="tw-text-3xl tw-font-bold">{{ product?.name }}</h1>
		<p class="tw-mt-4">{{ product?.description }}</p>
		<p class="tw-mt-2 tw-text-green-600">Цена: {{ product?.price }} ₸</p>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref<any>(null)

const fetchProduct = async () => {
	const res = await fetch(`https://zhervc-api.azurewebsites.net/api/Startups/${route.params.id}`)
	product.value = await res.json()
}

onMounted(() => {
	fetchProduct()
})
</script>
