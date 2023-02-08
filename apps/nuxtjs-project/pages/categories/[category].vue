<template>
  <div>
    <section>
      <ProductList :product-list="res.result.products" :odd-validation="true" />
    </section>
    <Categories :categories="res.result.categories" />
    <Overview :overview="res.result.overview" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { CategoryPage } from "~~/server/db/model";
import { ResponsiveInfo } from "~~/store/model/ResponsiveInfo";
import setDataFromLocalStorageToStore from "~~/util/setDataToStore";
import { store } from "../../store/state/state";

const route = useRoute();
const useStore = store();

const res = ref({
  title: "",
  h1: "",
  responsive: {},
  result: { products: [] as any, categories: [] as any, overview: {} },
});

const { category } = route.params;
const { data: result } = await useFetch<CategoryPage>(
  `/api/categories/${category}`
);
console.log("category", category, "result", result.value, route.params);
onMounted(() => {
  res.value = result?.value as CategoryPage;
  setDataFromLocalStorageToStore();
  useHead({
    title: result.value?.title,
  });
  useStore.setTitleComponent(result?.value?.h1);
  useStore.setResponsiveInfo(result.value?.responsive as ResponsiveInfo);
});
</script>
