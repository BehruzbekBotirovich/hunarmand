<template>
    <div class="container">
        <nav class="breadcrumbs mb-10 text-sm">
            <ul>
                <li><a href="#">Home</a></li>
                <li class="text-graydark/50"><a href="#">Sport</a></li>
            </ul>
        </nav>

        <nav class="flex justify-between items-center bg-graylight py-1 pr-1 pl-4 rounded-2xl mb-10">
            <ul class="flex items-center gap-4 ">
                <li :class="{ 'text-mainpink': activeTab === 'New' }" @click="activeTab = 'New'">New</li>
                <li :class="{ 'text-mainpink': activeTab === 'Trendy' }" @click="activeTab = 'Trendy'">Trendy</li>
                <li :class="{ 'text-mainpink': activeTab === 'Popular' }" @click="activeTab = 'Popular'">Popular</li>
            </ul>

            <div class="flex gap-2">
                <button @click="activeLayout = 'horizontal'"
                    :class="{ 'bg-graydark/10': activeLayout === 'horizontal' }" class="btn btn-ghost">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.5 2C0.5 1.1875 1.15625 0.5 2 0.5C2.8125 0.5 3.5 1.1875 3.5 2C3.5 2.84375 2.8125 3.5 2 3.5C1.15625 3.5 0.5 2.84375 0.5 2ZM15 1C15.5312 1 16 1.46875 16 2C16 2.5625 15.5312 3 15 3H6C5.4375 3 5 2.5625 5 2C5 1.46875 5.4375 1 6 1H15ZM15 6C15.5312 6 16 6.46875 16 7C16 7.5625 15.5312 8 15 8H6C5.4375 8 5 7.5625 5 7C5 6.46875 5.4375 6 6 6H15ZM15 11C15.5312 11 16 11.4688 16 12C16 12.5625 15.5312 13 15 13H6C5.4375 13 5 12.5625 5 12C5 11.4688 5.4375 11 6 11H15ZM0.5 12C0.5 11.1875 1.15625 10.5 2 10.5C2.8125 10.5 3.5 11.1875 3.5 12C3.5 12.8438 2.8125 13.5 2 13.5C1.15625 13.5 0.5 12.8438 0.5 12ZM3.5 7C3.5 7.84375 2.8125 8.5 2 8.5C1.15625 8.5 0.5 7.84375 0.5 7C0.5 6.1875 1.15625 5.5 2 5.5C2.8125 5.5 3.5 6.1875 3.5 7Z"
                            fill="currentColor" />
                    </svg>
                </button>
                <button @click="activeLayout = 'vertical'" :class="{ 'bg-graydark/10': activeLayout === 'vertical' }"
                    class="btn btn-ghost">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
                        <circle cx="7" cy="7" r="1.5" fill="currentColor" />
                        <circle cx="17" cy="17" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="17" r="1.5" fill="currentColor" />
                        <circle cx="7" cy="17" r="1.5" fill="currentColor" />
                        <circle cx="17" cy="12" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                        <circle cx="7" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                </button>
            </div>
        </nav>

        <div>
            <h3 class="section-title mb-8">Category: Sport</h3>
            <posts-pageable-component :layout="activeLayout" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PostsPageableComponent from '@/components/PostsPageableComponent.vue';

const activeLayout = ref('horizontal');
const activeTab = ref('New');
const screenWidth = ref(window.innerWidth);
onMounted(() => {
    if (screenWidth.value > 540 && screenWidth.value < 780) {
        activeLayout.value = 'horizontal'
    }
})

</script>
<style scoped>
nav>ul>li {
    cursor: pointer;
}
</style>