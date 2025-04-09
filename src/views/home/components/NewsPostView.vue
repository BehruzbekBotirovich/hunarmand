<template>
    <!-- desktop -->
    <posts-carousel-component :data="store.posts" title="News Posts" layout="horizontal" class="hidden md:block" />
    <!-- tablet & mobile -->
    <div class="md:hidden container">
        <h3 class="section-title py-10">News Posts</h3>
        <div class="flex flex-col gap-6">
            <post-card-component v-for="item in store.posts" :key="item.id" :post="item" layout="horizontal" />
        </div>
    </div>
</template>

<script setup>
import PostsCarouselComponent from '@/components/PostsCarouselComponent.vue';
import PostCardComponent from '@/components/PostCardComponent.vue';
import { usePostsStore } from '@/stores/posts.pinia';

const store = usePostsStore()

</script>

<style></style>