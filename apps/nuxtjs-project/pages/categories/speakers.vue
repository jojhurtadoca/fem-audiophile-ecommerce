<template>
    <ProductList :product-list="res.data" />
    <Categories :categories="res.data.categories" />
    <Overview :overview="res.data.overview"/> 
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import setDataFromLocalStorageToStore from '~~/util/setDataToStore';
    import { store } from '../../store/state/state';
    import result from '../../backend/pageData/categories/speakers.json';

    const res = ref({ title : '', h1: '', responsive: {}, data: { products: [] as any, categories: [] as any, overview: {}}});
    const useStore = store();
    const { title, responsive } = result;
    onMounted(() => {
        res.value = result;
        setDataFromLocalStorageToStore();
        document.title = title;
        useStore.setTitleComponent(result.h1);
    });
</script>