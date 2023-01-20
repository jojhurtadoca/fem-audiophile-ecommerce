import { defineStore } from 'pinia';
import { setItemLocalStorage } from '~~/util/localStorageService';
import { ProductCart } from '../model/ProductCart';
import { ResponsiveInfo } from '../model/responsiveInfo';

export const store = defineStore('store', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      productsInCart: [] as ProductCart[],
      responsiveInfo: {} as ResponsiveInfo
    }
  },
  actions: {
    setProductsInLocalStorage(): void {
        setItemLocalStorage("productsInCart", JSON.stringify(this.productsInCart || '{}'));
    },
    addProductsInCart(product: ProductCart): void {
        this.productsInCart.push(product);
        this.setProductsInLocalStorage();
    },
    removeProductFromCart(id: number): void {
        const filter: ProductCart[] = this.productsInCart.filter((product) => product.id !== id);
        this.setProductsInCart(filter);
        this.setProductsInLocalStorage();
    },
    editQuatityOfProduct(add: boolean, id: number): void {
        const index: number  = this.productsInCart.findIndex((product) => product.id === id)
        this.productsInCart[index].quantity = add ? this.productsInCart[index].quantity++ : this.productsInCart[index].quantity--;
        this.setProductsInLocalStorage();
    },
    setProductsInCart(products: ProductCart[]): void {
        this.productsInCart = products;
    },
    setResponsiveInfo(responsive: ResponsiveInfo): void {
        this.responsiveInfo = {...responsive};;
    }
  },
});