import config from "../config/index.js"
import client from "../libs/octopusClient.js"
import { existsRecord } from "../modal/db.js"
import typeValidation from "./typeValidation.js"


/**
 * check if all the properties in paramsObj are numbers.
 * @param {object} paramsObj 
 */
export const validNumbersParams = (paramsObj,numberFields) => {
    requireFields.forEach(field => {
        if (!typeValidation.isNumber(paramsObj[field]))
            throw { message: `${field} param is not valid .please supply valid number`,status:401 }
    })
}

export const validateType = (paramsObj,fields,func,typeName) => {
    requireFields.forEach(field => {
        if (!func(paramsObj[field]))
            throw { message: `${field} param is not valid ${typeName} .please supply valid ${typeName}`,status:401 }
    })
}

/**
 * check if all the fields in requireFields arr exists in params
 * @param {object} params 
 * @param {string []} requireFields 
 */
export const requireFieldsValidation = (params, requireFields) => {
    if (!params)
        throw { message: 'require fields is missing' }
    requireFields.forEach(field => {
        if (typeValidation.isArray(field)) {
            if (field.findIndex(f => params.hasOwnProperty(f) && params[f]!=null) == -1)
                throw { message: 'please supply one of this parameters:' + JSON.stringify(field) };
        }
        else if (!params.hasOwnProperty(field) || params[field]==null)
            throw { message: `${field} is require field` }
    })
}

export const exsistsCodeValidation = async (firmCode, customerCode, invoiceNumber) => {

        await sendExternalvalidatin(customerCode, 'customer.customerCode');
        await sendExternalvalidatin(firmCode, 'general.firmCode');
    

    let filterArr = [
        { field: 'FIRM_CODE', value: firmCode },
        { field: 'PRMY_TRNS_CLSS', value: 324 },
        { field: 'CUST_CODE', value: customerCode },
        { field: 'INVC_NBR', value: invoiceNumber }
    ];
    let existsInvoice = await existsRecord(filterArr, 'INVOICES_TTLS')
    if (!existsInvoice)
        throw { status: 401, data: { status: 401 }, message: `invoice not found. no invoice number '${invoiceNumber}', in firm: '${firmCode}', for customer: '${customerCode}'` };
}


const sendExternalvalidatin = async (param, validationName) => {

    try {
        let options = {timeout:config.octopus.timeout};

        var v = await client.request("validation", {
            params: param,
            validationName: validationName,
        }, options)

        return v;
    } catch (error) {
        throw error;
    }
}

export const checkOptions = (value, options, paramName) => {
    if(!value)
    throw { message: `no value for the parameter ${paramName}. the parameter cant be null`, status: 401 }

    var index = options.findIndex(f => f == value);
    if (index == -1)
        throw { message: `the value '${value}' for the parameter ${paramName} is not valid. the value should be one of this options: ${JSON.stringify(options)}`, status: 401 }
}