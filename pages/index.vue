<script setup>
const { locales, setLocale } = useI18n();
</script>

<template>
  <div>
	<h1 class="tw-text-center">qewr</h1>
	<h1 class="muha">adf</h1>
	<button v-for="locale in locales" @click="setLocale(locale.code)">
		{{ locale.name }}
	</button>
	<h1>{{ $t('welcome') }}</h1>
  </div>
</template>

<style lang="scss">
.muha {
	background-color: $primary;
	color: $secondary;
}
</style>