import { Anchor } from "./Anchor";
import { Image } from "./Image";
import { Picture } from "./Picture";

export interface Feature {
  title?: string;
  description?: string;
  pictures?: Picture;
  anchor: Anchor;
  image: Image;
  noOverlap?: boolean;
  bigImage?: boolean;
  aloneImg?: boolean;
}
