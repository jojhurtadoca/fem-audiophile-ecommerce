import { ResponsiveInfo } from '~~/store/model/ResponsiveInfo';
import { store } from '~~/store/state/state';

const useStore = store();

export const getResponsiveValue = (key: string): string => {
    return useStore.responsiveInfo[key as keyof ResponsiveInfo];
}