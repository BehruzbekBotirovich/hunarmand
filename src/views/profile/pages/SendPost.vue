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
      <image-uploader-component/>
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
import ImageUploaderComponent from '@/components/ImageUploaderComponent.vue'

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
