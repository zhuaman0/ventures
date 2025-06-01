    <template>
        <li>
        <NuxtLink
            :to="to"
            class="tw-relative tw-flex tw-items-center tw-gap-3 tw-py-3 tw-px-4 tw-rounded-lg tw-transition-all tw-duration-300"
            :class="[
            active
                ? 'tw-bg-[#2A9E7E]'
                : 'hover:tw-bg-[#2A9E7E]/70 tw-opacity-80 hover:tw-opacity-100',
            props.class
            ]"
        >
            <div
            class="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-1.5 tw-rounded-r-full tw-bg-[#00FFC2] tw-transition-all"
            :class="{ 'tw-opacity-100': active, 'tw-opacity-0': !active }"
            />
    
            <img :src="icon" class="tw-w-5 tw-h-5" />
            <span class="tw-text-lg tw-font-medium">{{ text }}</span>
    
            <span class="tw-ml-auto tw-text-white" v-if="active">
            ⋮
            </span>
        </NuxtLink>
        </li>
    </template>
    
    <script setup>
    const props = defineProps({
        to: String,
        icon: String,
        text: String,
        active: Boolean,
        class: {
        type: String,
        default: ''
        }
    })
    </script>
    