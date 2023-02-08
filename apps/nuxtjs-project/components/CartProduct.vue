<template>
  <ul class="product__cart">
    <li
      class="product__cart-list"
      v-for="(prod, index) in products.products"
      :key="index"
    >
      <picture class="product__cart-list-picture">
        <img
          class="product__cart-list-image"
          :src="'/_nuxt/' + prod.product?.image?.src"
          :alt="prod.product?.image?.alt"
        />
      </picture>
      <div class="product__cart-list-data">
        <h2 class="product__cart-list-title">
          {{ getSlug(prod.product?.title) }}
        </h2>
        <span class="product__cart-list-price">
          {{ prod.product?.price?.label }}
        </span>
      </div>
      <div v-if="showInput" class="product__cart-list-input-quantity">
        <InputNumber
          v-model="prod.quantity"
          showButtons
          :min="0"
          :max="prod.product?.maxQuatity"
          :step="1"
          buttonLayout="horizontal"
          decrementButtonClass="p-button-text p-button-plain"
          incrementButtonClass="p-button-text p-button-plain"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
          class="product__cart-list-quantity"
          @input="changeTheCurrentQuantity($event, prod.id)"
        />
      </div>
      <p class="product__cart-list-p-quantity" v-if="!showInput">
        x{{ prod.quantity }}
      </p>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import InputNumber, { InputNumberBlurEvent } from "primevue/inputnumber";
import { store } from "../store/state/state";
import { getSlug } from "~~/util/stringUtil";
import { ListProductsInCart } from "~~/store/model/ListProductsInCart";

defineProps({
  showInput: { type: Boolean, default: true },
});

const products = computed(
  () => store().$state.productsInCart
) as unknown as ListProductsInCart;

const changeTheCurrentQuantity = ($event: InputNumberBlurEvent, id: number) => {
  //we need to check the current quantity
  const newValue = parseInt($event.value);
  console.log("new value", newValue);
  if (newValue === 0) {
    //we need to remove the product from cart
    const allProducts = products.value.products;
    const newProducts = allProducts.filter((p: any) => p.id !== id);
    store().setProductsInCart(newProducts);
  } else {
    store().setProductsInLocalStorage();
  }
};
</script>
<style lang="scss">
@use "../assets/styles/components/button.scss";
@use "../assets/styles/components/cart.scss";
</style>
