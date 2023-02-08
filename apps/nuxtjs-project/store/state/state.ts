import { defineStore } from "pinia";
import { setItemLocalStorage } from "~~/util/localStorageService";
import { ListProductsInCart } from "../model/ListProductsInCart";
import { Product } from "../model/Product";
import { ProductCart } from "../model/ProductCart";
import { ResponsiveInfo } from "../model/ResponsiveInfo";

export const store = defineStore("store", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      productsInCart: { products: [] } as ListProductsInCart,
      responsiveInfo: {} as ResponsiveInfo,
      titleComponent: "",
    };
  },
  actions: {
    setProductsInLocalStorage(): void {
      setItemLocalStorage(
        "productsInCart",
        JSON.stringify(this.$state.productsInCart || "{}")
      );
    },
    addProductsInCart(product: ProductCart): void {
      this.$state.productsInCart.products.push(product);
      this.setProductsInLocalStorage();
    },
    // removeProductFromCart(id: number): void {
    //   const filter: ProductCart[] = this.productsInCart.filter(
    //     (product) => product.id !== id
    //   );
    //   this.setProductsInCart(filter);
    //   this.setProductsInLocalStorage();
    // },
    // editQuatityOfProduct(add: boolean, id: number): void {
    //   const index: number = this.productsInCart.findIndex(
    //     (product) => product.id === id
    //   );
    //   this.productsInCart[index].quantity = add
    //     ? this.productsInCart[index].quantity++
    //     : this.productsInCart[index].quantity--;
    //   this.setProductsInLocalStorage();
    // },
    setProductsInCart(products: Array<ProductCart>): void {
      this.$state.productsInCart.products = products;
      this.setProductsInLocalStorage();
    },
    setResponsiveInfo(responsive: ResponsiveInfo): void {
      this.responsiveInfo = { ...responsive };
    },
    setTitleComponent(title: string): void {
      this.titleComponent = title;
    },
  },
  getters: {
    checkIfThereAreProducts(): Boolean {
      return this.productsInCart.products.length > 0
    },
    productsInCart(): ListProductsInCart {
      return this.productsInCart;
    }
  }
});
