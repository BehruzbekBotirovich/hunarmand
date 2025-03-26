<template>
  <div class="py-15" :class="!isInContent ? 'container' : ''">
    <div class="flex items-center justify-between mb-4">
      <h2 class="section-title">{{ title }}</h2>

      <div class="flex gap-5">
        <button ref="prevBtn" class="bg-graylight btn border-none p-2 rounded-xl">
          <arrow-nav-icon direct="left" />
        </button>
        <button ref="nextBtn" class="bg-graylight btn border-none p-2 rounded-xl">
          <arrow-nav-icon direct="right" />
        </button>
      </div>
    </div>

    <swiper
      :modules="[Navigation]"
      :slides-per-view="4"
      :space-between="22"
      :navigation="{ prevEl: prevBtn, nextEl: nextBtn }"
      :breakpoints="{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }"
      class=""
    >
      <swiper-slide v-for="post in posts" :key="post.id">
        <PostCardComponent :post="post" layout="vertical" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ArrowNavIcon from '@/components/icons/ArrowNavIcon.vue'
import PostCardComponent from '@/components/PostCardComponent.vue'

import { defineProps } from 'vue'

const props = defineProps({
  data: Array,
  title: String,
  isInContent: {
    type: Boolean,
    default: false,
  },
})
const prevBtn = ref(null)
const nextBtn = ref(null)

onMounted(() => {
  const swiper = document.querySelector('.swiper').swiper
  swiper.params.navigation.prevEl = prevBtn.value
  swiper.params.navigation.nextEl = nextBtn.value
  swiper.navigation.init()
  swiper.navigation.update()
})

const posts = ref([
  {
    id: 1,
    title: 'First Popular Post',
    description:
      ' Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District(UW)  Montlake Bridge ',
    image: '/src/assets/images/remove/carousel1.jpg',
    author: 'Developerriddin DEv',
    avatar: '/src/assets/images/remove/avatar1.jpg',
    date: 'Avgust 21, 2024',
    isSaved: true,
  },
  {
    id: 1,
    title:
      'How to choose the right laptop for programming ja sjd asjd ajkd asj dajs dajsd jk ejew jk wejr werje ',
    description:
      ' Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs ',
    image: '/src/assets/images/remove/macbook.jpg',
    author: 'Developerriddin DEv',
    avatar: '/src/assets/images/remove/avatar1.jpg',
    date: 'Avgust 21, 2024',
    isSaved: false,
  },
  {
    id: 3,
    title: 'How we built the first real self-driving car',
    description:
      'Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when',
    image: '/src/assets/images/remove/porsh.jpg',
    author: 'Developerriddin DEv',
    avatar: '/src/assets/images/remove/avatar1.jpg',
    date: 'Avgust 21, 2024',
    isSaved: true,
  },
  {
    id: 3,
    title: 'How we built the first real self-driving car',
    description:
      'Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.',
    image: '/src/assets/images/remove/hotdog.jpg',
    author: 'Developerriddin DEv',
    avatar: '/src/assets/images/remove/avatar1.jpg',
    date: 'Avgust 21, 2024',
    isSaved: true,
  },
  {
    id: 3,
    title: 'How we built the first real self-driving car',
    description:
      'Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when',
    image: '/src/assets/images/remove/porsh.jpg',
    author: 'Developerriddin DEv',
    avatar: '/src/assets/images/remove/avatar1.jpg',
    date: 'Avgust 21, 2024',
    isSaved: true,
  },
])
</script>

<style scoped></style>
