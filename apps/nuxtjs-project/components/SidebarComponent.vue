<template>
    <div>
        <button class="nav__toggle" @click="sidebarVisible = true">
            Toggle main navigation
        </button>
        <Sidebar v-model:visible="sidebarVisible" class="p-sidebar-sm" :baseZIndex="10000">
            <ul class="sidebar">
                <li class="sidebar__element">
                    <NuxtLink to="/" class="nav__link link__primary">Home</NuxtLink>
                </li>
                <li class="sidebar__element">
                    <NuxtLink to="/categories/headphones" class="nav__link link__primary">Headphones</NuxtLink>
                </li>
                <li class="sidebar__element">
                    <NuxtLink to="/categories/speakers" class="nav__link link__primary">Speakers</NuxtLink>
                </li>
                <li class="sidebar__element">
                    <NuxtLink to="/categories/earphones" class="nav__link link__primary">Earphones</NuxtLink>
                </li>
            </ul>
        </Sidebar>
    </div>    
</template>
<script lang="ts" setup>
  import Sidebar from 'primevue/sidebar';
  import { onMounted } from 'vue';

  const sidebarVisible = ref(false);

  onMounted(() => {
    window.addEventListener('resize', () => sidebarVisible.value = false);
  });

</script>