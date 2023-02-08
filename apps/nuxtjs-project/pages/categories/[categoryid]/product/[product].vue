<template>
  <div>
    <section>
      <div class="product-link">
        <NuxtLink
          class="product-link__go-back product-link__tertiary"
          @click="router.go(-1)"
          to=""
          >Go Back</NuxtLink
        >
      </div>
      <ProductDetail :product="res.product" />
    </section>
    <section>
      <div class="product__like">
        <h2 class="product__like-title">you may also like</h2>
        <ProductList
          :product-list="res.productsAlsoLike"
          :show-description="false"
          :show-full-title="false"
          :show-new-product-label="false"
        />
      </div>
    </section>
    <Categories :categories="res.categories" />
    <div class="product__overview">
      <Overview :overview="res.overview" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ResponsiveInfo } from "~~/store/model/ResponsiveInfo";
import { ProductPage } from "~~/server/db/model";
import setDataFromLocalStorageToStore from "~~/util/setDataToStore";
import { store } from "~~/store/state/state";
import { Product } from "~~/store/model/Product";
import { Category } from "~~/store/model/Category";

const route = useRoute();
const router = useRouter();
const useStore = store();

const res = ref({
  product: {} as Product,
  responsive: {} as ResponsiveInfo,
  productsAlsoLike: [] as Array<Product>,
  categories: [] as Array<Category>,
  overview: {},
});
const { categoryid, product } = route.params;

const { data: result } = await useFetch(
  `/api/categories/${categoryid}/product/${product}`
);

onMounted(() => {
  res.value = result?.value as ProductPage;
  setDataFromLocalStorageToStore();
  useHead({
    title: result?.value?.product.title,
  });
  useStore.setTitleComponent("");
  useStore.setResponsiveInfo(result.value?.responsive as ResponsiveInfo);
});
</script>
