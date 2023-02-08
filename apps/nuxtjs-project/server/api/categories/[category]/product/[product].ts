import { db } from '~~/server/db';
import { sendError } from 'h3';
import { CategoryPage, ProductPage } from '~~/server/db/model';
import { Product } from '~~/store/model/Product';

export default defineEventHandler( async (e) => {
    const getAllCategories = () => {
        return db.index['data']['categories'];
    }

    const getOverview = () => {
        return db.index['data']['overview'];
    }

    const getProductById = (id: number) => {
        const product = db.products.find(p => p.id === id);
        
        if(!product) {
            const error = createError({
                statusCode: 404,
                statusMessage: "Product not found"
            })
            sendError(e, error);
        }

        return product;
    }

    const findProductByIdAndCategory = (category: string, product: string) => {
        const result = db.categories[category as keyof typeof db] as CategoryPage;

        if(!result) {
            const error = createError({
                statusCode: 404,
                statusMessage: "Category not found"
            })
            sendError(e, error);
        }

        const productRes = result.result.products
            .find(p => p.id === parseInt(product)) as unknown as Product;

        if(!productRes) {
            const error = createError({
                statusCode: 404,
                statusMessage: "Product not found"
            })
            sendError(e, error);
        }

        const productResult: ProductPage = {
            product: productRes,
            responsive: result.responsive,
            productsAlsoLike: [],
            categories: getAllCategories(),
            overview: getOverview()
        }

        productResult.product.productsAlsoLiKe?.forEach(id => {
            const product = getProductById(id);
            if(product) {
                productResult.productsAlsoLike.push(product);
            }
        });

        return productResult;
    }

    if(e.node.req.method === 'GET') {
        const { category, product } = getRouterParams(e);
        return findProductByIdAndCategory(category, product);
    }
});