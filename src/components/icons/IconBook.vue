<template>
    <svg v-if="isFilled" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 16">
        <path fill="currentColor" fill-opacity="1"
            d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
    </svg>

    <svg v-else width="1rem" height="1rem" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.625 0H4.375C3.32031 0 2.5 0.859375 2.5 1.875V18.75C2.5 19.7266 3.51562 20.3125 4.375 19.8438L10 16.5625L15.5859 19.8438C16.4453 20.3125 17.5 19.7266 17.5 18.75V1.875C17.5 0.859375 16.6406 0 15.625 0ZM15.625 17.6562L10 14.375L4.375 17.6562V2.10938C4.375 1.99219 4.45312 1.875 4.57031 1.875H15.3516C15.5078 1.875 15.625 1.99219 15.625 2.10938V17.6562Z"
            fill="currentColor" fill-opacity="1" />
    </svg>

</template>

<script setup>
const props = defineProps({
    isFilled: {
        type: Boolean,
        default: false
    }
})
</script>

<style></style>