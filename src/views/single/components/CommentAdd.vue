<script setup lang="ts">
import { ref } from 'vue';
// icons
import IconMoodAngry from '@/components/icons/IconMoodAngry.vue';
import IconMoodSad from '@/components/icons/IconMoodSad.vue';
import IconMoodOk from '@/components/icons/IconMoodOk.vue';
import IconMoodLike from '@/components/icons/IconMoodLike.vue';
import IconMoodGood from '@/components/icons/IconMoodGood.vue';
import IconComment from '../../../components/icons/IconComment.vue';

const name = ref('');
const comment = ref('');
const website = ref('');
const email = ref('');
const selectedRating = ref<number>(5);

const ratings = [
    {
        name: 'Angry',
        value: 1,
        icon: IconMoodAngry,
        color: '#FC5C65',
    },
    {
        name: 'Sad',
        value: 2,
        icon: IconMoodSad,
        color: '#FA8231',
    },
    {
        name: 'Ok',
        value: 3,
        icon: IconMoodOk,
        color: '#F7B731',
    },
    {
        name: 'Like',
        value: 4,
        icon: IconMoodLike,
        color: '#45AAF2',
    },
    {
        name: 'Good',
        value: 5,
        icon: IconMoodGood,
        color: '#26DE81',
    }
];

const submitComment = () => {
    alert('Comment submitted!');
};
</script>

<template>
    <section class="my-15">
        <h2 class="section-title mb-8">Add A Comment</h2>
        <form @submit.prevent="submitComment">
            <div class="md:flex w-full gap-6 mb-6">
                <div class="space-y-4 md:w-1/2 mb-6">
                    <p class="font-semibold mb-4">Name</p>
                    <input v-model="name" type="text" placeholder=""
                        class="input input-lg rounded-xl border-none w-full bg-graylight" />

                    <p class="font-semibold mb-4">Website</p>
                    <input v-model="website" type="text" placeholder=""
                        class="input input-lg rounded-xl border-none w-full bg-graylight" />

                    <p class="font-semibold mb-4">Email</p>
                    <input v-model="email" type="text" placeholder=""
                        class="input input-lg rounded-xl border-none w-full bg-graylight" />
                </div>
                <div class=" md:w-1/2">
                    <p class="font-semibold mb-4">Comment</p>
                    <textarea v-model="comment" type="text" placeholder="Search anything"
                        class="input input-lg rounded-xl border-none w-full h-full-custom p-6 bg-graylight resize-none" />
                </div>
            </div>
            <div class="flex flex-wrap md:flex-nowrap justify-end gap-6">
                <div class="w-full p-1 flex items-center justify-between bg-graylight rounded-xl">
                    <span class="ml-4 font-semibold">Rate The Usefullness of The Article </span>
                    <ul class="flex gap-1">
                        <li v-for="(rating, index) in ratings" :key="index" class="btn btn-custom" :style="[{ color: rating.value == selectedRating ? 'white' : rating.color },
                        { background: rating.value !== selectedRating ? 'none' : rating.color }
                        ]" @click.prevent="selectedRating = rating.value">
                            <component :is="rating.icon" class="cursor-pointer" />
                            <span v-if="rating.value === selectedRating">{{ rating.name }}</span>
                        </li>
                    </ul>
                </div>
                <button type="submit" class="btn btn-lg btn-custom bg-[#F81539BF] text-white ">
                    <icon-comment />
                    <span>Send Comment</span>
                </button>
            </div>
        </form>
    </section>
</template>
<style scoped>
.h-full-custom {
    height: calc(100% - 2.5rem);
    white-space: wrap;
}

.btn-custom {
    border-radius: 0.8rem;
    border: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
