<template>
    <section class="categories">
      <ul class="categories__list">
        <li class="category" v-for="(item,index) in categories" :key="index">
          <img class="category__image" :src="'_nuxt/' + item?.image?.src" :alt="item?.image?.alt" >
          <p class="category__title">{{ item?.name }}</p>
          <NuxtLink class="category__link button__tertiary" :to="item?.anchor?.url" >Shop</NuxtLink>
        </li>
      </ul>
    </section>
</template>
<script lang="ts">
   export default{
    props: ['categories'],
  }
</script>