import { Anchor } from "./Anchor";
import { Image } from "./Image";

export interface Product {
  title?: string;
  image: Image;
  description?: string;
  newProduct?: boolean;
  id?: number;
  anchor: Anchor,
  price?: {
    value?: number,
    label?: string
  },
  maxQuatity?: number,
  features?: Array<string>
  box?: Array<{
    quantity: string,
    label: string
  }>
  listImages?: Array<Image>,
  productsAlsoLiKe?: Array<number>
}
