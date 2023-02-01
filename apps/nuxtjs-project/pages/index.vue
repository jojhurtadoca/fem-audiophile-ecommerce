<script lang="ts" setup>
    import { ref } from 'vue';
    import { BannerModel } from '~~/store/model/Banner';
    import { Category } from '~~/store/model/Category';
    import setDataFromLocalStorageToStore from '~~/util/setDataToStore';
    import result from '../backend/pageData/index.json';
    import { store } from '../store/state/state';

    const res = ref({ title : '', responsive: {}, data: { bannerData: {} as BannerModel, categories: [] as Array<Category>, features: {}, overview: {}}});
    const useStore = store();
    const { data, title, responsive } = result;
    res.value.data = data;
    setDataFromLocalStorageToStore();
    document.title = title;
    useStore.setTitleComponent('');

</script>

<template>
    <div>
      <Banner :banner-data="res.data.bannerData" />
      <Categories :categories="res.data.categories" />
      <Features :features="res.data.features"/>
      <Overview :overview="res.data.overview"/>
    </div>  
</template>