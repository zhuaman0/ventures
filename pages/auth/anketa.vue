<template>
	<div class="tw-py-4 tw-px-4 tw-max-w-[1300px] tw-mx-auto">
		<div>
			<h1 class="tw-text-center tw-text-[#181236] tw-font-[600] tw-text-[32px]">Анкета</h1>
					<div class="tw-bg-white tw-flex-col tw-items-center tw-relative tw-max-w-[530px] tw-mx-auto tw-my-[30px]">
			<div class="tw-px-4 tw-py-4 tw-w-full">
				<StartupFormStartup v-if="role === 'Startup'"/>
				<InvestorFormInvvestor v-else-if="role === 'Investor'"/>
			</div>
		</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { StartupFormStartup } from '#components';
import FormRegistration from '~/components/FormRegistration.vue';
const role = ref(localStorage.getItem('role'))
</script>

<style scoped>

</style>