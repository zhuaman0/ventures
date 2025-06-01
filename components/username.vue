<template>
  <v-menu offset-y transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        variant="text"
        class="tw-text-inherit tw-p-0 tw-normal-case tw-font-medium"
      >
        <div class="tw-flex tw-items-center tw-gap-1">
          <span>{{ userName }}</span>
          <v-icon size="20" class="tw-text-current">mdi-chevron-down</v-icon>
        </div>
      </v-btn>
</template>

    <v-card class="tw-rounded-lg tw-shadow-md tw-min-w-[200px] tw-py-1 tw-bg-white">
      <v-list density="compact" class="tw-py-0">
        <v-list-item class="tw-pointer-events-none tw-opacity-80 tw-min-h-[36px]">
          <v-list-item-title class="tw-text-xs tw-text-gray-500">
            {{ userEmail }}
          </v-list-item-title>
        </v-list-item>

        <v-divider class="tw-my-1"></v-divider>

        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          @click="handleItemClick(item.action)"
          class="tw-min-h-[36px] tw-cursor-pointer hover:tw-bg-gray-100 tw-transition-colors"
        >
          <template v-slot:prepend>
            <img 
              :src="getIconPath(item.icon)" 
              class="tw-w-5 tw-h-5 tw-mr-2" 
              :alt="item.title"
            />
          </template>
          <v-list-item-title class="tw-text-sm">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script setup>
import FrameCopy3 from '@/assets/icons/user/Frame_copy3.svg'
import FrameCopy2 from '@/assets/icons/user/Frame_copy2.svg'
import FrameCopy1 from '@/assets/icons/user/Frame_copy1.svg'

const props = defineProps({
  userName: {
    type: String,
    default: 'User Name'
  },
  userEmail: {
    type: String,
    default: 'daniyar.a@gmail.com'
  },
  menuItems: {
    type: Array,
    default: () => [
      { 
        title: 'Моя анкета', 
        action: 'profile',
        icon: 'Frame_copy3'
      },
      { 
        title: 'Профиль', 
        action: 'settings',
        icon: 'Frame_copy2'
      },
      { 
        title: 'Выйти', 
        action: 'logout',
        icon: 'Frame_copy1'
      }
    ]
  }
})

const icons = {
  Frame_copy3: FrameCopy3,
  Frame_copy2: FrameCopy2,
  Frame_copy1: FrameCopy1
}

const emit = defineEmits(['item-click'])

const getIconPath = (iconName) => {
  return icons[iconName]
}

const handleItemClick = (action) => {
  emit('item-click', action)
}
</script>

<style scoped>
  :deep(.v-list-item__prepend) {
    margin-right: 12px;
    margin-inline-end: 12px;
  }

  :deep(.v-btn__content) {
    display: flex;
    align-items: center;
  }
</style>