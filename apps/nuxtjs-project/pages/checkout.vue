<template>
  <div>
    <section class="checkout">
      <Dialog
        v-model:visible="showMessage"
        class="checkout__dialog"
        :modal="true"
        dismissableMask
        @hide="redirectToHome"
        :closable="false"
      >
        <div class="checkout__dialog-container">
          <div class="checkout__circle">
            <i class="pi pi-check checkout__icon"></i>
          </div>
          <h2 class="checkout__thanks">THANK YOU FOR YOUR ORDER</h2>
          <p class="checkout__message">
            You will receive an email confirmation shortly.
          </p>
          <div class="checkout__info">
            <div class="checkout__info-container">
              <div
                class="checkout__first-product"
                v-if="totalProducts && totalProducts.products.length > 0"
              >
                <div
                  class="checkout__first-product-div"
                  v-for="(product, index) in totalProducts.products"
                  :key="index"
                  :class="{
                    'show-element-desktop': index !== 0,
                  }"
                  v-show="index === 0 || (index !== 0 && showAllProducts)"
                >
                  <picture class="checkout__first-product-picture">
                    <img
                      class="checkout__first-product-image"
                      :src="'/_nuxt/' + product?.product?.image?.src"
                      :alt="product?.product?.image?.alt"
                    />
                  </picture>
                  <div class="checkout__first-product-data">
                    <h2 class="checkout__first-product-title">
                      {{ getSlug(product?.product?.title) }}
                    </h2>
                    <span class="checkout__first-product-price">
                      {{ product?.product?.price?.label }}
                    </span>
                  </div>
                  <div class="checkout__first-product-quantity">
                    <p class="checkout__first-product-p-quantity">
                      x{{ product.quantity }}
                    </p>
                  </div>
                </div>
                <Divider v-if="numberOfProducts > 1" />
                <div
                  v-if="numberOfProducts > 1"
                  class="checkout__number-products"
                >
                  and {{ numberOfProducts - 1 }} other item(s)
                </div>
                <div
                  v-if="numberOfProducts > 1"
                  class="checkout__show-products"
                  @click="showAllProducts = !showAllProducts"
                >
                  {{
                    showAllProducts
                      ? "View less"
                      : "View more (" + (numberOfProducts - 1) + ") product(s)"
                  }}
                </div>
              </div>
              <div class="checkout__grand-total">
                <h3 class="checkout__grand-total-title">GRAND TOTAL</h3>
                <h3 class="checkout__grand-total-price">${{ grandTotal }}</h3>
              </div>
            </div>
            <div class="checkout__button">
              <button
                @click="cleanProducts"
                class="hero__button button__primary button__primary--inverse pay-button"
              >
                BACK TO HOME
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      <div class="checkout-link">
        <NuxtLink
          class="checkout-link__go-back checkout-link__tertiary"
          @click="cleanProducts"
          to=""
          >Go Back
        </NuxtLink>
      </div>
      <div class="checkout__container" v-if="numberOfProducts > 0">
        <form
          @submit.prevent="handleSubmit(!v$.$invalid)"
          class="checkout__form p-fluid"
          method="post"
          ref="submitForm"
        >
          <div class="checkout__container-flex">
            <div class="checkout__container-form">
              <h1 class="checkout__title">CHECKOUT</h1>
              <div class="checkout__form-section">
                <h2 class="checkout__form-title">Billing details</h2>
                <div class="checkout__form-flex">
                  <div class="checkout__form-input">
                    <label
                      for="name"
                      :class="{ 'p-invalid': v$.name.$invalid && submitted }"
                      >Name</label
                    >
                    <InputText
                      type="text"
                      id="name"
                      v-model="v$.name.$model"
                      :class="{ 'p-invalid': v$.name.$invalid && submitted }"
                    />
                    <small
                      v-if="v$.name.$invalid && submitted"
                      class="p-error"
                      >{{
                        v$.name.required.$message.replace("Value", "Name")
                      }}</small
                    >
                  </div>
                  <div class="checkout__form-input">
                    <label
                      for="email"
                      :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                      >Email</label
                    >
                    <InputText
                      type="text"
                      id="email"
                      v-model="v$.email.$model"
                      :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                    />
                    <small
                      v-if="v$.email.$invalid && submitted"
                      class="p-error"
                      >{{
                        v$.email.required.$message.replace("Value", "Email")
                      }}</small
                    >
                  </div>
                </div>
                <div class="checkout__form-flex">
                  <div class="checkout__form-input">
                    <label
                      for="phone"
                      :class="{ 'p-invalid': v$.phone.$invalid && submitted }"
                      >Phone number</label
                    >
                    <InputText
                      type="text"
                      id="phone"
                      v-model="v$.phone.$model"
                      :class="{ 'p-invalid': v$.phone.$invalid && submitted }"
                    />
                    <small
                      v-if="v$.phone.$invalid && submitted"
                      class="p-error"
                      >{{
                        v$.phone.required.$message.replace("Value", "Phone")
                      }}</small
                    >
                  </div>
                </div>
              </div>
              <div class="checkout__form-section">
                <h2 class="checkout__form-title">shipping info</h2>
                <div class="checkout__form-input">
                  <label
                    for="address"
                    :class="{ 'p-invalid': v$.address.$invalid && submitted }"
                    >Your Address</label
                  >
                  <InputText
                    type="text"
                    id="address"
                    v-model="v$.address.$model"
                    :class="{ 'p-invalid': v$.address.$invalid && submitted }"
                  />
                  <small
                    v-if="v$.address.$invalid && submitted"
                    class="p-error"
                    >{{
                      v$.address.required.$message.replace("Value", "Address")
                    }}</small
                  >
                </div>
                <div class="checkout__form-flex">
                  <div class="checkout__form-input">
                    <label
                      for="zip"
                      :class="{ 'p-invalid': v$.zip.$invalid && submitted }"
                      >ZIP Code</label
                    >
                    <InputText
                      type="text"
                      id="zip"
                      v-model="v$.zip.$model"
                      :class="{ 'p-invalid': v$.zip.$invalid && submitted }"
                    />
                    <small
                      v-if="v$.zip.$invalid && submitted"
                      class="p-error"
                      >{{
                        v$.zip.required.$message.replace("Value", "Zip")
                      }}</small
                    >
                  </div>
                  <div class="checkout__form-input">
                    <label
                      for="city"
                      :class="{ 'p-invalid': v$.city.$invalid && submitted }"
                      >City</label
                    >
                    <InputText
                      type="text"
                      id="city"
                      v-model="v$.city.$model"
                      :class="{ 'p-invalid': v$.city.$invalid && submitted }"
                    />
                    <small
                      v-if="v$.city.$invalid && submitted"
                      class="p-error"
                      >{{
                        v$.city.required.$message.replace("Value", "City")
                      }}</small
                    >
                  </div>
                </div>
                <div class="checkout__form-flex">
                  <div class="checkout__form-input">
                    <label
                      for="country"
                      :class="{ 'p-invalid': v$.country.$invalid && submitted }"
                      >Country</label
                    >
                    <InputText
                      type="text"
                      id="country"
                      v-model="v$.country.$model"
                      :class="{ 'p-invalid': v$.country.$invalid && submitted }"
                    />
                    <small
                      v-if="v$.country.$invalid && submitted"
                      class="p-error"
                      >{{
                        v$.country.required.$message.replace("Value", "Country")
                      }}</small
                    >
                  </div>
                </div>
              </div>
              <div class="checkout__form-section">
                <h2 class="checkout__form-title">payment details</h2>
                <div class="checkout__form-input">
                  <div class="checkout__form-flex">
                    <label
                      :class="{
                        'p-invalid': v$.paymentMethod1 && submitted,
                      }"
                      class="flex-payment-method-title"
                      >Payment Method</label
                    >
                    <div class="checkout__radio-button">
                      <div
                        class="checkout__form-input-radio input-radio"
                        :class="{
                          'invalid-value':
                            !validateRequired(
                              state.paymentMethod1.toString()
                            ) && submitted,
                          'input-active':
                            state.paymentMethod1.toString() === 'e-Money',
                        }"
                        @click="radio1.click()"
                      >
                        <input
                          ref="radio1"
                          type="radio"
                          id="money"
                          name="money"
                          class="input-radio-value"
                          v-model="v$.paymentMethod1.$model"
                          value="e-Money"
                          @change="v$.paymentMethod1.$touch"
                          :checked="
                            state.paymentMethod1.toString() === 'e-Money'
                          "
                        />
                        <span class="checkout__form-input-radio-value">
                          e-Money
                        </span>
                      </div>
                      <div
                        class="checkout__form-input-radio input-radio"
                        :class="{
                          'invalid-value':
                            !validateRequired(
                              state.paymentMethod1.toString()
                            ) && submitted,
                          'input-active':
                            state.paymentMethod1.toString() === 'cash',
                        }"
                        @click="radio2.click()"
                      >
                        <input
                          ref="radio2"
                          type="radio"
                          id="cash"
                          name="cash"
                          class="input-radio-value"
                          v-model="v$.paymentMethod1.$model"
                          @change="v$.paymentMethod1.$touch"
                          value="cash"
                          :checked="state.paymentMethod1.toString() === 'cash'"
                        />
                        <span class="checkout__form-input-radio-value">
                          Cash on Delivery
                        </span>
                      </div>
                    </div>
                  </div>
                  <small
                    v-if="v$.paymentMethod1.$invalid && submitted"
                    class="p-error"
                    >{{
                      v$.paymentMethod1.required.$message.replace(
                        "Value",
                        "Payment Method"
                      )
                    }}</small
                  >
                </div>
                <div class="checkout__form-flex">
                  <div
                    class="checkout__form-input"
                    v-if="state.paymentMethod1.toString() === 'e-Money'"
                  >
                    <label
                      for="moneyNumber"
                      :class="{
                        'p-invalid': v$.moneyNumber.$invalid && submitted,
                      }"
                      >e-Money Number</label
                    >
                    <InputText
                      type="text"
                      id="moneyNumber"
                      v-model="v$.moneyNumber.$model"
                      :class="{
                        'p-invalid': v$.moneyNumber.$invalid && submitted,
                      }"
                    />
                    <small
                      v-if="v$.moneyNumber.$invalid && submitted"
                      class="p-error"
                      >{{
                        v$.moneyNumber.required.$message.replace(
                          "Value",
                          "Money Number"
                        )
                      }}</small
                    >
                  </div>
                  <div
                    class="checkout__form-input"
                    v-if="state.paymentMethod1.toString() === 'e-Money'"
                  >
                    <label
                      for="moneyPin"
                      :class="{
                        'p-invalid': v$.moneyPin.$invalid && submitted,
                      }"
                      >e-Money PIN</label
                    >
                    <InputText
                      type="text"
                      id="moneyPin"
                      v-model="v$.moneyPin.$model"
                      :class="{
                        'p-invalid': v$.moneyPin.$invalid && submitted,
                      }"
                    />
                    <small
                      v-if="v$.moneyPin.$invalid && submitted"
                      class="p-error"
                      >{{
                        v$.moneyPin.required.$message.replace(
                          "Value",
                          "Money Pin"
                        )
                      }}</small
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="checkout__summary">
              <h2 class="checkout__summary-title">SUMMARY</h2>
              <div class="cart">
                <CartProduct :showInput="false" />
              </div>
              <div class="checkout__total">
                <div class="checkout__total-total">
                  <p class="checkout__total-title">TOTAL</p>
                  <span class="checkout__total-value">${{ totalPrice }}</span>
                </div>
                <div class="checkout__total-total">
                  <p class="checkout__total-title">SHIPPING</p>
                  <span class="checkout__total-value">$50</span>
                </div>
                <div class="checkout__total-total">
                  <p class="checkout__total-title">VAT (INCLUDED)</p>
                  <span class="checkout__total-value">$1079</span>
                </div>
                <div class="checkout__total-total">
                  <p class="checkout__total-title">GRAND TOTAL</p>
                  <span class="checkout__total-value">${{ grandTotal }}</span>
                </div>
              </div>
              <div class="checkout__button">
                <button
                  type="submit"
                  class="hero__button button__primary button__primary--inverse pay-button"
                >
                  CONTINUE & PAY
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <section class="checkout__not-available" v-if="numberOfProducts <= 0">
      <span class="checkout__not-available-text">Checkout not available</span>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { store } from "../store/state/state";
