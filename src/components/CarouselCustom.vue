<template>
  <div class="relative w-full h-full mx-auto rounded-xl overflow-hidden shadow-lg">
    <div class="relative w-full h-full">
      <div class="relative w-full h-full overflow-hidden">
        <div
          class="flex w-full h-full transition-transform duration-500 ease-in-out relative"
          :style="carouselStyle"
        >
          <button
            v-if="props.isVideo"
            class="bg-white/80 p-4 rounded-full absolute top-1/2 left-1/2 -translate-1/2"
          >
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.8438 32.1562C53.1562 33 54 34.5 54 36C54 37.5938 53.1562 39.0938 51.8438 39.8438L24.8438 56.3438C23.4375 57.1875 21.6562 57.2812 20.25 56.4375C18.8438 55.6875 18 54.1875 18 52.5V19.5C18 17.9062 18.8438 16.4062 20.25 15.6562C21.6562 14.8125 23.4375 14.8125 24.8438 15.75L51.8438 32.1562Z"
                fill="#F81539"
              />
            </svg>
          </button>
          <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
            <img :src="slide.image" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-xl"
      >
        <arrow-nav-icon direct="left" />
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-xl"
      >
        <arrow-nav-icon direct="right" />
      </button>
    </div>

    <div class="absolute bottom-4 left-4 right-4 bg-white/75 p-4 rounded-xl flex gap-4">
      <div class="w-full">
        <h2 class="text-2xl mb-4 truncate">{{ slides[currentSlide].title }}</h2>
        <p class="truncate-text">{{ slides[currentSlide].description }}</p>
      </div>
      <div class="pl-20 flex gap-2 items-end">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="currentSlide = index"
          :class="{
            'bg-white w-6': currentSlide === index,
            'bg-white/50': currentSlide !== index,
          }"
          class="w-3 h-3 rounded-full transition-all"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'
import ArrowNavIcon from '@/components/icons/ArrowNavIcon.vue'

const props = defineProps({
  slides: Array,
  isVideo: {
    default: false,
    type: Boolean,
  },
})
const currentSlide = ref(0)

const carouselStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
}))

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.slides.length) % props.slides.length
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length
}
</script>

<style scoped>
.truncate-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
