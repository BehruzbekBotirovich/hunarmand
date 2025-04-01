<template>
  <div class="container">
    <div class="breadcrumbs mb-10 text-sm">
      <ul>
        <li><a>Home</a></li>
        <li class="text-graydark/50"><a>Profile</a></li>
      </ul>
    </div>
    <!-- cover & writer info  -->
    <div class="bg-graylight p-3 rounded-2xl mb-10">
      <div class="mb-4">
        <img src="/src/assets/images/remove/cover.jpg" class="w-full rounded-xl h-[150px] object-cover" alt="" />
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img class="w-20 aspect-square rounded-xl" src="/src/assets/images/remove/avatar3.jpg" alt="" />
          <h3 class="">Develepbek Developiriddinov</h3>
        </div>

        <ul class="writer-info">
          <li class="active"><router-link to="">Marked</router-link></li>
          <li><router-link to="/profile/send">Send Post</router-link></li>
          <li><router-link to="/profile/posts">Posts</router-link></li>
        </ul>
        <router-link to="/profile-edit">
          <button class="btn text-mainpink/75 !border !border-gray-200">
            <icon-edit-profile />
            <span>Edit Profile</span>
          </button>
        </router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import IconEditProfile from '@/components/icons/IconEditProfile.vue'
</script>

<style scoped>
.writer-info {
  display: flex;
  align-items: center;
  gap: 4rem;
  color: #3e3232bc;
}

.writer-info>li {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.writer-info>li.active {
  position: relative;
}

.writer-info>li.active::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 4px;
  border-radius: 4px;
  background-color: rgb(255, 0, 93);
  bottom: -4px;
  left: 0;
}
</style>
