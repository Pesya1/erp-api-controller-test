import config from "../config/index.js";
import client from "../libs/octopusClient.js";
import { getNumber } from "../libs/utilities.js";
import typeValidation from './typeValidation.js'


/**
 * go to validation service
 * @param {object} customerParams 
 * @param {string} validationName 
 * @returns 
 */
const sendExternalvalidatin = async (customerParams, validationName) => {
    let options = {};
    options.timeout = config.octopus.timeout
    try {
        var v = await client.request("validation", {
            params: customerParams,
            validationName: validationName,
        }, options)
        return v;
    } catch (error) {
        throw error;
    }
}



export const checkOptions = (value, options, paramName) => {
    var index = options.findIndex(f => f == value);
    if (index == -1)
        throw { message: `the value '${value}' for the parameter ${paramName} is not valid. the value should be one of this options: ${JSON.stringify(options)}`, status: 401 }
}


/**
 * check if all the fields in requireFields arr exists in params
 * @param {object} params 
 * @param {string []} requireFields 
 */
export const requireFieldsValidation = (params, requireFields) => {
    if (!params)
        throw { message: 'require fields is missing' }
    requireFields.map(field => {
        if (typeValidation.isArray(field)) {
            if (field.findIndex(f => params.hasOwnProperty(f)) == -1)
                throw { message: 'please supply one of this parameters:' + JSON.stringify(field) };
        }
        else if (!params.hasOwnProperty(field))
            throw { message: `${field} is require field` }
    })
}


/**
 * check if length of the string params is valid
 * @param {string []} arr 
 * @param {object } params 
 */
export const stringLengthValidation = (arr, params) => {
    arr.map(field => {
        if (params.hasOwnProperty(field.name)) {
            if (!typeValidation.isString(params[field.name]))
                throw { message: `the parameter ${field.name} is not string. A string value is require` }
            if (params[field.name].length > field.length)
                throw { message: `the length of the parameter ${field.name} is too long. the maximum length is ${field.length}` }
        }
        else
            console.log('no field', field);
    })
}

/**
 * check if the length of the numbers params is valid
 * @param {string []} arr 
 * @param {object } params 
 */
export const numberLengthValidation = (arr, params) => {
    arr.map(field => {
        if (params.hasOwnProperty(field.name)) {
            if (!typeValidation.isNumber(params[field.name]))
                throw { message: `the parameter ${field.name} is not number. number value is require` };
            let value = params[field.name];
            if (!(typeof value == 'string'))
                value = value.toString();
            let [a, b] = value.split('.');
            if (!a || a.length > field.length[0])
                throw { message: `the length of the parameter ${field.name} is too long. the maximum length is ${field.length[0]}` }
            if (b != undefined && b.length > field.length[1])
                throw { message: `the length of the parameter ${field.name} is too long. the maximum length is ${field.length[1]}` }
        }
    })
}

export const numberGreaterZero = (arr, params) => {
    arr.map(field => {
        if (params.hasOwnProperty(field)) {
            let value = getNumber(params[field]);
            if (!value || value < 0)
                throw { message: `the parameter ${field} must be greater then 0`, status: 401 };
        }
    });
}

export const dateValidation = (arr, params) => {
    arr.map(field => {
        if (params.hasOwnProperty(field)) {
            if (!typeValidation.isValidDate(params[field]))
                throw { message: `the parameter ${field} is not valid date. A yyyy-mm-dd date format is required` }
        }
    });
}


export default { sendExternalvalidatin }