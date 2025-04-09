<template>
    <div>
        <div class="bg-graylight p-8 pt-0 rounded-2xl relative">
            <h1 class="absolute left-8 top-6 text-4xl w-11/12 font-base">
                {{ article.title }}
            </h1>
            <img src="/src/assets/images/remove/travel.jpg"
                class="translate-y-28 rounded-xl max-h-[560px] aspect-[5/3] w-full object-cover">
        </div>

        <div class="mt-28 mb-12">
            <ul class="content__info flex gap-16 justify-center">
                <li>
                    <icon-calendar />
                    <span>{{ article.date }}</span>
                </li>
                <li>
                    <icon-comment />
                    <span>comments : {{ article.comments }}</span>
                </li>

                <li>
                    <icon-folder />
                    <span>Category : {{ article.category }}</span>
                </li>
            </ul>
        </div>

        <div class="px-8">
            <h2 class="content__subtitle">Don’t wait. The purpose of our lives is to be happy!</h2>
            <p class="content__text">Upon arrival, your senses will be rewarded with the pleasant scent of lemongrass
                oil used to clean the
                natural wood found throughout the room, creating a relaxing atmosphere within the space.
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I
                enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created
                for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.</p>
            <div class="w-full my-10">
                <img src="/src/assets/images/remove/beachboard.jpg"
                    class="rounded-xl w-4/5 object-cover aspect-[5/3] mx-auto  max-h-[460px]">
            </div>
            <h2 class="content__subtitle">Not how long, but how well you have lived is the main
                thing.</h2>
            <p class="content__text">When you are ready to indulge your sense of excitement, check out the range of
                water- sports
                opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The
                resort has kayaks, paddleboards, or the low-key pedal boats. Snorkeling equipment is available as well,
                so you can experience the ever-changing undersea environment.
                Not only do visitors to a bed and breakfast get a unique perspective on the place they are visiting,
                they have options for special packages not available in other hotel settings. Bed and breakfasts can
                partner easily with local businesses for a smoothly organized and highly personalized vacation
                experience. The Fife and Drum Inn offers options such as the Historic Triangle Package that includes
                three nights at the Inn, breakfasts, and admissions to historic Williamsburg, Jamestown, and Yorktown.
                Bed and breakfasts also lend themselves to romance.
                Part of the charm of a bed and breakfast is the uniqueness; art, décor, and food are integrated to
                create a complete experience. For example, the Fife and Drum retains the colonial feel of the area in
                all its guest rooms. Special features include antique furnishings, elegant four poster beds in some
                guest rooms, as well folk art and artifacts from the restoration period of the historic area available
                for guests to enjoy.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// icons
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconFolder from "@/components/icons/IconFolder.vue";


const article = ref({
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    image: "/images/croatia.jpg",
    date: "July 14, 2022",
    comments: 25,
    category: "Sport",
});
</script>

<style scoped>
.content__info>li {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #3E323280;
}

.content__subtitle {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 100%;
    margin-bottom: 1rem;
    color: #3E3232;
}

.content__text {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 34px;
    color: #3E3232;
}
</style>