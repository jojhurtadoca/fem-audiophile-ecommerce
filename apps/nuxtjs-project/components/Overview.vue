<template>
    <section class="overview">
      <picture class="overview__picture">
        <source v-for="(value, name, index) in overview.pictures" :srcset="'_nuxt/' + value.src" :media="getResponsiveValue(name.toString())" :key="index">
        <img
          class="overview__image"
          :src="'_nuxt/' + overview?.image?.src"
          :alt="overview?.image?.alt"
        >
      </picture>
      <h2 class="overview__title">
        {{ overview?.title?.before }} <span class="overview__title--emphasis">{{ overview?.title?.span }}</span> {{ overview?.title?.after }}
      </h2>
      <p class="overview__body">
        {{ overview?.text }}
      </p>
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
    props: ['overview'],
    methods: {
      getResponsiveValue(key: string): string {
        return this.useStore.responsiveInfo[key as keyof ResponsiveInfo];
      }
    }
  }
</script>