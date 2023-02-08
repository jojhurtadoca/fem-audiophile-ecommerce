<script lang="ts" setup>
import { ref } from "vue";
import { BannerModel } from "~~/store/model/Banner";
import { Category } from "~~/store/model/Category";
import { ResponsiveInfo } from "~~/store/model/ResponsiveInfo";
import setDataFromLocalStorageToStore from "~~/util/setDataToStore";
import { store } from "../store/state/state";

const res = ref({
  title: "",
  responsive: {},
  data: {
    bannerData: {} as BannerModel,
    categories: [] as Array<Category>,
    features: {},
    overview: {},
  },
});
const useStore = store();
const { data: result } = await useFetch("/api");

useStore.setTitleComponent("");
useStore.setResponsiveInfo(result.value?.responsive as ResponsiveInfo);
useHead({
  title: result.value?.title,
});
onMounted(() => {
  const data = result.value?.data;
  res.value.data = data;
  setDataFromLocalStorageToStore();
});
</script>

<template>
  <div class="index_page">
    <Banner :banner-data="res.data.bannerData" />
    <Categories :categories="res.data.categories" />
    <Features :features="res.data.features" />
    <Overview :overview="res.data.overview" />
  </div>
</template>
<style lang="scss">
.index_page {
  display: grid;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 200px;
  }
}
</style>
