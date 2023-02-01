import { Image } from "./Image";

export interface Product {
    title: string,
    image: Image,
    description?: string,
    newProduct?: boolean,
    id?: number
}