<template>
    <header class="header">
      <section class="header__top">
        <img
          class="header__logo"
          src="../assets/icons/logo.svg"
          alt="Audiophile logo"
        >
        <nav class="header__nav nav" aria-label="Main page navigation">
          <ul class="nav__list">
            <li class="nav__list-item">
              <NuxtLink to="/" class="nav__link link__primary">Home</NuxtLink>
            </li>
            <li class="nav__list-item">
              <NuxtLink to="/categories/headphones" class="nav__link link__primary">Headphones</NuxtLink>
            </li>
            <li class="nav__list-item">
              <NuxtLink to="/categories/speakers" class="nav__link link__primary">Speakers</NuxtLink>
            </li>
            <li class="nav__list-item">
              <NuxtLink to="/categories/earphones" class="nav__link link__primary">Earphones</NuxtLink>
            </li>
          </ul>
          <SidebarComponent />
        </nav>
        <button class="header__cart">
          Add to cart
        </button>
      </section>
      <TitleComponent :title="title" v-if="title && title !== ''" />
    </header>
</template>
<script lang="ts" setup>
  import { store } from '~~/store/state/state';
  const useStore = store();

  const title = ref('');
  watch(
    useStore.$state,
    (state) => {
      title.value = state.titleComponent;
    },
    { deep: true }
  );

</script>