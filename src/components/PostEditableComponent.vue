<template>
  <router-link :to="`/single/${post?.id}`">
    <div class="card-custom">
      <figure>
        <img :src="post?.image" alt="" class="aspect-[9/5] w-full object-cover rounded-xl" />
      </figure>
      <div class="space-y-4 mt-4 p-0 flex flex-col">
        <h2 class="card-title w-full text-lg font-semibold truncate">
          {{ post?.title }}
        </h2>
        <div class="card__user">
          <div class="flex gap-5 items-center">
            <div class="flex items-center gap-1">
              <icon-star class="text-graydark/50" />
              <span>15k</span>
            </div>
            <div class="flex items-center gap-1 text-graydark/50">
              <icon-eye-view />
              <span>4.5</span>
            </div>
          </div>
          <div class="flex">
            <button class="btn btn-ghost btn-circle text-graydark/50">
              <icon-edit-pen />
            </button>
            <button class="btn btn-ghost btn-circle text-graydark/50">
              <icon-trash-delete />
            </button>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import IconBook from './icons/IconBook.vue'
import IconTrashDelete from '@/components/icons/IconTrashDelete.vue'
import IconEditPen from '@/components/icons/IconEditPen.vue'
import IconEyeView from '@/components/icons/IconEyeView.vue'
import IconStar from '@/components/icons/IconStar.vue'

const props = defineProps({
  post: Object,
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

.horizontal>figure,
.horizontal>div {
  width: 50%;
}

.horizontal .card__user {
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
