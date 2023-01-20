import { ProductImage } from "./ProductImage";

export interface Product {
    title: string,
    images: ProductImage,
    description?: string
}