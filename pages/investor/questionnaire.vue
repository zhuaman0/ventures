<template>
	<div>
		<InvestorAnketa v-if="role === 'Investor'"/>
		<StartupAnketa v-if="role === 'Startup'"/>
	</div>
</template>

<script setup lang="ts">
const role = localStorage.getItem('role')
</script>

<style scoped>

</style>