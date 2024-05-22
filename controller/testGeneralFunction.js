import client from "../libs/octopusClient.js";
import logger from "../config/logger.js";


export default async function (params) {
    try {
        logger.debug(`wellcome to test general function controller`);

        var result=await client.request('functions', { name: 'budget.getBudgetItemCode',
					       params:{firm_code:21} })

        return {message:'hi',status:'OK'};

    }
    catch (err) {
        logger.error(`testGeneralFunction controller failed: ${err.message}`);
        throw err;
    }
}