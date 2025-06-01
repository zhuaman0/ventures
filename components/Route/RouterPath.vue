<template>
	<div>
		<v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	breadcrumbs: {
		title: string,
		disabled: boolean,
		href?: string
	}[]
}>()
</script>

<style scoped>

</style>