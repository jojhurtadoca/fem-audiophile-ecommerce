<template>
  <header class="header">
    <section class="header__top">
      <NuxtLink to="/">
        <img
          class="header__logo"
          src="../assets/icons/logo.svg"
          alt="Audiophile logo"
        />
      </NuxtLink>
      <SidebarComponent :is-mobile="mobile" />
      <Cart />
      <ToastComponent />
    </section>
    <TitleComponent v-if="title && title !== ''" :title="title" />
  </header>
</template>
<script lang="ts" setup>
import { store } from "~~/store/state/state";
import { onMounted } from "vue";
import { isMobile } from "../util/windowUtil";
const useStore = store();

const title = computed(() => useStore.$state.titleComponent);
const mobile = ref(isMobile());
onMounted(() => {
  window.addEventListener("resize", () => {
    mobile.value = isMobile();
  });
});
</script>
<style lang="scss">
@use "../assets/styles/components/header.scss";
@use "../assets/styles/components/nav.scss";
</style>
