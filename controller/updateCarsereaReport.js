import logger from "../config/logger.js";
import client from "../libs/octopusClient.js";
import fs from 'fs';

export default async () => {
    try {
        let id = 8;
        let repoertPath=`D:\\projects\\myProjects\\emailer\\data\\backup ejs\\2024.03.27 no footer.ejs`;
        const data = fs.readFileSync(repoertPath, 'utf-8');

        let result =await client.request('db',{update:{'DATA':data},from:'WEB_REPORTS_TEMPLATES',where:[{field:'ID',value:id}]});


        let result2 =await client.request('db',{update:{'SENT':null,'RETRY_NUMBER':null},from:'EMAILER_EVENTS',where:[{field:'ID',value:'23'}]});

        console.log('update result:',result);
    }
    catch (error) {
        logger.error(`fail to update carserea report: ${error.message}`);
    }

}