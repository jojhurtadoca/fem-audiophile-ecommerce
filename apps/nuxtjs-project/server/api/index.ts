import { db } from '../db';

export default defineEventHandler( async (e) => {
    if(e.node.req.method === 'GET') {
        return db.index;
    }
})