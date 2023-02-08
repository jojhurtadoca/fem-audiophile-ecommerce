<template>
  <ul :class="isMobile ? 'sidebar' : 'nav__list'">
    <li :class="isMobile ? 'sidebar__element' : 'nav__list-item'">
      <NuxtLink to="/" class="nav__link link__primary">Home</NuxtLink>
    </li>
    <li :class="isMobile ? 'sidebar__element' : 'nav__list-item'">
      <NuxtLink to="/categories/headphones" class="nav__link link__primary"
        >Headphones</NuxtLink
      >
    </li>
    <li :class="isMobile ? 'sidebar__element' : 'nav__list-item'">
      <NuxtLink to="/categories/speakers" class="nav__link link__primary"
        >Speakers</NuxtLink
      >
    </li>
    <li :class="isMobile ? 'sidebar__element' : 'nav__list-item'">
      <NuxtLink to="/categories/earphones" class="nav__link link__primary"
        >Earphones</NuxtLink
      >
    </li>
  </ul>
</template>
<script setup>
defineProps({
  isMobile: { type: Boolean, default: false },
});
</script>
<style lang="scss">
@use "../assets/styles/components/nav.scss";
</style>
