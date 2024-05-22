
// from erp-api-controller-inventory-yad-sarah
import config from "../config/index.js";
import logger from "../config/logger.js";
import client from "../libs/octopusClient.js";
import { errorE005thrower } from "../util/errorThrower.js";
import { convertFilterWhere, isArray } from "../util/utilFunctions.js";

export const options = { timeout: config.octopus.timeout };


export const sendExternalvalidatin = async (params, validationName) => {

    try {
        var v = await client.request('validation', { params, validationName }, options)
        return v;
    } catch (error) {
        errorE005thrower(error, 'validation');
        logger.error(`external validation '${validationName}' fail: ${error.message}`);
        throw { status: 401, message: error.message };
    }
}

export const schemaValidation = async (params, schema) => {
    try {
        await sendExternalvalidatin({ params, fieldsList: schema }, 'general.bySchema')
    } catch (error) {
        logger.error(`error in schema body validation: $${error.message}`)
        throw error;
    }

}

export const schemaValidation2 = async (params, schema) => {
    try {
        await client.request('validation', { validationName: 'general.bySchema', params: { params, fieldsList: schema } },
            { timeout: config.octopus.timeout })

    } catch (error) {
        errorE005thrower(error, 'validation');
        logger.error(`error in schema body validation: $${error.message}`)
        throw error;
    }
}


export const checkDBoptions = async (value, paramName, table, field, filterArr) => {
    {
        if ((value != null && value != undefined && value != '')) {
            try {
                if (filterArr && !isArray(filterArr) && typeof (filterArr) == 'object')
                    filterArr = convertFilterWhere(filterArr);
                let params = { table, paramName, field, value, filterArr }
                let result = await sendExternalvalidatin(params, 'general.isValueExists');
                // logger.debug(`validate ${paramName}  isValueExists success. select ${field} from ${table} where ${field}=${value} and ${JSON.stringify(filterArr)}`);
                return result;
            }
            catch (error) {
                logger.error(`fail to check db options. message: ${error.message}`);
                errorE005thrower(error, 'validation');
                if (error?.message?.includes("select * from")) {
                    logger.info(`validate ${paramName} isValueExists return sql statement in the  error message. select ${field} from ${table} where ${field}=${value} and ${JSON.stringify(filterArr)}`);
                    throw { message: `fail to check '${paramName}'`, status: 501 };
                }
                throw { message: error.message, status: 401 || error.status };

            }
        }

    }
}
