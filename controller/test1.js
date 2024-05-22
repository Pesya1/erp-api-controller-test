import client from "../libs/octopusClient.js";
import config from "./../config/index.js";
import fs from 'fs/promises';
import path from 'path';
import fs2 from 'fs';
import { beforeRequestDB } from "../libs/requestDbWrapper.js";
import { createEmail, addAttachment, send } from './sendEmail.js';
import logger from "../config/logger.js";





const callSelectChildren = async () => {
    const queryCusts = {
        select: ['CUST_CODE', 'CUST_LONG_DSCR'],
        from: '4CUSTS5',
        page:1,
        children: [
            {
                name: 'contactPersons',
                from: 'CNTCT_PRSNS',
                select: ['CNTCT_PRSN_CODE', 'ENT_TYPE', 'ENT_CODE', 'FIRM_CODE', 'CNTCT_PRSN_NAME'],
                parentKey: 'CUST_CODE',//name of the column in parent table
                childKey: 'ENT_CODE'//name of the column in child table
                //    ||
                //   \  /
                //    \/
                // the value in childResult[childKey] should be equal to the value in parentResult[parentKey]                 
            }
        ]
    }

    const queryAllCusts={
        select:'*',
        from: 'CUSTS',
        first: true
        //page:1
    }

    const queryPermission = {
        select: ['ID', 'NAME'],
        from: '--API_PERMISSION_GROUPS',
        children: [
            {
                name: 'users',
                from: 'API_USERS',
                select: ['ID', 'USERNAME', 'EMAIL'],
                first: true,
                parentKey: 'ID',//name of the column in parent table
                childKey: 'ID',//name of the column in child table
                //    ||
                //   \  /
                //    \/
                //  the value in childResult[childKey] should be equal to the value in connectionTable_result[onChildKey],
                // and the value in parentResult[parentKey] should be equal to the value in connectionTable_result[onParentKey]  

                connectionTable: {
                    table: 'API_PERMISSION_GROUPS_USERS',
                    onParentKey: 'API_PERMISSION_GROUP_ID',
                    onChildKey: 'API_USER_ID',
                    select: ['CREATED_AT', 'UPDATED_AT']
                }
            }
        ]

    }

    const queryUsers = {
        select: ['id', 'name', 'email'],
        from: 'user',
        children: [
            {
                name: 'products',
                from: 'product',
                select: ['id', 'ownerId', 'name'],
                parentKey: 'id',//name of the column in parent table
                childKey: 'ownerId',//name of the column in child table
                //    ||
                //   \  /
                //    \/
                // the value in childResult[childKey] should be equal to the value in parentResult[parentKey]                 
                children: [
                    {
                        name: 'clients',
                        from: 'user',
                        select: ['id', 'name', 'email'],
                        parentKey: 'id',//name of the column in parent table
                        childKey: 'id',//name of the column in child table
                        //    ||
                        //   \  /
                        //    \/
                        //  the value in childResult[childKey] should be equal to the value in connectionTable_result[onChildKey],
                        // and the value in parentResult[parentKey] should be equal to the value in connectionTable_result[onParentKey]  

                        connectionTable: {
                            table: 'productToUser',
                            onParentKey: 'productId',
                            onChildKey: 'userId',
                            select: ['sum']
                        }
                    }
                ]
            }
        ]
    }
    try{

        let result1 = await client.request("db", beforeRequestDB(queryAllCusts,{query:{page:1}}) );
    }
    catch(error){
        logger.error(`fail to query: ${error.message}`);
    }
    try{

        let result1 = await client.request("db", beforeRequestDB(queryCusts,{query:{page:1}}) );
    }
    catch(error){
        logger.error(`fail to query: ${error.message}`);
    }

    let result = await client.request("db", beforeRequestDB(queryPermission,{query:{page:1}}) );

    return result;
}


const selectWithFirst = async () => {
    let query = {
        select: ['ID', 'NAME'],
        from: 'API_PERMISSION_GROUPS',
        first: true
    }
    let result = await client.request("db", query);
    return result;

}

const withPage = async (params) => {
    let query = {
        select: ['CNTCT_PRSN_NAME'],
        from: 'CNTCT_PRSNS',
        page:1,
    }
    let result = await client.request("db", beforeRequestDB(query, params));
    return result;
}
let i = 1;


export const test2 = async (params) => {
    try {
               let result = await callSelectChildren();
       // let result = await addAttachment(params.query?params.query.id:null);
        return result;
    }
    catch (error) {
        console.log(error);
        return { message: 'error', data: error.message };
    }
}

export const test3 = async (params) => {
    try {
        //        let result = await callSelectChildren();
        let result = await send(params.query?params.query.id:null);
        return result;
    }
    catch (error) {
        console.log(error);
        return { message: 'error', data: error.message };
    }
}



