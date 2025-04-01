<template>
  <!-- Tabs -->
  <div class="flex space-x-4 my-6">
    <button @click="activeTab = 'post'" :class="{ active: activeTab === 'post' }" class="btn px-7 btn-ghost">
      Send Post
    </button>
    <button @click="activeTab = 'video'" :class="{ active: activeTab === 'video' }" class="btn px-7 btn-ghost">
      Send Video
    </button>
  </div>
  <div class="flex flex-col lg:flex-row gap-6">
    <!-- Left Section -->
    <div class="flex-1">
      <!-- Title and Tags -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block mb-2">Title</label>
          <input v-model="title" type="text" class="bg-graylight rounded-xl p-3 w-full" />
        </div>

        <div>
          <label class="block mb-2">Add tags</label>
          <div class="flex items-center space-x-2 relative">
            <input v-model="newTag" type="text" class="bg-graylight rounded-xl p-3 w-full" />
            <button @click="addTag" class="btn bg-gray-200 absolute right-0 top-0 h-full">
              <icon-plus />
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
        <text-format-input v-model="explanation" />
      </div>
    </div>

    <!-- Right Section: Image Upload -->
    <div class="w-[360px]">
      <label class="block mb-2">Add Image</label>
      <div class="bg-graylight p-6 rounded-xl w-full text-center relative">
        <div class="border border-dashed rounded-lg border-gray-300 py-20">
          <input type="file" class="hidden" ref="fileInput" @change="handleFileUpload" />
          <div v-if="!image" class="text-gray-400 flex flex-col items-center cursor-pointer"
            @click="$refs.fileInput.click()">
            <span class="text-4xl">
              <svg width="120" height="96" viewBox="0 0 120 96" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <img v-if="image" :src="image" class="w-24 h-24 object-cover rounded-lg mt-2" />
        </div>
      </div>
      <!-- Actions -->
      <div class="mt-6 grid grid-cols-3 gap-4">
        <button class="btn py-2 bg-graylight">
          <icon-draft-save />
          <span>Draft</span>
        </button>
        <button class="btn py-2 bg-graylight">
          <icon-eye-view />
          <span>Preview </span>
        </button>
        <button class="btn py-2 bg-mainpink/75 text-white">
          <icon-share />
          Public
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconShare from '@/components/icons/IconShare.vue'
import IconEyeView from '@/components/icons/IconEyeView.vue'
import IconDraftSave from '@/components/icons/IconDraftSave.vue'

import TextFormatInput from '@/components/TextFormatInput.vue'

const activeTab = ref('post')
const title = ref('')
const newTag = ref('')
const tags = ref([])
const explanation = ref('')
const image = ref(null)
const fileInput = ref(null)

const addTag = () => {
  if (newTag.value.trim()) {
    tags.value.push(newTag.value.trim())
    newTag.value = ''
  }
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    image.value = URL.createObjectURL(file)
  }
}
</script>

<style scoped>
.active {
  position: relative;
  background: #f5f5f5;
  font-weight: 500;
}

.active::after {
  content: '';
  position: absolute;
  top: 30%;
  left: 1rem;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: #ff0062;
  margin-top: 4px;
}
</style>
