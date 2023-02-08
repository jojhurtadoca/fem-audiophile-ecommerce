import { desktop_min_width, table_min_width } from "./constants";

export const isMobile = () => {
    return window.innerWidth < table_min_width;
};
  

export const isMobileOrTable = () => {
    return window.innerWidth < desktop_min_width;
}