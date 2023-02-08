<template>
  <section class="overview">
    <picture class="overview__picture">
      <source
        v-if="overview?.pictures?.desktop"
        :key="1"
        :srcset="'/_nuxt/' + overview?.pictures?.desktop.src"
        :media="getResponsiveValue('desktop')"
      />
      <source
        v-if="overview?.pictures?.tablet"
        :key="2"
        :srcset="'/_nuxt/' + overview?.pictures?.tablet.src"
        :media="getResponsiveValue('tablet')"
      />
      <img
        class="overview__image"
        :src="'/_nuxt/' + overview?.image?.src"
        :alt="overview?.image?.alt"
      />
    </picture>
    <h2 class="overview__title">
      {{ overview?.title?.before }}
      <span class="overview__title--emphasis">{{ overview?.title?.span }}</span>
      {{ overview?.title?.after }}
    </h2>
    <p class="overview__body">
      {{ overview?.text }}
    </p>
  </section>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { Overview } from "~~/store/model/Overview";
import { getResponsiveValue } from "~~/util/storeUtil";

defineProps({
  overview: { type: Object as PropType<Overview>, default: {} },
});
</script>
<style lang="scss">
@use "../assets/styles/components/overview.scss";
</style>
