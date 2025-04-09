<template>
  <div class="p-6 bg-white shadow-custom rounded-2xl">
    <div class="flex gap-3 mb-4">
      <button class="btn">
        <icon-image-default />
        <span>Image</span>
      </button>
      <button class="btn">
        <icon-drop-color />
        <span>Color</span>
      </button>
      <button class="btn">
        <icon-text />
        <span>Text</span>
      </button>
      <button class="btn">
        <icon-align />
        <span>Align</span>
      </button>
      <button class="btn">
        <IconLink></IconLink>
        <span>Link</span>
      </button>
    </div>
    <textarea v-model="explanation" class="p-5 rounded-xl w-full h-60 resize-none bg-graylight outline-none"
      placeholder="Type ..."></textarea>
  </div>
</template>

<script setup>
import IconLink from '@/components/icons/IconLink.vue'
import IconAlign from '@/components/icons/IconAlign.vue'
import iconText from '@/components/icons/IconText.vue'
import IconDropColor from './icons/IconDropColor.vue'
import IconImageDefault from './icons/IconImageDefault.vue'
import { ref } from 'vue'
</script>

<style></style>
