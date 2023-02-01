import { Image } from "./Image";
import { Picture } from "./Picture";

export interface Overview {
    pictures?: Picture,
    text?: string,
    image?: Image,
    title?: {
        before?: string,
        span?: string,
        after?: string,
    }
}