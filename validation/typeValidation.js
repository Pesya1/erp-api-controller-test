import moment from "moment"


const isNumber = (value) => {
    return value != null && (typeof value == 'number' || (!isNaN(value) && !isNaN(parseFloat(value))))
}

const isBoolean = (value) => {
    return value != null && (typeof value == 'boolean' || value == 'true' || value == 'false')
}

const isString = (value) => {
    return typeof value == 'string'
}
const isArray = (value) => {
    return Array.isArray(value)
}
const isObject = (value) => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

// valid date is 'yyyy-mm-dd' format
const isValidDate = value => {
    return moment(value, 'YYYY-MM-DD', true).isValid();
}

export default { isNumber, isBoolean, isString, isArray, isValidDate }