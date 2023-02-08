<template></template>
<script lang="ts" setup>
import { Product } from "~~/store/model/Product";

defineProps({
  products: { type: Array<Product>, default: [] },
});
</script>
