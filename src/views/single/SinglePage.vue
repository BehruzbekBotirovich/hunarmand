<template>
  <div class="container">
    <div class="breadcrumbs mb-10 text-sm">
      <ul>
        <li><a>Home</a></li>
        <li><a>Featured</a></li>
        <li class="text-graydark/50 ">
          How to Spend the Perfect Day on Croatia’s Most Magical Island
        </li>
      </ul>
    </div>

    <div class="lg:flex gap-6 relative">
      <div class="w-full">
        <single-content />
        <comments-list />
        <comment-add />
      </div>

      <sidebar class="lg:w-[360px]" />
    </div>

    <posts-carousel-component :data="postsStore.posts" title="Related Posts" isInContent="true" />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
import SingleContent from './components/SingleContent.vue'
import CommentsList from './components/CommentsList.vue'
import CommentAdd from './components/CommentAdd.vue'
import PostsCarouselComponent from '@/components/PostsCarouselComponent.vue'

import { usePostsStore } from '@/stores/posts.pinia'
const postsStore = usePostsStore()
</script>

<style scoped></style>
