<template>
  <section class="categories">
    <ul class="categories__list">
      <li v-for="(item, index) in categories" :key="index" class="category">
        <img
          class="category__image"
          :src="'/_nuxt/' + item?.image?.src"
          :alt="item?.image?.alt"
        />
        <p class="category__title">{{ item?.name }}</p>
        <NuxtLink
          class="category__link button__tertiary"
          :to="item?.anchor?.url"
          >Shop</NuxtLink
        >
      </li>
    </ul>
  </section>
</template>
<script lang="ts" setup>
import { Category } from "~~/store/model/Category";

defineProps({
  categories: { type: Array<Category>, default: () => [] },
});
</script>
<style lang="scss">
@use "../assets/styles/components/categories.scss";
@use "../assets/styles/components/button.scss";
</style>
