<template>
	<footer class="tw-bg-[#228B6B] tw-text-white tw-py-10 tw-px-6">
		<div class="tw-max-w-7xl tw-mx-auto tw-w-full">
		
		<div class="tw-flex tw-flex-col lg:tw-flex-row md:tw-flex-row tw-justify-between tw-space-y-8 md:tw-space-y-0">
			<div class="tw-space-y-4">
			<div class="tw-text-xl tw-font-bold">
			<img src="@/assets/icons/footer_logo.svg" alt="">
			</div>
		</div>

		<div class="tw-flex tw-flex-wrap tw-gap-5 tw-text-sm tw-font-bold">
			<NuxtLink to="/" class="hover:tw-underline">{{ $t('footer.startups') }}</NuxtLink>
			<NuxtLink to="/" class="hover:tw-underline">{{ $t('footer.corporations') }}</NuxtLink>
			<NuxtLink to="/" class="hover:tw-underline">{{ $t('footer.investors') }}</NuxtLink>
			<NuxtLink to="/" class="hover:tw-underline">{{ $t('footer.specialists') }}</NuxtLink>
			<NuxtLink to="/" class="hover:tw-underline">{{ $t('footer.news') }}</NuxtLink>
		</div>

			<div class="tw-flex tw-space-x-4">
				<a href="#"><img src="/assets/icons/social/Facebook.svg" alt="Facebook" /></a>
				<a href="#"><img src="/assets/icons/social/Instagram.svg" alt="Instagram" /></a>
				<a href="#"><img src="/assets/icons/social/Youtube.svg" alt="YouTube" /></a>
			</div>
		</div>

		<div class="tw-flex lg:tw-flex-row md:tw-flex-col tw-space-y-8 md:tw-space-y-0 tw-mt-5">
			<p class="tw-text-sm tw-leading-snug tw-max-w-xs tw-font-normal">
				{{ $t('footer.description') }}
			</p>
		</div>

		<hr class="tw-my-6 tw-border-white/30" />

		<div class="tw-flex sm:tw-flex-row tw-flex-col lg:tw-flex-row tw-justify-center tw-gap-5 tw-text-sm tw-text-white/80">
			<p>{{ $t('footer.copyright') }}</p>
			<NuxtLink @click="supportMessage" to="/" class="hover:tw-underline">{{ $t('footer.privacy') }}</NuxtLink>
		</div>
		</div>
		<HelpMennager @onClick="confirmedButton" v-if="supportModal"/>
	</footer>
</template>


<script setup lang="ts">
const supportModal = ref(false)
const supportMessage = () => {
	supportModal.value = true
}

const confirmedButton = () => {
	supportModal.value = false
}
</script>
