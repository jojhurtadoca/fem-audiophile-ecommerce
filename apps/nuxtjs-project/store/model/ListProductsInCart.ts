import { ProductCart } from "./ProductCart";

export interface ListProductsInCart {
    [x: string]: any;
    products: Array<ProductCart>
}