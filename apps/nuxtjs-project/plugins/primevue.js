import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import Badge from "primevue/badge";
import Toast from "primevue/toast";
import ToastService from 'primevue/toastservice';
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component("Sidebar", Sidebar);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Badge", Badge);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("Divider", Divider);
});
