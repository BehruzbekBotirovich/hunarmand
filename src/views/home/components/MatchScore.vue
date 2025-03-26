<template>

    <div class="bg-white rounded-2xl  py-8 px-4 z-2">
        <h3 class="text-center text-lg font-semibold">The Final Round</h3>
        <div class="flex items-center mb-8 ">
            <img class="w-1/3" src="@/assets/images/remove/mancity.png" alt="">
            <div class="w-1/3 h-full">
                <div class="align-center text-[40px] text-red-600 font-bold text-center">VS</div>
                <h3 class="align-end text-center  text-lg font-semibold">Sunday , August 18th</h3>
            </div>
            <img class="w-1/3" src="@/assets/images/remove/liverpool.png" alt="">
        </div>
        <div class="flex gap-28 items-center relative">
            <div class="team-name py-2 rounded-l-2xl bg-[#2F5C9F]">Manchester city</div>
            <div
                class="absolute left-1/2  -translate-x-1/2  text-white overflow-hidden  rounded-2xl border-[#E6E6E6] border-2 flex items-center ">
                <div class="py-4 px-5 bg-graydark text-2xl  border-r-2 ">00</div>
                <div class="py-4 px-5 bg-graydark text-2xl ">00</div>
            </div>
            <div class="team-name py-2 rounded-r-2xl bg-[#AA3034]">Liverpool</div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
const match = ref({
    teams: [
        { name: "Manchester City", logo: "/src/assets/images/remove/mancity.png", color: "#2F5C9F" },
        { name: "Liverpool", logo: "/src/assets/images/remove/arsenal.png", color: "#AA3034" }
    ]
});
</script>

<style scoped>
.team-name {
    width: 50%;
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 16px;
    text-transform: capitalize;
}
</style>