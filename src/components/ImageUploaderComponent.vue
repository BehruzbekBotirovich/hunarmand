<template>
    <divz>
        <label class="block font-medium mb-8">Add Image</label>
        <div class="bg-graylight p-6 rounded-xl w-full text-center relative">
            <div class="border border-dashed rounded-lg border-gray-300 py-10">
                <input type="file" class="hidden" ref="fileInput" @change="handleFileUpload" accept="image/*" />
                <div v-if="!modelValue" class="text-gray-400 flex flex-col items-center cursor-pointer space-y-4"
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
                    <button class="btn !border !border-gray-200 mt-2">
                        <icon-plus />
                        <span>Select</span>
                    </button>
                </div>
                <img v-if="modelValue" :src="modelValue" class="w-24 h-24 object-cover rounded-lg mt-2" />
            </div>
        </div>
    </divz>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            emit('update:modelValue', reader.result); // Двустороннее связывание
        };
        reader.readAsDataURL(file);
    }
};
</script>