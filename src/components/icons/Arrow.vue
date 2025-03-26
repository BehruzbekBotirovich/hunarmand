<template>
    <svg class="w-5 h-5 transform transition-transform ease-in-out duration-500 stroke-gray-500"
        :class="{ '-rotate-180': $props.isOpen }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
    isOpen: boolean
}>();
</script>