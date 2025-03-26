<template>
    <nav class="container relative flex items-center py-10">
        <router-link to="/">
            <h1 class="font-roboto text-3xl font-semibold italic text-main">Hunarmand</h1>
        </router-link>
        <ul class="ml-16 flex items-center gap-4">
            <div>
                <button tabindex="0" role="button" @click="toggle('categories')" class="link-custom"
                    :data-active="dropdowns.categories">
                    Categories
                    <arrow :is-open="dropdowns.categories" />
                </button>
            </div>
        </ul>
        <transition name="fade">
            <div v-show="dropdowns.categories" tabindex="0" class="absolute left-0 top-[80%] w-full menu bg-base-100 rounded-4xl z-4 p-4 shadow-sm 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="categoryItem in categoriesDatas" :key="categoryItem.img"
                    class="flex flex-col justify-center md:flex-row md:items-center gap-4">
                    <div class="h-full max-w-100 max-h-100 aspect-[1/1] gap-8">
                        <img loading="lazy" :src="categoryItem.img"
                            class="rounded-4xl w-full h-full object-cover object-center" />
                    </div>
                    <div class="h-full flex flex-col justify-evenly">
                        <div class="flex items-center gap-2 h-4">
                            <div class="rounded-md h-[80%] w-1.5 bg-main"></div>
                            <h2 class="text-xl font-medium">{{ categoryItem.title }}</h2>
                        </div>
                        <div class="flex flex-col gap-3.5">
                            <p v-for="itemLink in categoryItem.links" :key="itemLink"
                                class="text-lg font-medium text-maingray transition-all duration-600 ease-in-out hover:text-main hover:active:text-maingray cursor-pointer">
                                {{ itemLink }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup lang="ts">
import porsche from "@/assets/images/porsche.png";
import vr from "@/assets/images/vr.png";
import { inject, reactive, type Ref } from 'vue';
import Arrow from './icons/Arrow.vue';

const theme = inject('theme') as Ref<string>;
const toggleTheme = inject('toggleTheme') as () => void;

const dropdowns = reactive({
    categories: false,
});

function toggle(dropdown: keyof typeof dropdowns) {
    dropdowns[dropdown] = !dropdowns[dropdown];
}

interface CategoryData {
    img: string;
    title: string;
    links: string[];
}

const categoriesDatas: Array<CategoryData> = [
    {
        img: porsche,
        title: 'Car',
        links: ['Car News', 'Car Articles', 'Car Prices', 'Car Video'],
    },
    {
        img: vr,
        title: 'Car',
        links: ['Car News', 'Car Articles', 'Car Prices', 'Car Video'],
    }
];

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>