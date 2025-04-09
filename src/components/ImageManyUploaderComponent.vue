<template>
    <div class="grid grid-cols-4 gap-4 w-full">
        <!-- Загруженные изображения -->
        <div v-for="(image, index) in images" :key="index"
            class="relative aspect-square  rounded-xl overflow-hidden border border-gray-300">
            <img :src="image.url" class="object-cover w-full h-full" />
            <button
                class="absolute inset-0 bg-black/40 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                @click="removeImage(index)">
                <IconTrashDelete class="w-6 h-6" />
            </button>
        </div>

        <!-- Placeholder ячейки -->
        <div v-for="n in emptySlots" :key="'placeholder-' + n"
            class="aspect-square  rounded-xl border border-dashed border-gray-400 flex items-center justify-center bg-gray-100">
            <svg width="50%" height="50%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.15625 4.03125C4.41797 4.03125 3.84375 4.63281 3.84375 5.34375C3.84375 6.08203 4.41797 6.65625 5.15625 6.65625C5.86719 6.65625 6.46875 6.08203 6.46875 5.34375C6.46875 4.63281 5.86719 4.03125 5.15625 4.03125ZM13.2227 1.625H2.72266C1.76562 1.625 0.972656 2.41797 0.972656 3.375V12.125C0.972656 13.1094 1.76562 13.875 2.72266 13.875H13.2227C14.1797 13.875 14.9727 13.1094 14.9727 12.125V3.375C14.9727 2.41797 14.207 1.625 13.2227 1.625ZM13.6602 11.9609L9.91406 6.875C9.83203 6.73828 9.69531 6.65625 9.53125 6.65625C9.33984 6.65625 9.20312 6.73828 9.09375 6.875L6.19531 10.8125L5.18359 9.55469C5.07422 9.44531 4.9375 9.36328 4.77344 9.36328C4.60938 9.36328 4.47266 9.44531 4.36328 9.55469L2.3125 12.125L2.28516 3.375C2.28516 3.15625 2.50391 2.9375 2.72266 2.9375H13.2227C13.4688 2.9375 13.6602 3.15625 13.6602 3.375V11.9609Z"
                    fill="#3E323280" fill-opacity="0.5" />
            </svg>
        </div>

        <!-- Кнопка загрузки изображения -->
        <label v-if="images.length < maxImages" for="imageInput"
            class="aspect-square  rounded-xl border border-dashed border-gray-400 flex items-center justify-center cursor-pointer bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
        </label>

        <!-- Скрытый input -->
        <input id="imageInput" type="file" accept="image/*" ref="fileInput" @change="handleFileChange" multiple
            class="hidden" />

    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import IconTrashDelete from '@/components/icons/IconTrashDelete.vue'
import IconImageDefault from '@/components/icons/IconImageDefault.vue'
interface ImageItem {
    file: File
    url: string
}

const images = ref<ImageItem[]>([])
const maxImages = 8

const fileInput = ref<HTMLInputElement | null>(null)

const triggerFileInput = () => {
    fileInput.value?.click()
}

const handleFileChange = (e: Event) => {
    const files = (e.target as HTMLInputElement).files
    if (!files) return

    const newImages: ImageItem[] = []

    for (let i = 0; i < files.length && images.value.length + newImages.length < maxImages; i++) {
        const file = files[i]
        const url = URL.createObjectURL(file)
        newImages.push({ file, url })
    }

    images.value.push(...newImages)

    if (fileInput.value) {
        fileInput.value.value = ''
    }
}

const removeImage = (index: number) => {
    const removed = images.value.splice(index, 1)
    URL.revokeObjectURL(removed[0].url)
}

const emptySlots = computed(() => {
    return Math.max(0, maxImages - images.value.length - 1)
})
</script>