<template>
  <section class="title">
    <h1 class="title category_title">
      {{ title }}
    </h1>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  title: { type: String, default: "" },
});
</script>
<style lang="scss">
@use "../assets/styles/components/title.scss";
</style>