import { required, email, numeric } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider";
import { validateNumeric, validateRequired } from "~~/util/validateUtils";
import { getSlug } from "~~/util/stringUtil";
import { ListProductsInCart } from "~~/store/model/ListProductsInCart";
import setDataFromLocalStorageToStore from "~~/util/setDataToStore";

const router = useRouter();
const useStore = store();
const numberOfProducts = computed(() =>
  store().$state.productsInCart?.products?.reduce((a, b) => a + b.quantity, 0)
);

const totalPrice = computed(() =>
  store().$state.productsInCart?.products?.reduce(
    (a, b) => a + b.quantity * (b.product.price?.value || 0),
    0
  )
);

const grandTotal = computed(() => totalPrice.value + 50 + 1079);

const totalProducts = computed(
  () => store().$state.productsInCart
) as unknown as ListProductsInCart;

const submitted = ref(false);
const showMessage = ref(false);
const showAllProducts = ref(false);
const radio1 = ref(null) as unknown as HTMLElement;
const radio2 = ref(null) as unknown as HTMLElement;
const submitForm = ref(null) as unknown as HTMLFormElement;

const state = reactive({
  name: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
  country: "",
  paymentMethod1: "",
  moneyNumber: "",
  moneyPin: "",
});

const validateMoneyNumber = () => {
  if (state.paymentMethod1.toString() === "e-Money") {
    return (
      validateRequired(state.moneyNumber) &&
      validateNumeric(state.moneyNumber.toString())
    );
  }

  return true;
};

