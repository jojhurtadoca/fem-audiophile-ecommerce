<template>
    <section class="hero">
      <div class="hero__top">
        <picture class="hero__picture">
          <source v-for="(value, name, index) in bannerData.pictures" :srcset="'_nuxt/' + value.src" :media="getResponsiveValue(name.toString())" :key="index">
          <img class="hero__image" :src="'_nuxt/' + bannerData?.image?.src" :alt="bannerData?.image?.alt" >
        </picture>
      </div>
      <div class="hero__content">
        <h1 class="hero__title">
          <span class="hero__eyebrow">{{ bannerData?.title?.span }}</span>
          {{ bannerData?.title?.label }}
        </h1>
        <p class="hero__body">{{ bannerData?.text?.p }}</p>
        <NuxtLink class="hero__button button__primary button__primary--inverse" :to="bannerData?.anchor?.url" >{{ bannerData?.anchor?.label }}</NuxtLink>
      </div>
    </section>
</template>
<script lang="ts">
import { ResponsiveInfo } from '~~/store/model/responsiveInfo';
import { store } from '~~/store/state/state';
   export default{
    setup() {
      const useStore = store();
      return { useStore }
    },
    props: ['bannerData'],
    methods: {
      getResponsiveValue(key: string): string {
        return this.useStore.responsiveInfo[key as keyof ResponsiveInfo];
      }
    }
  }
</script>