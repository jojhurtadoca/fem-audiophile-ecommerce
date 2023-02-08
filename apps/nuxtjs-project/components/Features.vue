<template>
  <div>
    <section class="feature">
      <ul class="feature__list">
        <li
          v-for="(item, index) in features.articles"
          :key="index"
          class="feature__item"
          :class="
            item?.noOverlap
              ? 'feature__item--no-overlap-img'
              : item?.bigImage
              ? 'feature__item--bg-img'
              : item?.aloneImg
              ? 'feature__item--alone-img'
              : ''
          "
        >
          <Article :key="index" :feature="item" />
        </li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { Features } from "~~/store/model/Features";
defineProps({
  features: { type: Object as PropType<Features>, default: [] },
});
</script>
<style lang="scss">
@use "../assets/styles/components/feature.scss";
</style>
