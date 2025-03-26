<template>
    <section class="container">
        <div class="flex gap-6 h-[450px] mb-15">
            <!-- def card news -->
            <div class="w-1/4 h-full relative rounded-2xl overflow-hidden">
                <img src="/src/assets/images/remove/carsafe.jpg" alt="">
                <div class="bg-graylight p-4 absolute left-4 right-4 bottom-4 rounded-xl">
                    <h3 class="text-2xl mb-4">How to drive safely</h3>
                    <p class="truncate-text">Ah, the joy of the open road—it’s a good feeling. But if you’re new to
                        driving,
                        you may feel a little
                        nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen
                        to
                        anybody, there are things you can do to drive safely and do your best to avoid them. </p>
                </div>
            </div>

            <div class="w-1/4 h-full relative rounded-2xl overflow-hidden">
                <img src="/src/assets/images/remove/dancegirl.jpg" class="object-cover object-center">
                <div class="bg-graylight p-4 absolute left-4 right-4 bottom-4 rounded-xl">
                    <h3 class="text-2xl mb-4">How to Make Dance Music</h3>
                    <p class="truncate-text">Download torrents from verified or trusted uploaders. If you're a
                        BitTorrent
                        user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The
                        Pirate
                        Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. </p>
                </div>
            </div>

            <!-- def carousel -->
            <div class="w-1/2 ">
                <div class="relative w-full h-full mx-auto rounded-xl overflow-hidden shadow-lg">
                    <!-- Слайдер -->
                    <div class="relative w-full h-full">
                        <div class="relative w-full h-full overflow-hidden">
                            <div class="flex w-full h-full transition-transform duration-500 ease-in-out"
                                :style="carouselStyle">
                                <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
                                    <img :src="slide.image" class="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <button @click="prevSlide"
                            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-xl">
                            <arrow-nav-icon direct="left" />
                        </button>
                        <button @click="nextSlide"
                            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-xl">
                            <arrow-nav-icon direct="right" />
                        </button>
                    </div>

                    <div class="absolute bottom-4 left-4 right-4 bg-white/75 p-4 rounded-xl flex gap-4">
                        <div class="w-auto">
                            <h2 class="text-2xl mb-4">{{ slides[currentSlide].title }}</h2>
                            <p class="truncate-text">{{ slides[currentSlide].description }}</p>
                        </div>
                        <div class="pl-20 flex gap-2 items-end">
                            <button v-for="(slide, index) in slides" :key="index" @click="currentSlide = index"
                                :class="{ 'bg-white w-6': currentSlide === index, 'bg-white/50': currentSlide !== index }"
                                class="w-3 h-3 rounded-full transition-all"></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ArrowNavIcon from '@/components/icons/ArrowNavIcon.vue'
const currentSlide = ref(0)

const carouselStyle = computed(() => ({
    transform: `translateX(-${currentSlide.value * 100}%)`
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
        image: '/src/assets/images/remove/carousel1.jpg'
    },
    {
        title: 'The Future of AI in Development',
        description:
            'A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like',
        image: '/src/assets/images/remove/carousel2.jpg'
    },
    {
        title: 'Best Practices for Frontend Performance',
        description:
            'A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like',
        image: '/src/assets/images/remove/carousel1.jpg'
    }
    ,
    {
        title: 'The Future of AI in Development',
        description:
            'A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like',
        image: '/src/assets/images/remove/carousel2.jpg'
    },
    {
        title: 'Best Practices for Frontend Performance',
        description:
            'A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like',
        image: '/src/assets/images/remove/carousel1.jpg'
    }
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