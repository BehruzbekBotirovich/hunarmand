<template>
  <category-slider-component />
  <banner-component />
  <posts-carousel-component title="Popular Posts" />

  <sport-banner />
  <posts-carousel-component title="News Posts" />

  <latest-videos />
  <posts-carousel-component title="Trendy Posts" />

  <posts-carousel-component title="Top Posts" />

</template>

<script setup lang="ts">
import CategorySliderComponent from './components/CategorySliderComponent.vue'
import BannerComponent from './components/BannerComponent.vue';
import SportBanner from './components/SportBanner.vue';
import LatestVideos from './components/LatestVideos.vue';

import PostsCarouselComponent from '@/components/PostsCarouselComponent.vue';
</script>
