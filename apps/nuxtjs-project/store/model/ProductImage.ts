import { Image } from "./Image";
import { Picture } from "./Picture";

export interface ProductImage {
  image?: Image;
  pictures?: Array<Picture>;
}
