<template>
  <div>
    <section class="product">
      <ul class="product__list">
        <li class="product__item" v-for="item in productList.products" :key="item.id">
          <ProductCard :product="item" />
        </li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts" setup>
    import { PropType } from 'vue';
    import { ProductList } from '~~/store/model/ProductList';
    defineProps({
        productList: { type: Object as PropType<ProductList>, default: [] },
    });
</script>