<template>
  <section class="container">
    <div class="flex gap-6 h-[30rem] mb-15">
      <!-- def card news -->
      <div class="hidden lg:block w-1/4  h-full relative rounded-2xl overflow-hidden">
        <img
          src="/src/assets/images/remove/carsafe.jpg"
          class="w-full h-full object-cover"
          alt=""
        />
        <div class="bg-graylight p-4 absolute left-4 right-4 bottom-4 rounded-xl">
          <h3 class="text-2xl mb-4">How to drive safely</h3>
          <p class="truncate-text">
            Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may
            feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that
            accidents can happen to anybody, there are things you can do to drive safely and do your
            best to avoid them.
          </p>
        </div>  
      </div>

      <div class="hidden lg:block w-1/4  h-full relative rounded-2xl overflow-hidden">
        <img src="/src/assets/images/remove/dancegirl.jpg" class="w-full h-full object-cover" />
        <div class="bg-graylight p-4 absolute left-4 right-4 bottom-4 rounded-xl">
          <h3 class="text-2xl mb-4 truncate">How to Make Dance Music</h3>
          <p class="truncate-text">
            Download torrents from verified or trusted uploaders. If you're a BitTorrent user
            looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The
            Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified
            users.
          </p>
        </div>
      </div>

      <!-- def carousel -->
      <div class="lg:w-1/2">
        <carousel-custom :slides="slides" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ArrowNavIcon from '@/components/icons/ArrowNavIcon.vue'
import CarouselCustom from '@/components/CarouselCustom.vue'

const currentSlide = ref(0)

const carouselStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
}))

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const slides = ref([
  {
    title: 'Why I Stopped Using Multiple Monitor',
    description:
      'A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like',
    image: '/src/assets/images/remove/carousel1.jpg',
  },
  {
    title: 'The Future of AI in Development',
    description:
      'A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like',
    image: '/src/assets/images/remove/carousel2.jpg',
  },
  {
    title: 'Best Practices for Frontend Performance',
    description:
      'A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like',
    image: '/src/assets/images/remove/carousel1.jpg',
  },
  {
    title: 'The Future of AI in Development',
    description:
      'A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like',
    image: '/src/assets/images/remove/carousel2.jpg',
  },
  {
    title: 'Best Practices for Frontend Performance',
    description:
      'A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like',
    image: '/src/assets/images/remove/carousel1.jpg',
  },
])
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
