<template>
  <category-slider-component />
  <banner-component />
  <posts-carousel-component title="Popular Posts" />

  <sport-banner />
  <news-post-view />
  <latest-videos />
  <posts-carousel-component :data="postsStore.posts" title="Trendy Posts" />

  <posts-carousel-component :data="postsStore.posts" title="Top Posts" />

</template>

<script setup lang="ts">
import CategorySliderComponent from './components/CategorySliderComponent.vue'
import BannerComponent from './components/BannerComponent.vue';
import SportBanner from './components/SportBanner.vue';
import LatestVideos from './components/LatestVideos.vue';
import NewsPostView from './components/NewsPostView.vue';
import PostsCarouselComponent from '@/components/PostsCarouselComponent.vue';

import { usePostsStore } from '@/stores/posts.pinia';
const postsStore = usePostsStore()
</script>
