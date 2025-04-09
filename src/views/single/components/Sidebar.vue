<template>
    <aside class="relative ">
        <div class="lg:sticky top-0 right-0 h-fit w-full space-y-6">
            <div class=" sm:flex lg:block gap-6 ">
                <div class="sm:w-2/3 lg:w-full">
                    <div class="grid grid-cols-3 lg:flex gap-2 mb-6 w-full">
                        <button class="btn text-graydark/50 grid-span-1 lg:w-fit  ">
                            <icon-share />
                            <span class="text-graydark/75">Share </span>
                        </button>
                        <button class="btn text-graydark/50 grid-span-1 lg:w-fit ">
                            <icon-book />
                            <span class="text-graydark/75">Mark</span>
                        </button>
                        <button class="btn text-graydark/50 grid-span-1 lg:w-fit ">
                            <icon-comment />
                            <span class="text-graydark/75">Comment</span>
                        </button>
                    </div>
                    <div class="rounded-xl flex gap-3 p-4 bg-graylight mb-6 sm:mb-0 lg:mb-6">
                        <img src="@/assets/images/remove/avatar1.jpg" class="rounded-xl w-[5.5rem] aspect-square"
                            alt="">
                        <div class="w-full">
                            <div class="flex items-center">
                                <router-link to="/writer">
                                    <h3 class="font-semibold my-2 text-lg">Louis Hoebregs</h3>
                                </router-link>
                                <div class="text-sm ml-auto text-right text-graydark/75">27 posts</div>
                            </div>
                            <button class="btn text-white bg-[#F81539BF]">+ Follow</button>
                        </div>
                    </div>
                </div>

                <div class="sm:w-1/3 lg:w-full bg-graylight p-4 rounded-xl">
                    <h3 class="section-title">Tags</h3>
                    <ul class="flex flex-wrap gap-1">
                        <li v-for="(item, index) in tags" :key="index" class="text-graydark/75 mr-2">{{ item }}</li>
                    </ul>
                </div>
            </div>

            <div class=" bg-graylight space-y-5 p-4 rounded-xl">
                <h3 class="section-title">Top Posts</h3>
                <div v-for="item in topPosts" :key="item.id" class="flex gap-2 items-center ">
                    <img :src="item.image" class="w-[5.5rem] h-auto aspect-square rounded-xl object-cover" alt="">
                    <div class="">
                        <h4 class="text-graydark font-semibold truncate-text">{{ item.title }}</h4>
                        <p class="text-graydark/50 text-sm">Subhead </p>
                    </div>
                </div>
            </div>
        </div>

    </aside>
</template>

<script setup>
import IconShare from '@/components/icons/IconShare.vue'
import IconBook from '@/components/icons/IconBook.vue'
import IconComment from '@/components/icons/IconComment.vue'


import yoga from '@/assets/images/remove/yoga.jpg'
import frog from '@/assets/images/remove/frog.jpg'
import dancegirl from '@/assets/images/remove/dancegirl.jpg'
import porsh from '@/assets/images/remove/porsh.jpg'

const tags = [
    'montenegro', 'visit croatia', 'luxury travel', 'travel', 'Paradise island', 'Self study'
]

const topPosts = [
    {
        id: 1,
        title: "How to Spend the Perfect Day on Croatia's Most Magical Island",
        image: frog,
        date: '2023-07-20'
    },
    {
        id: 1,
        title: "How to Spend the Perfect Day on Croatia's Most Magical Island",
        image: yoga,
        date: '2023-07-20'
    },
    {
        id: 1,
        title: "How to Spend the Perfect Day on Croatia's Most Magical Island",
        image: dancegirl,
        date: '2023-07-20'
    },
    {
        id: 1,
        title: "How to Spend the Perfect Day on Croatia's Most Magical Island",
        image: porsh,
        date: '2023-07-20'
    }
]

const categories = [
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Business' },
    { id: 3, name: 'Sports' },
    { id: 4, name: 'Entertainment' }
]
</script>

<style scoped>
.sidebar-section {
    margin-bottom: 30px;
}

.sidebar-title {
    font-size: 1.2rem;
    margin-bottom: 15px;
    font-weight: bold;
}

.sidebar-list {
    list-style: none;
    padding: 0;
}

.sidebar-item {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.sidebar-image {
    width: 80px;
    height: 60px;
    object-fit: cover;
}

.sidebar-content h4 {
    font-size: 0.9rem;
    margin: 0 0 5px 0;
}

.date {
    font-size: 0.8rem;
    color: #666;
}

.categories-list {
    list-style: none;
    padding: 0;
}

.categories-list li {
    margin-bottom: 10px;
}

.categories-list a {
    color: #333;
    text-decoration: none;
}

.categories-list a:hover {
    color: #007bff;
}
</style>