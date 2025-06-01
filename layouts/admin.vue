<template>
  <div class="tw-flex tw-min-h-screen">
    <AdminSidebar />

    <div class="tw-flex-1 tw-bg-gray-50">
      <AdminHeader />
      <main class="tw-p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
  import AdminSidebar from '@/components/Adminpanel/AdminSidebar.vue'
  import AdminHeader from '@/components/Adminpanel/AdminHeader.vue'
</script>