const validateMoneyPin = () => {
  if (state.paymentMethod1.toString() === "e-Money") {
    return (
      validateRequired(state.moneyPin) &&
      validateNumeric(state.moneyPin.toString())
    );
  }

  return true;
};

const rules = {
  name: { required },
  email: { required, email },
  phone: { required, numeric },
  address: { required },
  zip: { required, numeric },
  city: { required },
  country: { required },
  paymentMethod1: { required },
  moneyNumber: validateMoneyNumber(),
  moneyPin: validateMoneyPin(),
};

const resetForm = () => {
  state.name = "";
  state.email = "";
  state.phone = "";
  state.address = "";
  state.zip = "";
  state.city = "";
  state.country = "";
  state.paymentMethod1 = "";
  state.moneyNumber = "";
  state.moneyPin = "";
  submitted.value = false;
};

const v$ = useVuelidate(rules, state);

const toggleDialog = () => {
  showMessage.value = !showMessage.value;
};

const handleSubmit = (isFormValid: boolean) => {
  submitted.value = true;

  if (!isFormValid) {
    return;
  }

  toggleDialog();
};

const cleanProducts = () => {
  toggleDialog();
  resetForm();
  store().setProductsInCart([]);
  router.push("/");
};

const redirectToHome = () => {
  resetForm();
  store().setProductsInCart([]);
  router.push("/");
};

onMounted(() => {
  setDataFromLocalStorageToStore();
  useStore.setTitleComponent("");
  useHead({
    title: "Checkout",
  });
});
</script>
<style lang="scss">
@use "../assets/styles/components/checkout.scss";
</style>
