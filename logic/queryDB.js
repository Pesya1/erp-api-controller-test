import config from "../config/index.js";
import logger from "../config/logger.js";
import client from "../libs/octopusClient.js";
import { errorE005thrower } from "../util/errorThrower.js";
import { convertFilterWhere } from "../util/utilObject.js";

export const dbOptions = { timeout: config.octopus.timeout };


export const querydb = async (query) => {
    try {
        if (query?.filter)
            query.where = [...(query.where || []), ...(convertFilterWhere(query.filter || {}) || [])];
        let result = await client.request('db', query, dbOptions);
        return result;
    }
    catch (error) {
        errorE005thrower(error, 'db');
        throw error;
    }
}

/**
 * get  value for [table].[field] by filters. default- first value, if sent all- all values for the field 
 * @param {string} field -field name
 * @param {string} table -table name
 * @param {object} filter key-value filter, {FIRM_CODE:21,STATUS:1..}
 * @param {boolean} all 
 * @returns 
 */
export const getValue = async (field, table, filter = {}, all = false) => {
    let first = !all;
    let filterArr = convertFilterWhere(filter);
    const query = {
        select: [field],
        from: table,
        where: filterArr,
        first
    };
    let result = await querydb(query);
    if (result) {
        if (all) {
            let mappedResult = result.map(x => { return x[field] });
            return mappedResult;
        }
        return result[field];
    }
    else return null;
}
