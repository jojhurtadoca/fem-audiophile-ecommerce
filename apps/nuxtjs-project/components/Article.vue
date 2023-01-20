<template>
    <article class="feature__item-container">
        <picture class="feature__picture">
            <source v-for="(value, name, index) in feature?.pictures" :srcset="'_nuxt/' + value.src" :media="getResponsiveValue(name.toString())" :key="index">
            <img class="feature__image" :src="'_nuxt/' + feature?.image?.src" :alt="feature?.image?.alt">
        </picture>
        <div class="feature__content">
        <p class="feature__title">{{ feature?.title }}</p>
        <p class="feature__body">{{ feature?.description }}</p>
        <NuxtLink :to="feature?.anchor?.url" class="feature__link button__secondary">{{ feature?.anchor?.label }}</NuxtLink>
        </div>
    </article>
</template>
<script lang="ts">
import { ResponsiveInfo } from '~~/store/model/responsiveInfo';
import { store } from '~~/store/state/state';
   export default{
    setup() {
      const useStore = store();
      return { useStore }
    },
    props: ['feature'],
    methods: {
      getResponsiveValue(key: string): string {
        return this.useStore.responsiveInfo[key as keyof ResponsiveInfo];
      }
    }
  }
</script>