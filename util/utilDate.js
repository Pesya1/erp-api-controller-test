//   uniface date format: DD/MM/YY HH:MM:SS 
// input date format: DD/MM/YYYY HH:mm:ssZ
// prev date format: YYYY-MM-DDTHH:mm:ssZ
export function isValidFormat(param) {
    return dayjs(param, 'YYYY-MM-DDTHH:mm:ssZ', true).isValid();
}

export const validateDateFormat = (value, format, paramName) => {
    let isValid =moment(value,format, true).isValid()
    if (!isValid)
        throw { status: 401, message: `The value for '${paramName}' should be date like this format: '${format}' ` }
}

export const changeFormat = (value, format) => {
    // Parse the string using dayjs
    const parsedDate = dayjs(value, "DD/MM/YYYY HH:mm:ssZ");
    // Format the date with the desired format
    const formattedDate = parsedDate.format(format);
    return formattedDate;
}



export const formatDateSql = (value) => {
    // update created_at: sqlUpdateNow()};
    let date = new Date(value);
    let format = date.toISOString().split('T')[0];
    let raw = { raw: `TO_DATE('${format}', 'YYYY-MM-DD')` };
    return raw;
}


export const getNow=()=>// Define the format string for the desired output
{
    // Define the format string for the desired output
const formatString = 'YYYY/MM/DD HH24:MI:SS';

// Get the current time
const now = new Date();

// Subtract 2 minutes from the current time
const twoMinutesAgo = new Date(now.getTime() - (2 * 60 * 1000));

// Use Intl.DateTimeFormat for precise formatting
const formatter = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

const formattedTime = formatter.format(twoMinutesAgo);
    logger.debug(`now before 2 minutes is: ${formattedTime}`);

    return formattedTime;
}

export const getLast2minutes=()=>{
    // Include Day.js library (assuming it's already loaded)

// Get the current dayjs object
const now = dayjs();

// Subtract 2 minutes from the current dayjs object
const twoMinutesAgo = now.subtract(2, 'minutes');

// Format the time string with the desired format
const formattedTime = twoMinutesAgo.format('YYYY/MM/DD HH:mm:ss'); // Note the use of mm for minutes
logger.debug(`now before 2 minutes is: ${formattedTime}`);

return formattedTime;
}
