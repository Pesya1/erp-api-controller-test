import fs from 'fs';
// import data from './template.ejs'
import logger from '../config/logger.js';
import client from "../libs/octopusClient.js";


export default async function (){
    try{
         logger.debug('test update template');
    const data = fs.readFileSync('D:/projects/myProjects/emailer/data/backup ejs/2024.03.27 no footer.ejs', 'utf-8');

    const sqlQuery = `UPDATE WEB_REPORTS_TEMPLATES
    SET DATA = '${data}'
    WHERE ID = 8;`; 

    const query1={update:{'DATA':data},from:'WEB_REPORTS_TEMPLATES',where:[{field:'ID',value:8}]}
    const query2={update:{'RETRY_NUMBER':null,'SENT':null},from:'EMAILER_EVENTS',where:[{field:'ID',value:23}]}

    var result=await client.request('db',query1);
    var result2=await client.request('db',query2);

    logger.debug(`successfully executed SQL query  `);

    }
    catch(err){
        logger.error(`fail to test update templat: ${err.message}`);
    }
  

}