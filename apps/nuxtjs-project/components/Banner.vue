<template>
  <section class="hero">
    <div class="hero__top">
      <picture class="hero__picture">
        <source
          v-if="bannerData?.pictures?.desktop"
          :key="1"
          :srcset="'_nuxt/' + bannerData?.pictures?.desktop.src"
          :media="getResponsiveValue('desktop')"
        />
        <source
          v-if="bannerData?.pictures?.tablet"
          :key="2"
          :srcset="'_nuxt/' + bannerData?.pictures?.tablet.src"
          :media="getResponsiveValue('tablet')"
        />
        <img
          class="hero__image"
          :src="'_nuxt/' + bannerData?.image?.src"
          :alt="bannerData?.image?.alt"
        />
      </picture>
    </div>
    <div class="hero__content">
      <h1 class="hero__title">
        <span class="hero__eyebrow">{{ bannerData?.title?.span }}</span>
        {{ bannerData?.title?.label }}
      </h1>
      <p class="hero__body">{{ bannerData?.text?.p }}</p>
      <NuxtLink
        class="hero__button button__primary button__primary--inverse"
        :to="bannerData?.anchor?.url || '/'"
        >{{ bannerData?.anchor?.label }}</NuxtLink
      >
    </div>
  </section>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { BannerModel } from "~~/store/model/Banner";
import { getResponsiveValue } from "~~/util/storeUtil";

defineProps({
  bannerData: { type: Object as PropType<BannerModel>, default: () => {} },
});
</script>
<style lang="scss">
@use "../assets/styles/components/hero.scss";
@use "../assets/styles/components/button.scss";
</style>
