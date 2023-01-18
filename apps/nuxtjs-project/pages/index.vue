<template>
  <div>
    <Banner />
    <Categories />
    <Articles />
    <ImageDescription />
  </div>  
</template>

<script lang="ts">
import Vue from 'vue'
import Articles from '~/components/Articles.vue';
import Banner from '~/components/Banner.vue';
import Categories from '~/components/Categories.vue';
import ImageDescription from '~/components/ImageDescription.vue';

export default Vue.extend({
    name: "IndexPage",
    layout: "Default",
    components: { Categories, Banner, Articles, ImageDescription }
})
</script>
