import logger from "../config/logger.js";


export const errorThrower = (error, message,status) => {
    if (error && error.status)
        throw error;
    throw {message:message || ` proccess failed: ${error.message}`,status:status||500};
}


/**
 * throw microservice connect error, if the error occure with erroCode E005
 * @param {object} error 
 * @param {string} serviceName 
 */
export const errorE005thrower = (error, serviceName) => {
    if (error.data && error.data.errorCode === 'E005') {
        let newError ={status:500,message: `${serviceName} microservice not active`,data:{status:500}};
        logger.error(`${serviceName} microservice not active: ${newError.message}`);
        throw newError;
    }
}
