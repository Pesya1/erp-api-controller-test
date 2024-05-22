import logger from "../config/logger.js";


export default async function () {
    try {
        logger.debug('try to get report from report ms');
        const params = {
            doc_nbr: 1, export: null, firm_code: 21,
            prmy_trns_clss: 342,
            report_name: 'caersarea Purchase Order',
        }
        let reportStream = await client.request("report", params, options);
        logger.debug(`got report stream successfully`);
        return { message: 'ok', reportStream }


    }
    catch (err) {
        logger.error(`failed to get report from report ms`)
        throw err;
    }
}