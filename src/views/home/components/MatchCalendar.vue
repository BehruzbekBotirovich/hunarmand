<script setup lang="ts">
import { ref, computed } from "vue";

// Данные с эмблемами команд
const teamMatches = ref([
    { date: "2022-01-03", teamLogo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" },
    { date: "2022-01-11", teamLogo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Brighton_%26_Hove_Albion_logo.svg" },
    { date: "2022-01-17", teamLogo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" },
    { date: "2022-01-15", teamLogo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg" },
    { date: "2022-01-30", teamLogo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg" },
    { date: "2022-01-31", teamLogo: "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg" },
]);

// Генерация дней месяца
const daysInMonth = computed(() => {
    const year = 2022;
    const month = 0; // Январь (0 - это январь в JS)
    const firstDay = new Date(year, month, 1).getDay();
    const days = new Array(42).fill(null);

    for (let i = 0; i < 31; i++) {
        days[firstDay + i] = i + 1;
    }
    return days;
});

// Проверка, есть ли матч в этот день
const getTeamLogo = (day: number) => {
    if (!day) return "";
    const dateString = `2022-01-${day.toString().padStart(2, "0")}`;
    const match = teamMatches.value.find((match) => match.date === dateString);
    return match ? match.teamLogo : "";
};
</script>

<template>
    <div class="bg-white shadow-xl rounded-lg p-4 z-10">
        <h2 class="text-lg font-bold ml-4">Jan 2022</h2>
        <div class="grid grid-cols-7 text-center text-gray-500 font-semibold mt-2">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
        </div>
        <div class="grid grid-cols-7 gap-2 mt-2">
            <div v-for="(day, index) in daysInMonth" :key="index" class="flex items-center justify-center w-10 h-10">
                <img v-if="getTeamLogo(day)" :src="getTeamLogo(day)" class="w-6 h-6" />
                <span v-else class="text-gray-700">{{ day || '' }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    border-radius: 50%;
}
</style>
