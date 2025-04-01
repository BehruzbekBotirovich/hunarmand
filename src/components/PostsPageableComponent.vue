<template>
  <div :class="['grid gap-6 my-10', props.layout === 'vertical' ? 'grid-cols-4' : 'grid-cols-2']">
    <post-card-component v-for="item in posts" :key="String(item.id)" :post="item" :layout="props.layout" />
  </div>
  <div class="flex items-center gap-2">
    <button v-if="currentPage !== 1" @click="changePage(currentPage - 1)"
      class="btn px-4 py-2 text-base text-graydark/75">
      <arrow-nav-icon direct="left" />
      <span>Prev</span>
    </button>
    <ul class="pagination__wrapper">
      <li v-for="item in totalPages" :key="item" @click="changePage(item)" :class="{ active: currentPage === item }">
        {{ item }}
      </li>
    </ul>
    <button v-if="currentPage !== totalPages" @click="changePage(currentPage + 1)"
      class="btn px-4 py-2 text-base text-graydark/75">
      <span>Next</span>
      <arrow-nav-icon direct="right" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import PostCardComponent from './PostCardComponent.vue'
import { usePostsStore } from '@/stores/posts.pinia'
import { useRoute } from 'vue-router'
import { useQueryParams } from '@/composables/router.ts'
import ArrowNavIcon from './icons/ArrowNavIcon.vue'

const { setQueries } = useQueryParams()
const route = useRoute()
const postsStore = usePostsStore()

const posts = computed(() => postsStore.posts)
const totalPages = ref<number>(6)
const currentPage = computed<number>(() => (route.query.page ? Number(route.query.page) : 1))

const changePage = (page: number): void => {
  if (page < 1 || page > totalPages.value) return
  setQueries({ page })
}

const props = defineProps({
  layout: {
    type: String,
    default: 'vertical',
  },
})
</script>

<style scoped>
.pagination__wrapper {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

.pagination__wrapper>li {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.pagination__wrapper>li:hover {
  background: #f5f5f5;
}

.pagination__wrapper>li.active {
  background: #f5f5f5;
}
</style>
