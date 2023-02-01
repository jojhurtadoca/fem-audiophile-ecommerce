<template>
    <article class="product__item-container">
        <div class="product__picture-container">
          <picture class="product__picture">
            <img class="product__image" :src="'/_nuxt/' + product?.image?.src" :alt="product?.image?.alt">
          </picture>
        </div>        
        <div class="product__content">
          <p class="product new__product" v-if="product?.newProduct">
              NEW PRODUCT
          </p>
          <p class="product__title">{{ removeTheLastWord(product?.title || '') }}
            <span class="product__title__new-line">
              {{ getTheLastWord(product?.title || '') }}
            </span>
          </p>
          <p class="product__description">{{ product?.description }}</p>
          <NuxtLink :to="'/'" class="product__link button__primary">See product</NuxtLink>
        </div>
    </article>
</template>
<script lang="ts" setup>
  import { PropType } from 'vue';
  import { Product } from '~~/store/model/Product';
  import { removeTheLastWord, getTheLastWord } from '~~/util/stringUtil';

  defineProps({
    product: Object as PropType<Product>,
  });

</script>