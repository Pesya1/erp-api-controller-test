
// from erp-api-controller-inventory-yad-sarah


export const callUniface = async (name, params) => {
    //call uniface
    try {
        let obj = { requestID: params.requst_number, name, aps: config.uniface.aps, params };
        logger.debug(`go to call uniface call1 WS_331_API. send object:`);
        console.log(obj);
        let uniface = await client.request("uniface", obj, { timeout: config.octopus.timeout * 10 });
        logger.debug('uniface proccess finished');
    }
    catch (error) {
        logger.error(`fail to call uniface. message: ${error.message}`);
        errorE005thrower(error, 'uniface');
        throw error;
    }
}



export const call_WS_331_API = async (payload) => {
    let request_number = getRequestNumber();
    const params = {
        requst_number: request_number,
        user_name: config.uniface.user,
        lgstc_firm_code: payload.firm_code,
        fncl_firm_code: payload.firm_code,
        blnc_year: new Date().getFullYear(),
        maale_site: config.uniface.maaleSite,
        entry_code: config.uniface.entry_code,
        evnt_date: changeFormat(payload.event_date, 'DD/MM/YYHH:mm:ss')
    }
    await callUniface('WS_331_API', params);
    return request_number;
}


export const getRequestNumber = () => {
    const now = new Date();

    // Format date components with zero-padding for two digits
    const day_str = now.getDate().toString().padStart(2, '0');
    const month_str = (now.getMonth() + 1).toString().padStart(2, '0');
    const year_str = now.getFullYear().toString();
    const hour_str = now.getHours().toString().padStart(2, '0');
    const minute_str = now.getMinutes().toString().padStart(2, '0');
    const second_str = now.getSeconds().toString().padStart(2, '0');

    // Construct the desired string
    const string = `331${day_str}${month_str}${year_str}${hour_str}${minute_str}${second_str}`;

    // console.log(string);
    return string;
}