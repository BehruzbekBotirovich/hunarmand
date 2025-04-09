<template>
  <div class="pt-10 pb-0 " :class="!isInContent ? 'container' : ''">
    <div class="flex items-center justify-between">
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

    <swiper :modules="[Navigation]" :slides-per-view="4" :space-between="22"
      :navigation="{ prevEl: prevBtn, nextEl: nextBtn }" :breakpoints="props.layout == 'vertical' ? {
        320: { slidesPerView: 1.4 },
        640: { slidesPerView: 2.3 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      } : {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 1.2 },
        1280: { slidesPerView: 2 },
      }" class="-translate-x-8">
      <swiper-slide v-for="post in props.data" :key="post.id" class="">
        <PostCardComponent :post="post" :layout="props.layout" />
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
  layout: {
    type: String,
    default: 'vertical'
  }
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

</script>

<style scoped>
:deep(.swiper) {
  padding: 2rem;
}
</style>
