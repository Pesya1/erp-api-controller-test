

export const insert = async (tableName, record) => {
    try {
        let query = { insert: record, from: tableName };
        let result = await client.request('db', query, clientOptions);
        return result;
    }
    catch (error) {
        logger.error(`fail to insert  new rec to ${tableName} db table: ${error.message}`);
        errorE005thrower(error, 'db');
        throw { message: `fail to insert new rec to ${tableName} db table`, status: 501 };
    }
}

export const update=async (tableName,record)=>{
    try {
        let query = { update: record, from: tableName };
        let result = await client.request('db', query, clientOptions);
        return result;
    }
    catch (error) {
        logger.error(`fail to update  rec to ${tableName} db table: ${error.message}`);
        errorE005thrower(error, 'db');
        throw { message: `fail to update  rec to ${tableName} db table`, status: 501 };
    }
}


export const updateRec=(id)=>{
    let now=new Date().toISOString().split('T')[0];
    now={ raw: `TO_DATE('${rec[tbl.update_date]}', 'YYYY-MM-DD')` };
    let newRec={
        ID:id,
        UPDATED_AT:now
    }
}