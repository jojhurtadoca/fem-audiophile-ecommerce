import { Anchor } from "./Anchor";
import { BannerTitle } from "./BannerTitle";
import { Image } from "./Image";
import { Picture } from "./Picture";
import { Text } from "./Text";

export interface BannerModel {
  pictures?: Picture;
  title?: BannerTitle;
  anchor?: Anchor;
  text?: Text;
  image?: Image;
}
