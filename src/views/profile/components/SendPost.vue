<template>
    <!-- Tabs -->
    <div class="flex space-x-4 my-6">
        <button @click="activeTab = 'post'" :class="{ 'active': activeTab === 'post' }"
            class="btn  px-7 btn-ghost ">Send
            Post</button>
        <button @click="activeTab = 'video'" :class="{ 'active': activeTab === 'video' }"
            class="btn px-7  btn-ghost ">Send
            Video</button>
    </div>
    <div class="flex flex-col lg:flex-row gap-6">
        <!-- Left Section -->
        <div class="flex-1">

            <!-- Title and Tags -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block mb-2">Title</label>
                    <input v-model="title" type="text" class="bg-graylight rounded-xl p-3  w-full" />
                </div>

                <div>
                    <label class="block mb-2">Add tags</label>
                    <div class="flex items-center space-x-2 relative">
                        <input v-model="newTag" type="text" class="bg-graylight rounded-xl p-3  w-full" />
                        <button @click="addTag" class="btn bg-gray-200   absolute right-0 top-0 h-full "> <icon-plus />
                        </button>

                    </div>
                </div>
            </div>
            <div class="mt-2 flex flex-wrap gap-2">
                <span v-for="tag in tags" :key="tag" class="badge badge-outline">{{ tag }}</span>
            </div>

            <!-- Explanation Section -->
            <div class="mt-4">
                <label class="block mb-2">Explanation</label>
                <div class="p-6 bg-white shadow-custom rounded-2xl">
                    <div class="flex gap-3 mb-4">
                        <button class="btn ">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.15625 4.03125C4.41797 4.03125 3.84375 4.63281 3.84375 5.34375C3.84375 6.08203 4.41797 6.65625 5.15625 6.65625C5.86719 6.65625 6.46875 6.08203 6.46875 5.34375C6.46875 4.63281 5.86719 4.03125 5.15625 4.03125ZM13.2227 1.625H2.72266C1.76562 1.625 0.972656 2.41797 0.972656 3.375V12.125C0.972656 13.1094 1.76562 13.875 2.72266 13.875H13.2227C14.1797 13.875 14.9727 13.1094 14.9727 12.125V3.375C14.9727 2.41797 14.207 1.625 13.2227 1.625ZM13.6602 11.9609L9.91406 6.875C9.83203 6.73828 9.69531 6.65625 9.53125 6.65625C9.33984 6.65625 9.20312 6.73828 9.09375 6.875L6.19531 10.8125L5.18359 9.55469C5.07422 9.44531 4.9375 9.36328 4.77344 9.36328C4.60938 9.36328 4.47266 9.44531 4.36328 9.55469L2.3125 12.125L2.28516 3.375C2.28516 3.15625 2.50391 2.9375 2.72266 2.9375H13.2227C13.4688 2.9375 13.6602 3.15625 13.6602 3.375V11.9609Z"
                                    fill="#3E3232" fill-opacity="0.5" />
                            </svg>
                            Image</button>
                        <button class="btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.1797 1.57031C15.2461 2.63672 15.2461 4.35938 14.1797 5.42578L11.418 8.1875L11.6641 8.46094C12.0195 8.78906 12.0195 9.36328 11.6641 9.69141C11.3359 10.0469 10.7617 10.0469 10.4336 9.69141L6.05859 5.31641C5.70312 4.98828 5.70312 4.41406 6.05859 4.08594C6.38672 3.73047 6.96094 3.73047 7.28906 4.08594L7.5625 4.33203L10.3242 1.57031C11.3906 0.503906 13.1133 0.503906 14.1797 1.57031ZM2.50391 9.60938L5.8125 6.30078L7.04297 7.53125L3.73438 10.8398C3.65234 10.9219 3.625 11.0312 3.625 11.1406V12.125H4.60938C4.71875 12.125 4.82812 12.0977 4.91016 12.0156L8.21875 8.70703L9.44922 9.9375L6.14062 13.2461C5.73047 13.6562 5.18359 13.875 4.60938 13.875H3.43359L2.33984 14.6133C2.01172 14.8594 1.54688 14.8047 1.24609 14.5039C0.945312 14.2031 0.890625 13.7383 1.13672 13.4102L1.875 12.3164V11.1406C1.875 10.5664 2.09375 10.0195 2.50391 9.60938Z"
                                    fill="#3E3232" fill-opacity="0.5" />
                            </svg>
                            Color</button>
                        <button class="btn">
                            <icon-text /> Text
                        </button>
                        <button class="btn">
                            <icon-align />
                            Align</button>
                        <button class="btn">
                            <IconLink></IconLink>
                            Link
                        </button>
                    </div>
                    <textarea v-model="explanation"
                        class=" p-5 rounded-xl w-full h-88 resize-none bg-graylight outline-none "
                        placeholder="Type ..."></textarea>
                </div>
            </div>
        </div>

        <!-- Right Section: Image Upload -->
        <div class="w-[360px]">
            <label class="block mb-2">Add Image</label>
            <div class="bg-graylight  p-6 rounded-xl w-full text-center relative">
                <div class="border border-dashed rounded-lg border-gray-300 py-20">
                    <input type="file" class="hidden" ref="fileInput" @change="handleFileUpload" />
                    <div v-if="!image" class="text-gray-400 flex flex-col items-center cursor-pointer"
                        @click="$refs.fileInput.click()">
                        <span class="text-4xl">
                            <svg width="120" height="96" viewBox="0 0 120 96" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M40.5 22.5C35.4375 22.5 31.5 26.625 31.5 31.5C31.5 36.5625 35.4375 40.5 40.5 40.5C45.375 40.5 49.5 36.5625 49.5 31.5C49.5 26.625 45.375 22.5 40.5 22.5ZM95.8125 6H23.8125C17.25 6 11.8125 11.4375 11.8125 18V78C11.8125 84.75 17.25 90 23.8125 90H95.8125C102.375 90 107.812 84.75 107.812 78V18C107.812 11.4375 102.562 6 95.8125 6ZM98.8125 76.875L73.125 42C72.5625 41.0625 71.625 40.5 70.5 40.5C69.1875 40.5 68.25 41.0625 67.5 42L47.625 69L40.6875 60.375C39.9375 59.625 39 59.0625 37.875 59.0625C36.75 59.0625 35.8125 59.625 35.0625 60.375L21 78L20.8125 18C20.8125 16.5 22.3125 15 23.8125 15H95.8125C97.5 15 98.8125 16.5 98.8125 18V76.875Z"
                                    fill="#3E3232" fill-opacity="0.25" />
                            </svg>
                        </span>
                        <p>Drop Image Here, Paste Or</p>
                        <button class="btn !border !border-gray-200  mt-2">
                            <icon-plus />
                            <span>Select</span>
                        </button>
                    </div>
                    <img v-if="image" :src="image" class="w-24 h-24 object-cover rounded-lg mt-2" />
                </div>
            </div>
            <!-- Actions -->
            <div class="mt-6 grid grid-cols-3  gap-4">
                <button class="btn  py-2 bg-graylight ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 7.75C7.01562 7.75 6.25 8.54297 6.25 9.5C6.25 10.4844 7.01562 11.25 8 11.25C8.95703 11.25 9.75 10.4844 9.75 9.5C9.75 8.54297 8.95703 7.75 8 7.75ZM13.7148 4.30469L11.418 2.00781C11.1992 1.78906 10.8438 1.625 10.5156 1.625H3.625C2.64062 1.625 1.875 2.41797 1.875 3.375V12.125C1.875 13.1094 2.64062 13.875 3.625 13.875H12.375C13.332 13.875 14.125 13.1094 14.125 12.125V5.23438C14.125 4.90625 13.9609 4.55078 13.7148 4.30469ZM5.375 2.9375H9.3125V5.125H5.375V2.9375ZM12.8125 12.125C12.8125 12.3711 12.5938 12.5625 12.375 12.5625H3.625C3.37891 12.5625 3.1875 12.3711 3.1875 12.125V3.375C3.1875 3.15625 3.37891 2.9375 3.625 2.9375H4.0625V5.78125C4.0625 6.16406 4.33594 6.4375 4.71875 6.4375H9.96875C10.3242 6.4375 10.625 6.16406 10.625 5.78125V3.04688L12.7578 5.20703C12.7852 5.23438 12.8125 5.26172 12.8125 5.31641V12.125Z"
                            fill="#3E3232" fill-opacity="0.5" />
                    </svg>
                    <span>Draft</span>
                </button>
                <button class="btn  py-2 bg-graylight ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.5 7.75C4.5 5.83594 6.05859 4.25 8 4.25C9.91406 4.25 11.5 5.83594 11.5 7.75C11.5 9.69141 9.91406 11.25 8 11.25C6.05859 11.25 4.5 9.69141 4.5 7.75ZM8 9.9375C9.20312 9.9375 10.1875 8.98047 10.1875 7.75C10.1875 6.54688 9.20312 5.5625 8 5.5625C7.97266 5.5625 7.94531 5.5625 7.91797 5.5625C7.97266 5.72656 8 5.86328 8 6C8 6.98438 7.20703 7.75 6.25 7.75C6.08594 7.75 5.94922 7.75 5.8125 7.69531C5.8125 7.72266 5.8125 7.75 5.8125 7.75C5.8125 8.98047 6.76953 9.9375 8 9.9375ZM2.72266 3.83984C4.00781 2.63672 5.78516 1.625 8 1.625C10.1875 1.625 11.9648 2.63672 13.25 3.83984C14.5352 5.01562 15.3828 6.4375 15.793 7.42188C15.875 7.64062 15.875 7.88672 15.793 8.10547C15.3828 9.0625 14.5352 10.4844 13.25 11.6875C11.9648 12.8906 10.1875 13.875 8 13.875C5.78516 13.875 4.00781 12.8906 2.72266 11.6875C1.4375 10.4844 0.589844 9.0625 0.179688 8.10547C0.0976562 7.88672 0.0976562 7.64062 0.179688 7.42188C0.589844 6.4375 1.4375 5.01562 2.72266 3.83984ZM8 2.9375C6.19531 2.9375 4.74609 3.75781 3.625 4.79688C2.55859 5.78125 1.84766 6.92969 1.46484 7.75C1.84766 8.57031 2.55859 9.74609 3.625 10.7305C4.74609 11.7695 6.19531 12.5625 8 12.5625C9.77734 12.5625 11.2266 11.7695 12.3477 10.7305C13.4141 9.74609 14.125 8.57031 14.5078 7.75C14.125 6.92969 13.4141 5.78125 12.3477 4.79688C11.2266 3.75781 9.77734 2.9375 8 2.9375Z"
                            fill="#3E3232" fill-opacity="0.5" />
                    </svg>
                    <span>Preview </span>
                </button>
                <button class="btn py-2  bg-mainpink/75 text-white "> <icon-share /> Public</button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import IconLink from '@/components/icons/IconLink.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import IconShare from '@/components/icons/IconShare.vue';
import IconAlign from '@/components/icons/IconAlign.vue';
import iconText from '@/components/icons/IconText.vue';

const activeTab = ref('post');
const title = ref('');
const newTag = ref('');
const tags = ref([]);
const explanation = ref('');
const image = ref(null);
const fileInput = ref(null);

const addTag = () => {
    if (newTag.value.trim()) {
        tags.value.push(newTag.value.trim());
        newTag.value = '';
    }
};

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        image.value = URL.createObjectURL(file);
    }
};
</script>

<style scoped>
.shadow-custom {
    box-shadow: 0px 0px 32px 0px #00000012;
}

.active {
    position: relative;
    background: #f5f5f5;
    font-weight: 500;
}

.active::after {
    content: '';
    position: absolute;
    top: 0.rem;
    left: 1rem;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: #ff0062;
    margin-top: 4px;
}
</style>