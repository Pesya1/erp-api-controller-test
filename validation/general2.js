
/**
 * check if all the properties in paramsObj are numbers.
 * @param {object} paramsObj 
 */
export const validNumbersParams = (paramsObj, numberFields) => {
    requireFields.forEach(field => {
        if (!typeValidation.isNumber(paramsObj[field]))
            throw { message: `${field} param is not valid .please supply valid number`, status: 401 }
    })
}

export const validateType = (paramsObj, fields, func, typeName) => {
    requireFields.forEach(field => {
        if (!func(paramsObj[field]))
            throw { message: `${field} param is not valid ${typeName} .please supply valid ${typeName}`, status: 401 }
    })
}

export const checkOptions = (value, options, paramName, hideList) => {
    var index = options.findIndex(f => f == value);
    if (index == -1)
        if (options.length > 10 || hideList)
            throw { message: `the value '${value}' for the parameter ${paramName} is not exists in the options list for the '${paramName}'`, status: 401 };
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
            if (field.findIndex(f => params.hasOwnProperty(f) && params[f] != null) == -1)
                throw { message: 'please supply one of this parameters:' + JSON.stringify(field) };
        }
        else if (!params.hasOwnProperty(field) || params[field] == null)
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

export const sendExternalvalidatin = async (param, validationName) => {

    try {
        let options = { timeout: config.octopus.timeout };

        var v = await client.request("validation", {
            params: param,
            validationName: validationName,
        }, options)

        return v;
    } catch (error) {
        throw error;
    }
}
