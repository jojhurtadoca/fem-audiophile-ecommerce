import { getItemLocalStorage } from "./localStorageService";
import { store } from "../store/state/state";
import { ListProductsInCart } from "~~/store/model/ListProductsInCart";

const useStore = store();

const setDataFromLocalStorageToStore = () => {
  const productsInCart = JSON.parse(
    getItemLocalStorage("productsInCart") || "{}"
  ) as ListProductsInCart;

  if(productsInCart && productsInCart.products) {
    useStore.setProductsInCart(productsInCart.products);
  }
};

export default setDataFromLocalStorageToStore;
