<template>
  <div class="flex w-full gap-6 mb-8">
    <div class="w-3/4">
      <h3 class="section-title mb-8">View Posts</h3>
      <div class="rounded-xl shadow-custom bg-white">
        <apexchart type="line" height="420px" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
    <div class="w-1/4">
      <h3 class="section-title mb-8">Satisfaction of Posts</h3>
      <div class="grid grid-cols-3 gap-4 p-4 shadow-custom rounded-xl">
        <div
          v-for="(item, index) in moods"
          :key="index"
          class="flex flex-col items-center space-y-3 justify-center p-4 bg-graylight rounded-lg"
        >
          <span class="text-sm font-medium">{{ item.month }}</span>
          <component :is="item.icon" :class="['w-12 h-12', item.color]" />
          <span class="text-gray-500 text-sm">20 Points</span>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h3 class="section-title mb-8">Your Posts</h3>
    <div class="grid grid-cols-4 gap-6">
      <post-editable-component v-for="item in store.myPosts" :post="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import IconMoodAngry from '@/components/icons/IconMoodAngry.vue'
import IconMoodSad from '@/components/icons/IconMoodSad.vue'
import IconMoodOk from '@/components/icons/IconMoodOk.vue'
import IconMoodLike from '@/components/icons/IconMoodLike.vue'
import IconMoodGood from '@/components/icons/IconMoodGood.vue'
import PostEditableComponent from '@/components/PostEditableComponent.vue'

import { usePostsStore } from '@/stores/posts.pinia.ts'

const store = usePostsStore()

const moods = [
  { month: 'August 2022', icon: IconMoodAngry, color: 'text-red-500' },
  { month: 'September 2022', icon: IconMoodSad, color: 'text-blue-500' },
  { month: 'October 2022', icon: IconMoodGood, color: 'text-green-500' },
  { month: 'May 2022', icon: IconMoodGood, color: 'text-green-500' },
  { month: 'June 2022', icon: IconMoodOk, color: 'text-orange-400' },
  { month: 'July 2022', icon: IconMoodOk, color: 'text-yellow-500' },
  { month: 'February 2022', icon: IconMoodOk, color: 'text-yellow-500' },
  { month: 'March 2022', icon: IconMoodLike, color: 'text-red-500' },
  { month: 'April 2022', icon: IconMoodSad, color: 'text-blue-500' },
]

const chartOptions = ref({
  chart: {
    type: 'line',
    toolbar: { show: false },
  },
  stroke: { curve: 'smooth', width: 2 },
  markers: { size: 6, colors: ['#FFC107'], strokeColors: '#fff', strokeWidth: 2 },
  xaxis: {
    categories: [
      'March 2022',
      'April 2022',
      'May 2022',
      'June 2022',
      'July 2022',
      'August 2022',
      'September 2022',
      'October 2022',
    ],
  },
  yaxis: { labels: { formatter: (val: number) => `${val}K` } },
  tooltip: { enabled: true },
})

const series = ref([
  {
    name: 'Users',
    data: [50, 45, 52, 48, 50, 60, 65, 85], // Заменить на реальные данные
    color: '#FFC107',
  },
])
</script>
