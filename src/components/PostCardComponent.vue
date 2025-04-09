<template>
  <router-link :to="`/single/${post?.id}`">
    <div :class="props.layout" class="card-custom">
      <figure>
        <img :src="post?.image" alt="" class="aspect-[9/5] h-full w-full object-cover rounded-xl" />
      </figure>
      <div class="space-y-4 mt-4 p-0 flex flex-col">
        <h2 class="card-title w-full text-lg font-semibold truncate">
          {{ post?.title }}
        </h2>
        <p class="text-graydark/75 truncate-text">
          {{ post?.description }}
        </p>

        <div class="card__user">
          <div class="flex items-center gap-2">
            <img :src="post?.avatar" alt="User" class="w-11 h-11 rounded-xl" />
            <div class="">
              <p class="font-medium text-nowrap">{{ post?.author }}</p>
              <p class="text-graydark/75 text-sm text-nowrap">{{ post?.date }}</p>
            </div>
          </div>
          <button class="btn btn-ghost btn-circle">
            <icon-book :isFilled="post?.isSaved" />
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import IconBook from './icons/IconBook.vue'

const props = defineProps({
  post: Object,
  layout: {
    type: String,
    default: 'vertical',
  },
})
</script>

<style scoped>
.card-custom {
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  flex-shrink: 0;
  box-shadow: 0px 0px 32px 0px #00000012;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
}

.card__user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 1rem;
}

.horizontal {
  display: flex;
  gap: 1.25rem;

  figure,
  div {
    width: 50%;
  }
}

.horizontal .card__user {
  width: 100%;
  margin-top: auto;
}

/* ========================= */
.vertical {
  display: block;
}


.vertical>figure,
.vertical>div {
  width: 100%;
}

.vertical .card__user {
  margin-top: 1rem;
}

.truncate {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
