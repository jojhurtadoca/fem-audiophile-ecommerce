<template>
  <div>
    <div class="product">
      <ul class="product__list">
        <li
          v-for="(item, index) in productList"
          :key="index"
          class="product__item"
        >
          <ProductCard
            :product="item"
            :show-description="showDescription"
            :show-new-product-label="showNewProductLabel"
            :show-full-title="showFullTitle"
            :odd="index % 2 !== 0 && oddValidation"
            :oddValidation="oddValidation"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Product } from "~~/store/model/Product";
defineProps({
  productList: { type: Array<Product>, default: [] },
  showDescription: { type: Boolean, default: true },
  showNewProductLabel: { type: Boolean, default: true },
  showFullTitle: { type: Boolean, default: true },
  oddValidation: { type: Boolean, default: false },
});
</script>
<style lang="scss">
@use "../assets/styles/components/product.scss";
</style>
