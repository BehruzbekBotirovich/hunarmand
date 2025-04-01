<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <!-- Поля ввода -->
      <div class="grid grid-cols-3 gap-6">
        <div>
          <label class="block font-medium mb-2">First Name</label>
          <input v-model="form.firstName" type="text" required class="input-field" />
        </div>
        <div>
          <label class="block font-medium mb-2">Last Name</label>
          <input v-model="form.lastName" type="text" required class="input-field" />
        </div>
        <div>
          <label class="block font-medium mb-2">User Name</label>
          <input v-model="form.userName" type="text" required class="input-field" />
        </div>
        <div>
          <label class="block font-medium mb-2">Old Password</label>
          <input v-model="form.oldPassword" type="password" class="input-field" />
        </div>
        <div>
          <label class="block font-medium mb-2">Password</label>
          <input v-model="form.password" type="password" required class="input-field" />
        </div>
        <div>
          <label class="block font-medium mb-2">Email</label>
          <input v-model="form.email" type="email" required class="input-field" />
        </div>
      </div>

      <!-- Баннер -->
      <div class="bg-graylight p-6 rounded-xl w-full text-center relative my-10">
        <div class="border border-dashed rounded-lg border-gray-300 py-6">
          <input type="file" class="hidden" ref="fileInput" @change="handleFileUpload" />
          <div
            v-if="!image"
            class="text-gray-400 flex flex-col items-center cursor-pointer"
            @click="$refs.fileInput.click()"
          >
            <div class="flex items-center gap-4">
              <svg
                width="120"
                height="96"
                viewBox="0 0 120 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.5 22.5C35.4375 22.5 31.5 26.625 31.5 31.5C31.5 36.5625 35.4375 40.5 40.5 40.5C45.375 40.5 49.5 36.5625 49.5 31.5C49.5 26.625 45.375 22.5 40.5 22.5ZM95.8125 6H23.8125C17.25 6 11.8125 11.4375 11.8125 18V78C11.8125 84.75 17.25 90 23.8125 90H95.8125C102.375 90 107.812 84.75 107.812 78V18C107.812 11.4375 102.562 6 95.8125 6ZM98.8125 76.875L73.125 42C72.5625 41.0625 71.625 40.5 70.5 40.5C69.1875 40.5 68.25 41.0625 67.5 42L47.625 69L40.6875 60.375C39.9375 59.625 39 59.0625 37.875 59.0625C36.75 59.0625 35.8125 59.625 35.0625 60.375L21 78L20.8125 18C20.8125 16.5 22.3125 15 23.8125 15H95.8125C97.5 15 98.8125 16.5 98.8125 18V76.875Z"
                  fill="#3E3232"
                  fill-opacity="0.25"
                />
              </svg>
              <div>
                <p>Drop Image Here or Paste</p>
                <button class="btn !border !border-gray-200 mt-2 w-full">
                  <icon-plus />
                  <span>Select</span>
                </button>
              </div>
            </div>
          </div>
          <img v-if="image" :src="image" class="w-24 h-24 object-cover rounded-lg mt-2" />
        </div>
      </div>

      <!-- Описание и изображение -->
      <div class="grid grid-cols-4 gap-6 mt-6">
        <div class="col-span-3">
          <label class="block font-medium mb-8">Explanation</label>
          <text-format-input v-model="form.explanation" />
        </div>

        <div>
          <image-uploader-component />
        </div>
      </div>

      <!-- Кнопка сохранения -->
      <div class="mt-6 flex justify-end">
        <button type="submit" class="btn bg-mainpink/75 flex items-center gap-2 text-white">
          <icon-draft-save />
          <span>Save</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconDraftSave from '@/components/icons/IconDraftSave.vue'
import TextFormatInput from '@/components/TextFormatInput.vue'
import ImageUploaderComponent from '@/components/ImageUploaderComponent.vue'

const form = ref({
  firstName: '',
  lastName: '',
  userName: '',
  oldPassword: '',
  password: '',
  email: '',
  explanation: '',
  banner: null,
  image: null,
})

const handleFileUpload = (event, type) => {
  form.value[type] = event.target.files[0]
}

const submitForm = () => {
  const formData = new FormData()
  Object.keys(form.value).forEach((key) => {
    formData.append(key, form.value[key])
  })

  // Пример запроса на бэкенд
  fetch('/api/submit-form', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
</script>

<style scoped>
.input-field {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
}

.file-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #f5f5f5;
}
</style>
