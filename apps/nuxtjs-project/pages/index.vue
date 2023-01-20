<template>
    <div>
      <Banner :banner-data="result.data.bannerData" />
      <Categories :categories="result.data.categories" />
      <Features :features="result.data.features"/>
      <Overview :overview="result.data.overview"/>
    </div>  
</template>
<script lang="ts">
    import { ResponsiveInfo } from '~~/store/model/responsiveInfo';
    import setDataFromLocalStorageToStore from '~~/util/setDataToStore';
    import result from '../backend/pageData/index.json';
    import { store } from '../store/state/state';
    export default defineNuxtComponent({
        setup() {
            const useStore = store();
            return { useStore };
        },
        head() {
            return {
                title: result.title
            }
        },
        data() {
            return {
                result
            }
        },
        beforeCreate() {
            this.useStore.setResponsiveInfo(result.responsive as ResponsiveInfo);
            //We have to get the info from localStorage
        },
        create() {
            //We have to get the info from localStorage
            setDataFromLocalStorageToStore();
        }
    })
</script>