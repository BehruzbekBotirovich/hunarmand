<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import ArrowNavIcon from '@/components/icons/ArrowNavIcon.vue'

import food from '/src/assets/images/category/food.jpg'
import animal from '/src/assets/images/category/animal.jpg'
import car from '/src/assets/images/category/car.jpg'
import sport from '/src/assets/images/category/sport.jpg'
import music from '/src/assets/images/category/music.jpg'
import technology from '/src/assets/images/category/technology.jpg'
import abstract from '/src/assets/images/category/abstract.jpg'

const categories = ref([
  { name: 'Food', image: food },
  { name: 'Animal', image: animal },
  { name: 'Car', image: car },
  { name: 'Sport', image: sport },
  { name: 'Music', image: music },
  { name: 'Technology', image: technology },
  { name: 'Abstract', image: abstract },
  { name: 'Sport', image: sport },
  { name: 'Music', image: music },
])

const container = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

const updateScrollButtons = () => {
  if (container.value) {
    canScrollLeft.value = container.value.scrollLeft > 0
    canScrollRight.value =
      container.value.scrollLeft + container.value.clientWidth < container.value.scrollWidth
  }
}

const scroll = (direction: 'left' | 'right') => {
  if (container.value) {
    const scrollAmount = 320
    container.value.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }
}

onMounted(() => {
  nextTick(updateScrollButtons)
})
</script>

<template>
  <nav class="container">
    <div class="relative mb-15 w-full rounded-2xl bg-graylight overflow-hidden">
      <button v-if="canScrollLeft" @click="scroll('left')" class="nav-btn left-0">
        <arrow-nav-icon direct="left" size="large" />
      </button>

      <div ref="container" class="flex gap-6 overflow-x-auto scrollbar-hide p-[10px] overflow-hidden"
        style="scroll-snap-type: x mandatory; white-space: nowrap;" @scroll="updateScrollButtons">
        <div v-for="item in categories" :key="item.name"
          class="!w-[170px] h-[48px] grid bg-gray-300  rounded-xl relative overflow-hidden flex-shrink-0">
          <div class="text-center self-center w-full text-base  text-white relative z-2">#{{ item.name }}</div>
          <img :src="item.image" class="absolute -top-1/2 left-0 w-full h-auto blur-[2px] object-contain z-0" />
        </div>
      </div>

      <button v-if="canScrollRight" @click="scroll('right')" class="nav-btn right-0">
        <arrow-nav-icon direct="right" size="large" />
      </button>
    </div>
  </nav>

</template>

<style scoped>
.nav-btn {
  transform: translateY(-50%);
  position: absolute;
  background: #f5f5f5;
  width: 50px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  height: 100%;
}
</style>
