<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import UserInvestor from '~/components/Adminpanel/UserInvestor.vue'

const { t } = useI18n()

useHead({
  title: t('admin.metaTitle'),
  meta: [
    {
      name: 'description',
      content: t('admin.metaDescription')
    }
  ]
})

definePageMeta({
  layout: 'admin',
  middleware: 'admin'
})

</script>


<template>
  <div class="tw-mt-6">
    <UserInvestor />
  </div>
</template>
