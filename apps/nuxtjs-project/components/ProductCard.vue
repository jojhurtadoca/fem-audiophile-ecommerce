<template>
  <article
    :class="
      odd && oddValidation
        ? ' product__item-container flex-reverse'
        : oddValidation
        ? 'product__item-container'
        : ''
    "
  >
    <div class="product__picture-container">
      <picture class="product__picture">
        <img
          class="product__image"
          :src="'/_nuxt/' + product?.image?.src"
          :alt="product?.image?.alt"
        />
      </picture>
    </div>
    <div class="product__content">
      <p
        v-if="product?.newProduct && showNewProductLabel"
        class="product new__product"
      >
        NEW PRODUCT
      </p>
      <p class="product__title">
        {{ removeTheLastWord(product?.title || "") }}
        <span class="product__title__new-line" v-if="showFullTitle">
          {{ getTheLastWord(product?.title || "") }}
        </span>
      </p>
      <p class="product__description" v-if="showDescription">
        {{ product?.description }}
      </p>
      <NuxtLink :to="product?.anchor?.url" class="product__link button__primary"
        >See product</NuxtLink
      >
    </div>
  </article>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { Product } from "~~/store/model/Product";
import { removeTheLastWord, getTheLastWord } from "~~/util/stringUtil";

defineProps({
  product: Object as PropType<Product>,
  showDescription: { type: Boolean, default: true },
  showNewProductLabel: { type: Boolean, default: true },
  showFullTitle: { type: Boolean, default: true },
  odd: { type: Boolean, default: false },
  oddValidation: { type: Boolean, default: false },
});
</script>
