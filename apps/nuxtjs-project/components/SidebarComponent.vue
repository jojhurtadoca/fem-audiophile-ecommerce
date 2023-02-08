<template>
  <nav class="header__nav nav" aria-label="Main page navigation">
    <button class="nav__toggle" @click="isVisible = true">
      Toggle main navigation
    </button>
    <Sidebar
      v-model:visible="isVisible"
      class="p-sidebar-sm"
      :base-z-index="10000"
      v-if="isMobile"
    >
      <NavigationElements :is-mobile="true" />
    </Sidebar>
    <NavigationElements v-if="!isMobile" :is-mobile="false" />
  </nav>
</template>
<script lang="ts" setup>
import Sidebar from "primevue/sidebar";
defineProps({
  isMobile: { type: Boolean, default: false },
});
const isVisible = ref(false);
</script>
<style lang="scss">
@use "../assets/styles/components/sidebar.scss";
@use "../assets/styles/components/link.scss";
</style>
