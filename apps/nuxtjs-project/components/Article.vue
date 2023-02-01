<template>
    <article class="feature__item-container">
        <picture class="feature__picture">
          <source v-if="feature?.pictures?.desktop" :srcset="'/_nuxt/' + feature?.pictures?.desktop.src" :media="getResponsiveValue('desktop')" :key="1">
          <source v-if="feature?.pictures?.tablet" :srcset="'/_nuxt/' + feature?.pictures?.tablet.src" :media="getResponsiveValue('tablet')" :key="2">
            <img class="feature__image" :src="'/_nuxt/' + feature?.image?.src" :alt="feature?.image?.alt">
        </picture>
        <div class="feature__content">
        <p class="feature__title">{{ feature?.title }}</p>
        <p class="feature__body">{{ feature?.description }}</p>
        <NuxtLink :to="feature?.anchor?.url || '/'" class="feature__link button__secondary">{{ feature?.anchor?.label }}</NuxtLink>
        </div>
    </article>
</template>
<script lang="ts" setup>
  import { PropType } from 'vue';
  import { getResponsiveValue } from '~~/util/storeUtil';
  import { Feature } from '../store/model/Feature';

  defineProps({
    feature: Object as PropType<Feature>,
  });

</script>