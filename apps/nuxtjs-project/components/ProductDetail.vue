<template>
  <article class="product product__item-container-grid">
    <div class="product__info-container">
      <div class="product__picture-container">
        <picture class="product__picture">
          <source
            :key="1"
            :srcset="'/_nuxt/' + product?.image?.src"
            :media="getResponsiveValue('desktop')"
          />
          <source
            :key="2"
            :srcset="'/_nuxt/' + product?.image?.src"
            :media="getResponsiveValue('tablet')"
          />
          <img
            class="product__image"
            :src="'/_nuxt/' + product?.image?.src"
            :alt="product?.image?.alt"
          />
        </picture>
      </div>
      <div class="product__content">
        <p v-if="product?.newProduct" class="product new__product text-left">
          NEW PRODUCT
        </p>
        <h1 class="product__title text-left">
          {{ removeTheLastWord(product?.title || "") }}
          <span class="product__title__new-line">
            {{ getTheLastWord(product?.title || "") }}
          </span>
        </h1>
        <p class="product__description text-left">{{ product?.description }}</p>
        <p class="product__price">{{ product?.price?.label }}</p>
        <div
          class="product__form"
          v-if="product?.maxQuatity && product?.maxQuatity > 0"
        >
          <InputNumber
            v-model="quatityToCart"
            showButtons
            :min="1"
            :max="product?.maxQuatity"
            :step="1"
            buttonLayout="horizontal"
            decrementButtonClass="p-button-text p-button-plain"
            incrementButtonClass="p-button-text p-button-plain"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            class="product__quantity"
          />
          <button
            :to="product?.anchor?.url"
            class="product__button button__primary"
            @click="addToCart(product, quatityToCart)"
          >
            Add to cart
          </button>
        </div>
        <div v-if="!product?.maxQuatity || product?.maxQuatity <= 0">
          <p class="product__without-stock">Product without stock now</p>
        </div>
      </div>
    </div>
    <div class="product__info-container-features">
      <div class="product__features">
        <h2 class="product__features-title">FEATURES</h2>
        <p
          class="product__features-text"
          v-for="(feature, index) in product?.features"
          :key="index"
        >
          {{ feature }}
        </p>
      </div>
      <div class="product__box" v-if="product?.box && product?.box?.length > 0">
        <h2 class="product__box-title">IN THE BOX</h2>
        <ul class="product__box-list">
          <li
            class="product__box-li"
            v-for="(box, index) in product?.box"
            :key="index"
          >
            <div class="product__box-li-value quantity-value">
              {{ box.quantity }}
            </div>
            <div class="product__box-li-value label-value">
              {{ box.label }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="product__images"
      v-if="product?.listImages && product?.listImages?.length > 0"
    >
      <ul class="product__images-list">
        <li
          class="product__images-li"
          v-for="(image, index) in product.listImages"
          :key="index"
        >
          <img
            :src="'/_nuxt/' + image?.src"
            :alt="image?.alt"
            class="product__images-image"
            :class="image.fullImage ? 'full-image' : 'no-full-image'"
          />
        </li>
      </ul>
    </div>
  </article>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import InputNumber from "primevue/inputnumber";
import { Product } from "~~/store/model/Product";
import { removeTheLastWord, getTheLastWord } from "~~/util/stringUtil";
import { getResponsiveValue } from "~~/util/storeUtil";
import { ProductCart } from "~~/store/model/ProductCart";
import { store } from "~~/store/state/state";
import { useToast } from "primevue/usetoast";

const toast = useToast();
defineProps({
  product: { type: Object as PropType<Product>, default: {} as Product },
});

const productsInCart = computed(() => store().$state.productsInCart);

const quatityToCart = ref(1);
const addToCart = (product: Product, quantity: number): void => {
  //check if product exist in cart
  const existProduct =
    productsInCart.value.products.length > 0
      ? productsInCart.value.products.findIndex((p) => p.id === product.id)
      : -1;

  if (existProduct !== -1) {
    const allProducts = productsInCart.value.products;
    allProducts[existProduct].quantity += quantity;
    store().setProductsInCart(allProducts);
  } else {
    const productCart: ProductCart = {
      product,
      quantity,
      id: product.id || 0,
    };
    store().addProductsInCart(productCart);
  }
  toast.add({
    severity: "success",
    summary: "Success",
    detail: "Product added to cart successfully",
    life: 3000,
  });
};
</script>
<style lang="scss">
@use "../assets/styles/components/product.scss";
@use "../assets/styles/components/link.scss";
@use "../assets/styles/components/button.scss";
</style>
