<template>
    <div class="container">
        <div class="breadcrumbs mb-10 text-sm">
            <ul>
                <li><a>Home</a></li>
                <li class="text-graydark/50"><a>Writer</a></li>
            </ul>
        </div>
        <!-- cover & writer info  -->
        <div class="bg-graylight p-3 rounded-2xl">
            <!-- cover -->
            <div class="mb-4">
                <img src="/src/assets/images/remove/cover.jpg" class="w-full rounded-xl h-[150px] object-cover" alt="">
            </div>
            <!-- writer info desktop -->
            <div class="hidden lg:flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <img class="w-20 aspect-square rounded-xl" src="/src/assets/images/remove/avatar3.jpg" alt="">
                    <h3>Develepbek Developiriddinov</h3>
                </div>

                <ul class="writer-info">
                    <li> <icon-star /> rate : 4.2 </li>
                    <li> <icon-user /> follower : 1.2 k </li>
                    <li> <icon-post /> post : 29 </li>
                </ul>

                <button class="btn bg-mainpink/75 text-white">
                    <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.6875 7.75C13.6875 8.24219 13.2773 8.65234 12.8125 8.65234H8.875V12.5898C8.875 13.0547 8.46484 13.4375 8 13.4375C7.50781 13.4375 7.125 13.0547 7.125 12.5898V8.65234H3.1875C2.69531 8.65234 2.3125 8.24219 2.3125 7.75C2.3125 7.28516 2.69531 6.90234 3.1875 6.90234H7.125V2.96484C7.125 2.47266 7.50781 2.0625 8 2.0625C8.46484 2.0625 8.875 2.47266 8.875 2.96484V6.90234H12.8125C13.2773 6.875 13.6875 7.28516 13.6875 7.75Z"
                            fill="white" />
                    </svg>
                    <span>Follow</span>
                </button>
            </div>
            <!-- info mobile & tablet -->
            <div class="flex gap-4  items-center">
                <div>
                    <img class="w-20 aspect-square rounded-xl" src="/src/assets/images/remove/avatar3.jpg" alt="">
                </div>
                <div>
                    <h3>Develepbek Developiriddinov</h3>
                    <ul class="flex gap-5 mt-2">
                        <li class="flex gap-1 items-center text-graydark/75">
                            <icon-star />
                            <span class="hidden sm:block">rate: </span>4.2
                        </li>
                        <li class="flex gap-1 items-center text-graydark/75">
                            <icon-user />
                            <span class="hidden sm:block">follower: </span> 1.2k
                        </li>
                        <li class="flex gap-1 items-center text-graydark/75">
                            <icon-post />
                            <span class="hidden sm:block">post: </span> 29
                        </li>
                    </ul>
                </div>

                <button class="btn  bg-mainpink/75 text-white ml-auto">
                    <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.6875 7.75C13.6875 8.24219 13.2773 8.65234 12.8125 8.65234H8.875V12.5898C8.875 13.0547 8.46484 13.4375 8 13.4375C7.50781 13.4375 7.125 13.0547 7.125 12.5898V8.65234H3.1875C2.69531 8.65234 2.3125 8.24219 2.3125 7.75C2.3125 7.28516 2.69531 6.90234 3.1875 6.90234H7.125V2.96484C7.125 2.47266 7.50781 2.0625 8 2.0625C8.46484 2.0625 8.875 2.47266 8.875 2.96484V6.90234H12.8125C13.2773 6.875 13.6875 7.28516 13.6875 7.75Z"
                            fill="white" />
                    </svg>
                    <span>Follow</span>
                </button>
            </div>
        </div>
        <!-- post card pagination -->
        <div>
            <posts-pageable-component :layout="activeLayout" />
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import IconUser from '@/components/icons/IconUser.vue';
import IconStar from '@/components/icons/IconStar.vue';
import IconPost from '@/components/icons/IconPost.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import PostsPageableComponent from '@/components/PostsPageableComponent.vue';

const activeLayout = ref('vertical')
const screenWidth = ref(window.innerWidth);
onMounted(() => {
    if (screenWidth.value > 540 && screenWidth.value < 780) {
        activeLayout.value = 'horizontal'
    }
})
</script>

<style scoped>
.writer-info {
    display: flex;
    align-items: center;
    gap: 4rem;
    color: #3e3232bc;

}

.writer-info>li {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}
</style>