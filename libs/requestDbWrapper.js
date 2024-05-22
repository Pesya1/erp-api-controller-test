
import config from '../config/index.js'
import logger from '../config/logger.js';



const beforeRequestDB = (query, params) => {
    try {
        if (!query)
            throw { message: 'no query object sent to db' };
        let page = params && params.query && params.query.page ? params.query.page : null;
        if (page)
            query.page = page;
            
        if (query.page) {
            //validation, and add pageLength
            if (!isNumber(query.page))
                throw { message: 'page parameter not number' };
            if (!query.itemsPerPage)
                query.itemsPerPage = config.db.itemsPerPage;
            return query;
        }
    }
    catch (error) {
        logger.error('error occured before request db', error);
        throw error;
    }
}

const isNumber = (value) => {
    return value != null && (typeof value == 'number' || (!isNaN(value) && !isNaN(parseFloat(value))))
}
export { beforeRequestDB }