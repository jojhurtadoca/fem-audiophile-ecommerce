<template>
  <div>
    <button class="header__cart" @click="openModal = true">
      Add to cart
      <Badge :value="numberOfProducts" v-if="numberOfProducts > 0"></Badge>
    </button>
    <Dialog
      v-model:visible="openModal"
      class="cart__dialog"
      :modal="true"
      dismissableMask
      :closable="false"
    >
      <div class="cart">
        <div class="cart__header">
          <p class="cart__header-title">CART ({{ numberOfProducts || 0 }})</p>
          <button
            v-if="numberOfProducts > 0"
            class="cart__header-remove-all p-button-text p-button-plain"
            @click="removeAllProducts"
          >
            Remove all
          </button>
        </div>
        <div class="cart__list" v-if="numberOfProducts > 0">
          <CartProduct />
        </div>
        <div class="cart__total" v-if="numberOfProducts > 0">
          <p class="cart__total-title">TOTAL</p>
          <span class="cart__total-value">${{ totalPrice }}</span>
        </div>
        <div class="cart__checkout" v-if="numberOfProducts > 0">
          <button
            @click="redirectToCheckout"
            class="hero__button button__primary button__primary--inverse checkout-button"
          >
            CHECKOUT
          </button>
        </div>
        <div class="empty__cart" v-if="numberOfProducts <= 0">
          <span class="empty__cart-text">The cart does not have products</span>
        </div>
      </div>
    </Dialog>
  </div>
</template>
<script lang="ts" setup>
import Badge from "primevue/badge";
import { store } from "../store/state/state";

const router = useRouter();

const numberOfProducts = computed(() =>
  store().$state.productsInCart?.products?.reduce((a, b) => a + b.quantity, 0)
);
const totalPrice = computed(() =>
  store().$state.productsInCart?.products?.reduce(
    (a, b) => a + b.quantity * (b.product.price?.value || 0),
    0
  )
);
const openModal = ref(false);
const removeAllProducts = (): void => {
  store().setProductsInCart([]);
  openModal.value = false;
};

const redirectToCheckout = () => {
  openModal.value = false;
  router.push("/checkout");
};
</script>
<style lang="scss">
@use "../assets/styles/components/button.scss";
@use "../assets/styles/components/cart.scss";
</style>
