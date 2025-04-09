<template>
  <section class="px-8 mt-16">
    <h2 class="section-title mb-8">Comments</h2>

    <div class="comments-container">

      <div v-for="comment in comments" :key="comment.id" class="comment__wrapper mb-6">
        <div :class="[comment.replies.length ? 'comment__isReplied' : '', 'comment__body']">
          <!-- <div class="comment__body"> -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img :src="comment.avatar" class="w-12 h-12 rounded-xl" />
              <div>
                <h3 class="font-semibold">{{ comment.author }}</h3>
                <p class="text-sm text-graydark/75 flex items-center gap-1">
                  <icon-calendar />
                  {{ comment.date }}
                </p>
              </div>
            </div>
            <button class="btn btn-sm border-none btn-outline rounded-xl bg-graydark/10 text-graydark/50">
              <icon-reply />
              Reply
            </button>
          </div>
          <p class="mt-2 text-gray-700">{{ comment.text }}</p>
        </div>

        <div v-if="comment.replies.length" class="comment__replies ">
          <div v-for="reply in comment.replies" :key="reply.id" class="bg-white p-4 rounded-lg">
            <div class="flex items-center gap-3">
              <img :src="reply.avatar" class="w-12 h-12 rounded-xl" />
              <div>
                <h3 class="font-semibold">{{ reply.author }}</h3>
                <p class="text-sm text-graydark/75 flex items-center gap-1">
                  <icon-calendar />
                  {{ reply.date }}
                </p>
              </div>
            </div>
            <p class="mt-2 text-gray-700">{{ reply.text }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//icon
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconReply from '@/components/icons/IconReply.vue'

import ava1 from '/src/assets/images/remove/avatar2.jpg'
import ava2 from '/src/assets/images/remove/avatar3.jpg'
import ava3 from '/src/assets/images/remove/avatar1.jpg'
import ava4 from '/src/assets/images/remove/avatar4.jpg'
// Список комментариев
const comments = ref([
  {
    id: 1,
    author: 'Jon Kantner',
    avatar: ava1,
    date: '2022 04 July',
    text: 'When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.',
    replies: [
      {
        id: 2,
        author: 'Cassie Evans',
        avatar: ava2,
        date: '2022 04 July',
        text: 'A river or a lake island may be called an eyot...',
      },
      {
        id: 3,
        author: 'Behzad Pashaei',
        avatar: ava3,
        date: '2022 04 July',
        text: 'Oceanic islands are often considered to be islands...',
      },
    ],
  },

  {
    id: 4,
    author: 'Patricia',
    avatar: ava4,
    date: '2022 04 July',
    text: 'An island (or isle) is an isolated piece of habitat...',
    replies: [],
  },

  {
    id: 1,
    author: 'Jon Kantner',
    avatar: ava1,
    date: '2022 04 July',
    text: 'When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.',
    replies: [
      {
        id: 2,
        author: 'Cassie Evans',
        avatar: ava2,
        date: '2022 04 July',
        text: 'A river or a lake island may be called an eyot...',
      },
      {
        id: 3,
        author: 'Behzad Pashaei',
        avatar: ava3,
        date: '2022 04 July',
        text: 'Oceanic islands are often considered to be islands...',
      },
    ],
  },
])
</script>

<style scoped>
.comment__replies {
  position: relative;
  border-radius: 1rem;
  width: 80%;
  margin: 0 auto;
  box-shadow: 0px 0px 32px 0px #00000012;
}


.comment__body {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  position: relative;
}

.comment__isReplied::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 5rem;
  border-radius: 0 0 1rem 1rem;
  background: #f5f5f5;
  bottom: -5rem;
  left: 0;
}
</style>
