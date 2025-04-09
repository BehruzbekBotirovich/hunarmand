<template>
  <section class="w-full bg-img">
    <div class="container gap-6 sport-wrapper">
      <match-calendar class="hidden xl:block" />
      <match-table class="hidden lg:block" />
      <match-score class="mx-auto" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MatchCalendar from './MatchCalendar.vue'
import MatchScore from './MatchScore.vue'
import MatchTable from './MatchTable.vue'

const match = ref({
  teams: [
    { name: 'Manchester City', logo: '/src/assets/images/remove/mancity.png' },
    { name: 'Liverpool', logo: '/src/assets/images/remove/arsenal.png' },
  ],
})
</script>

<style scoped>
.bg-img {
  padding: 5rem;
  background-image: url('@/assets/images/category/sport.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}

.bg-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 1;
}

.sport-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 980px) {
    grid-template-columns: 1.3fr 1fr;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1.7fr 1.3fr;
  }
}
</style>
