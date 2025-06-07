<template>
	<div>
	  <ul>
		<li @click="detailPageRouter(product.organizationName)" v-for="product in products" :key="product.id" class="tw-bg-white tw-w-full tw-px-4 tw-py-5 tw-flex tw-mb-[20px] tw-items-start">
		  <img class="tw-w-[163px] tw-h-[61px]" :src="getImageUrl(product.logoPath)" alt="">
		  <div class="tw-ml-[20px]">
			<h1 class="tw-font-[600] tw-text-[20px] tw-leading-[120%] tw-mb-4">{{ product.publicName }}</h1>
			<p class="tw-font-[400] tw-mb-4">
			  {{ product.countryName }}
			</p>
			<ul class="tw-flex tw-items-center tw-mb-[20px]">
			  <li class="tw-border-[1px] tw-border-[#B9B11FC] tw-py-[4px] tw-px-[16px] tw-mr-3">
				{{ product.developmentStage }}
			  </li>
			  <li class="tw-border-[1px] tw-border-[#B9B11FC] tw-py-[4px] tw-px-[16px]">
					{{ product.organizationName }}
			</li>
			</ul>
			<div class="tw-flex tw-items-center">
			  <span class="tw-text-[#228B6B] tw-font-[400] tw-text-[16px]">Подробнее</span>
			  <Icon class="tw-text-[#228B6B] tw-text-[26px]" name="material-symbols-light:chevron-right" />
			</div>
		  </div>
		</li>
	  </ul>
	</div>
  </template>
  

<script setup lang="ts">
const router = useRouter()
interface Product {
  id: number;
  publicName: string;
  organizationName: string;
  countryName: string;
  developmentStage: string;
  logoPath: string;
}
defineProps<{
	products: Product[];
}>()

const getImageUrl = (imagePath: string) => {
  return `https://zhervc-api.azurewebsites.net/${imagePath}`;
};

const detailPageRouter = (organizationName: string) => {
	router.push(`/product/${organizationName}`)
}
</script>

<style scoped>

</style>