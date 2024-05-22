import logger from "../config/logger.js";
import client from "../libs/octopusClient.js";
import config from "./../config/index.js";


import fs from 'fs/promises';
import path from 'path';
import fs2 from 'fs';

export const insertReport = async (params) => {
    try {
        let report_name = 'users';
        if (params && params.query && params.query.name)
            report_name = params.query.name;
        let action = 'insert';
        let options = { timeout: config.octopus.timeout };
        var result = await client.request("report", { report_name, action }, options);
        return result;
    }
    catch (error) {
        logger.error(`fail to to to report service and to insert report. message: ${error.message}`);
        throw error;
    }

}

export const getReport = async (params) => {
    let report_name = 'users';
    if (params && params.query && params.query.name)
        report_name = params.query.name;
    let action = 'get';

    console.log('f work');

    let options = {};
    options.timeout = config.octopus.timeout;
    let exportType = 'pdf';
    try {
        var v = await client.request("report", {
            report_name,
            action,
            firm_code: 2,
            username: 'y',
            export: exportType,
        }, options)


        const __dirname = path.resolve();
        let reportPath = path.join(__dirname, `./output/${report_name}_2.${exportType}`);
        const readWrite = async () => {
            try {
                const writeStream = fs2.createWriteStream(reportPath);
                return new Promise(resolve => {
                    v.stream().on("data", data => {
                        writeStream.write(data);
                    })

                    v.stream().on('end', async () => {
                        writeStream.end();
                        resolve('read&write successfully');

                    })
                })
            }
            catch (error) {
                console.log('error read stream');
                throw error;
            }
        } 
        await readWrite();

        return 'read&write successfully';
    } catch (error) {
        throw error;
    }
}