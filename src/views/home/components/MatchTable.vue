<template>
  <div class="bg-white shadow-md rounded-2xl p-4 z-2">
    <table class="w-full text-left">
      <thead>
        <tr class="text-gray-500">
          <th class="py-2 text-black !text-left">Club</th>
          <th class="py-2">GP</th>
          <th class="py-2">W</th>
          <th class="py-2">D</th>
          <th class="py-2">L</th>
          <th class="py-2">F</th>
          <th class="py-2">A</th>
          <th class="py-2">GD</th>
          <th class="py-2">Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team, index) in teams" :key="index">
          <td>
            <div class="flex items-center gap-2 text-nowrap">
              <span class="font-medium text-gray-700">{{ index + 1 }}</span>
              <img :src="team.logo" alt="" class="w-6 h-6" />
              <span>{{ team.name }}</span>
            </div>
          </td>
          <td>{{ team.gp }}</td>
          <td>{{ team.w }}</td>
          <td>{{ team.d }}</td>
          <td>{{ team.l }}</td>
          <td>{{ team.f }}</td>
          <td>{{ team.a }}</td>
          <td>{{ team.gd }}</td>
          <td>{{ team.pts }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const teams = ref([
  {
    name: 'Manchester City',
    logo: '/src/assets/images/remove/mancity.png',
    gp: 38,
    w: 29,
    d: 6,
    l: 3,
    f: 99,
    a: 26,
    gd: 73,
    pts: 93,
  },
  {
    name: 'Liverpool',
    logo: '/src/assets/images/remove/liverpool.png',
    gp: 38,
    w: 28,
    d: 8,
    l: 2,
    f: 94,
    a: 26,
    gd: 68,
    pts: 92,
  },
  {
    name: 'Chelsea',
    logo: '/src/assets/images/remove/mancity.png',
    gp: 38,
    w: 21,
    d: 11,
    l: 6,
    f: 76,
    a: 33,
    gd: 43,
    pts: 74,
  },
  {
    name: 'Tottenham Hotspur',
    logo: '/src/assets/images/remove/mancity.png',
    gp: 38,
    w: 22,
    d: 5,
    l: 11,
    f: 69,
    a: 40,
    gd: 29,
    pts: 71,
  },
  {
    name: 'Arsenal',
    logo: '/src/assets/images/remove/mancity.png',
    gp: 38,
    w: 22,
    d: 3,
    l: 13,
    f: 61,
    a: 48,
    gd: 13,
    pts: 69,
  },
  {
    name: 'Manchester United',
    logo: '/src/assets/images/remove/mancity.png',
    gp: 38,
    w: 16,
    d: 10,
    l: 12,
    f: 57,
    a: 57,
    gd: 0,
    pts: 58,
  },
])
</script>

<style scoped>
tbody > tr:nth-child(even) td:first-child {
  border-radius: 1rem 0 0 1rem;
  overflow: hidden;
}

tbody > tr:nth-child(even) td:last-child {
  border-radius: 0 1rem 1rem 0;
  overflow: hidden;
  background: #f5f5f5;
}

tbody > tr:nth-child(even) {
  background: #f5f5f5;
}

th,
td {
  font-weight: 500;
  text-align: center;
  padding: 10px;
}

th {
  font-weight: 600;
}
</style>
