<template>
  <section class="bg-graylight py-16">
    <div class="container">
      <div class="flex items-center justify-between mb-8">
        <h2 class="section-title">Latest Videos</h2>
        <div class="hidden  lg:flex gap-5">
          <button ref="prevBtn" class="bg-graylight btn border-none p-2 rounded-xl">
            <arrow-nav-icon direct="left" />
          </button>
          <button ref="nextBtn" class="bg-graylight btn border-none p-2 rounded-xl">
            <arrow-nav-icon direct="right" />
          </button>
        </div>
      </div>

      <!-- desktop -->
      <div class="hidden  lg:grid grid-cols-2 gap-6">
        <!-- Главное видео -->
        <div class="hidden xl:flex col-span-1 relative  rounded-2xl overflow-hidden p-4 items-end">
          <img class="absolute top-0 left-0 object-cover h-full w-full" src="/src/assets/images/remove/video.jpg"
            alt="" />

          <div class="absolute inset-0 flex items-center justify-center">
            <button class="bg-white/80 p-4 rounded-full">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M51.8438 32.1562C53.1562 33 54 34.5 54 36C54 37.5938 53.1562 39.0938 51.8438 39.8438L24.8438 56.3438C23.4375 57.1875 21.6562 57.2812 20.25 56.4375C18.8438 55.6875 18 54.1875 18 52.5V19.5C18 17.9062 18.8438 16.4062 20.25 15.6562C21.6562 14.8125 23.4375 14.8125 24.8438 15.75L51.8438 32.1562Z"
                  fill="#F81539" />
              </svg>
            </button>
          </div>
          <div class="video__info-block">
            <h3 class="text-xl font-semibold mb-4">
              How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)
            </h3>
            <p class="text-base text-graydark/75 truncate-text">
              You’ve read all your free member-only stories, become a member to get unlimited
              access. Your membership fee supports the voices you want to hear more from.
            </p>
          </div>
        </div>

        <!-- Слайдер с видео-карточками -->
        <div class="col-span-2 xl:col-span-1 relative top-blur">
          <swiper :modules="[Navigation]" :space-between="16" :breakpoints="{
            890: { slidesPerView: 2 },
            1280: { slidesPerView: 1.42 },
            1440: { slidesPerView: 1.42 },
          }" :navigation="{ prevEl: prevBtn, nextEl: nextBtn }" class="h-full">
            <swiper-slide v-for="(group, index) in chunkedVideos" :key="index">
              <div class="flex flex-col gap-4 h-full">
                <div v-for="item in group" :key="item.id" class="flex gap-3 h-full bg-white p-3  rounded-2xl shadow">
                  <div class="w-2/5">
                    <img :src="item.image" class="h-full object-cover aspect-square rounded-xl" alt="" />
                  </div>
                  <div class="w-3/5 py-4">
                    <h3 class="mb-3 truncate text-lg font-semibold">{{ item.title }}</h3>
                    <p class="text-graydark/75 overflow-hidden truncate-5">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- mobile & table -->
      <div class="aspect-[7/4]">
        <carousel-custom :slides="videos" :isVideo="true" class="lg:hidden" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ref, computed, onMounted } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import ArrowNavIcon from '@/components/icons/ArrowNavIcon.vue'
import CarouselCustom from '@/components/CarouselCustom.vue'

const prevBtn = ref<HTMLElement | null>(null)
const nextBtn = ref<HTMLElement | null>(null)

const videos = [
  {
    id: 1,
    title: '5 Reasons Why You Should Wrap...',
    description:
      'So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them. Well, this blog is going to explain the benefits of wrapping your hands.',
    image: '/src/assets/images/remove/boxer.jpg',
  },
  {
    id: 2,
    title: 'Music Genre Classification With AI',
    description:
      'A Guide to analyzing Audio/Music signals in Python — Music is like a mirror, and it tells people a lot about who you are and what you care about, whether you like it or not. You’ve read all your free memberonly stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from.',
    image: '/src/assets/images/remove/headphone.jpg',
  },
  {
    id: 3,
    title: 'Delicious Healthy Food Recipes',
    description: 'Try these amazing dishes for your diet plan...',
    image: '/src/assets/images/remove/headphone.jpg',
  },
  {
    id: 4,
    title: 'Work from Home Setup Ideas',
    description: 'Improve your productivity with these tips...',
    image: '/src/assets/images/remove/boxer.jpg',
  },
  {
    id: 3,
    title: 'Delicious Healthy Food Recipes',
    description: 'Try these amazing dishes for your diet plan...',
    image: '/src/assets/images/remove/headphone.jpg',
  },
  {
    id: 4,
    title: 'Work from Home Setup Ideas',
    description: 'Improve your productivity with these tips...',
    image: '/src/assets/images/remove/boxer.jpg',
  },
]

// Разбиваем видео на группы по 2
const chunkedVideos = computed(() => {
  return videos.reduce(
    (acc, curr, index) => {
      if (index % 2 === 0) acc.push([])
      acc[acc.length - 1].push(curr)
      return acc
    },
    [] as (typeof videos)[],
  )
})

</script>

<style scoped>
.truncate-5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  @media (max-width:1440px) {
    -webkit-line-clamp: 3;
  }
}

.top-blur::before {
  @media (min-width:1280px) {
    content: '';
    position: absolute;
    z-index: 2;
    width: 20%;
    height: 100%;
    right: -4%;
    top: 0;
    background: linear-gradient(270deg,
        #f5f5f5 5.21%,
        rgba(245, 245, 245, 0.3827) 64.58%,
        rgba(245, 245, 245, 0) 100%);
  }
}

.video__info-block {
  position: relative;
  border-radius: 0.75rem;
  background: white;
  padding: 1rem;
}
</style>
