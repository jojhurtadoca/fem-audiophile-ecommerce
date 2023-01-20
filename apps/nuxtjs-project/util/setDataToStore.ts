import { getItemLocalStorage } from "./localStorageService";
import { store } from '../store/state/state';
import { ProductCart } from "~~/store/model/ProductCart";

const useStore = store();

const setDataFromLocalStorageToStore = () => {
    const productsInCart = JSON.parse(getItemLocalStorage("productsInCart") || '{}') as ProductCart[];
    useStore.setProductsInCart(productsInCart);
}

export default setDataFromLocalStorageToStore;