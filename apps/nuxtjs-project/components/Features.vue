<template>
    <div>
      <section class="feature">
        <ul class="feature__list">
          <li class="feature__item" 
          v-for="(item, index) in features.articles" :key="index"
          :class="item?.noOverlap ? 'feature__item--no-overlap-img' : item?.bigImage ? 'feature__item--bg-img' : item?.aloneImg ? 'feature__item--alone-img' : '' ">
            <Article :feature="item" :key="index" />
          </li>
        </ul>
      </section>
    </div>    
</template>
<script lang="ts">
   export default{
    props: ['features'],
  }
</script>