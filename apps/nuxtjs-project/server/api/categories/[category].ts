import { db } from '../../db';
import { sendError } from 'h3';

export default defineEventHandler( async (e) => {
    const findCategoryByName = (category: string) => {
        const result = db.categories[category as keyof typeof db];

        if(!result) {
            const error = createError({
                statusCode: 404,
                statusMessage: "Category not found"
            })
            sendError(e, error);
        }
        return result;
    }

    if(e.node.req.method === 'GET') {
        const { category } = getRouterParams(e);
        return findCategoryByName(category);
    }
})