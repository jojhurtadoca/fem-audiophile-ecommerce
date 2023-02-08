<template>
  <article class="feature__item-container">
    <picture class="feature__picture">
      <source
        v-if="feature?.pictures?.desktop"
        :key="1"
        :srcset="'/_nuxt/' + feature?.pictures?.desktop.src"
        :media="getResponsiveValue('desktop')"
      />
      <source
        v-if="feature?.pictures?.tablet"
        :key="2"
        :srcset="'/_nuxt/' + feature?.pictures?.tablet.src"
        :media="getResponsiveValue('tablet')"
      />
      <img
        class="feature__image"
        :src="'/_nuxt/' + feature?.image?.src"
        :alt="feature?.image?.alt"
      />
    </picture>
    <div class="feature__content">
      <p class="feature__title">{{ feature?.title }}</p>
      <p class="feature__body">{{ feature?.description }}</p>
      <NuxtLink
        :to="feature?.anchor?.url || '/'"
        class="feature__link"
        :class="
          feature.noOverlap
            ? 'button__secondary'
            : feature.bigImage
            ? isMobileOrTable()
              ? 'button__transparent'
              : 'button__secondary'
            : isMobileOrTable()
            ? 'button__transparent'
            : 'button__secondary'
        "
        >{{ feature?.anchor?.label }}</NuxtLink
      >
    </div>
  </article>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { getResponsiveValue } from "~~/util/storeUtil";
import { isMobileOrTable } from "~~/util/windowUtil";
import { Feature } from "../store/model/Feature";

defineProps({
  feature: { type: Object as PropType<Feature>, default: () => {} },
});
</script>
