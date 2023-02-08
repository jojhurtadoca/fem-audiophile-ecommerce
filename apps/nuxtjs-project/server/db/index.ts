
import index from '../json/index.json';
import earphones from '../json/categories/earphones.json';
import speakers from '../json/categories/speakers.json';
import headphones from '../json/categories/headphones.json';
import { DB } from './model';

const products = [...earphones.result.products, ...speakers.result.products, ...headphones.result.products];

export const db: DB = {
    index,
    categories: {
        earphones,
        speakers,
        headphones
    },
    products
}