<template>
  <div class="container">
    <div class="breadcrumbs mb-10 text-sm">
      <ul>
        <li><a>Home</a></li>
        <li class="text-graydark/50"><a>Profile</a></li>
      </ul>
    </div>
    <!-- cover & profile info  -->
    <div class="md:hidden bg-graylight p-3 rounded-2xl mb-6">
      <div class="mb-4">
        <img src="/src/assets/images/remove/cover.jpg" class="w-full rounded-xl h-[150px] object-cover" alt="" />
      </div>
      <!-- info desktop -->
      <div class="hidden  md:flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img class="w-20 aspect-square rounded-xl" src="/src/assets/images/remove/avatar3.jpg" alt="" />
          <h3 class="">Develepbek Developiriddinov</h3>
        </div>

        <ul class="profile-info">
          <li :class="{ active: $route.path === '/profile' }">
            <router-link to="/profile">Marked</router-link>
          </li>
          <li :class="{ active: $route.path === '/profile/send' }">
            <router-link to="/profile/send">Send Post</router-link>
          </li>
          <li :class="{ active: $route.path === '/profile/posts' }">
            <router-link to="/profile/posts">Posts</router-link>
          </li>
        </ul>

        <router-link to="/profile-edit">
          <button class="btn text-mainpink/75 !border !border-gray-200">
            <icon-edit-profile />
            <span>Edit Profile</span>
          </button>
        </router-link>
      </div>
      <!-- info-mobile -->
      <div class="flex md:hidden items-center gap-2 w-full">
        <div class="flex items-center gap-2">
          <img class="w-20 aspect-square rounded-xl" src="/src/assets/images/remove/avatar3.jpg" alt="" />
        </div>
        <div class="w-full">
          <div class="flex items-center justify-between">
            <h3>Develepbek Developiriddinov</h3>
            <router-link to="/profile-edit">
              <button class="btn text-mainpink/75 !border !border-gray-200">
                <icon-edit-profile />
              </button>
            </router-link>
          </div>
          <ul class="profile-info pb-3">
            <li :class="{ active: $route.path === '/profile' }">
              <router-link to="/profile">Marked</router-link>
            </li>
            <li :class="{ active: $route.path === '/profile/send' }">
              <router-link to="/profile/send">Send Post</router-link>
            </li>
            <li :class="{ active: $route.path === '/profile/posts' }">
              <router-link to="/profile/posts">Posts</router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import IconEditProfile from '@/components/icons/IconEditProfile.vue'

const route = useRoute()
</script>

<style scoped>
.profile-info {
  display: flex;
  align-items: center;
  gap: 4rem;
  color: #3e3232bc;
}

.profile-info>li {
  display: flex;
  font-weight: 550;
  align-items: center;
  gap: 0.25rem;
}

.profile-info>li.active {
  position: relative;
}

.profile-info>li::before {
  content: '';
  position: absolute;
  width: 0px;
  height: 4px;
  border-radius: 4px;
  background-color: rgb(255, 0, 93);
  bottom: -4px;
  left: 0;
  transition: all 0.3s linear;
}

.profile-info>li.active::before {
  width: 12px;
  transition: all 0.2s linear;
}
</style>
