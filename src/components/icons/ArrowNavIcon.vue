<template>
    <svg :class="props.direct" :style="svgStyle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 18C9.71875 18 9.46875 17.9062 9.28125 17.7188C8.875 17.3438 8.875 16.6875 9.28125 16.3125L13.5625 12L9.28125 7.71875C8.875 7.34375 8.875 6.6875 9.28125 6.3125C9.65625 5.90625 10.3125 5.90625 10.6875 6.3125L15.6875 11.3125C16.0938 11.6875 16.0938 12.3438 15.6875 12.7188L10.6875 17.7188C10.5 17.9062 10.25 18 10 18Z"
            fill="currentColor" />
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    size?: 'base' | 'large' | 'small';
    direct?: 'left' | 'right';
}>();

const svgSizeMap = {
    base: 1.5,
    large: 1.875,
    small: 1.125
};

const svgStyle = computed(() => ({
    width: `${svgSizeMap[props.size || 'base']}rem`,
    height: `${svgSizeMap[props.size || 'base']}rem`
}));
</script>

<style>
.left {
    rotate: 180deg;
}

.right {
    rotate: 0;
}
</style>
