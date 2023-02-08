import { Category } from "~~/store/model/Category"
import { Overview } from "~~/store/model/Overview"
import { Product } from "~~/store/model/Product"
import { ResponsiveInfo } from "~~/store/model/ResponsiveInfo"

export interface Categories {
    [key: string]: Object
}

export interface IndexPage {
    [key: string]: any
}

export interface CategoryPage extends IndexPage  {
    title: string,
    h1: string,
    responsive: ResponsiveInfo,
    result: { products: Array<Product>, categories: Array<any>, overview: Object }
}

export interface DB {
    index: IndexPage,
    categories: Categories,
    products: Array<Product>
}

export interface ProductPage {
    product: Product,
    responsive: ResponsiveInfo,
    productsAlsoLike: Array<Product>,
    categories: Array<Category>,
    overview: Overview
}