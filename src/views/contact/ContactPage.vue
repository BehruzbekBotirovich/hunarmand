<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <!-- Поля ввода -->
      <div class="grid grid-cols-3 gap-6">
        <div>
          <label class="block font-medium mb-2">First Name</label>
          <input v-model="form.subject" type="text" required class="input-field" />
        </div>
        <div>
          <label class="block font-medium mb-2">Last Name</label>
          <input v-model="form.name" type="text" required class="input-field" />
        </div>
        <div>
          <label class="block font-medium mb-2">User Name</label>
          <input v-model="form.email" type="text" required class="input-field" />
        </div>
      </div>

      <!-- Описание и изображение -->
      <div class="grid grid-cols-4 gap-6 mt-6">
        <div class="col-span-3">
          <label class="block font-medium mb-8">Explanation</label>
          <text-format-input v-model="form.explanation" />
        </div>

        <div>
          <image-uploader-component v-model="form.img" />
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
import IconDraftSave from '@/components/icons/IconDraftSave.vue'
import TextFormatInput from '@/components/TextFormatInput.vue'
import ImageUploaderComponent from '@/components/ImageUploaderComponent.vue'

const form = ref({
  subject: '',
  name: '',
  email: '',
  img: '',
})

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
