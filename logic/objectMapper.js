// export const myObj = {
//     : '',
//     : '',
// }


export const obj = {
    active: 'ACTV_Y_N',
    city: 'CITY',
    country_code: 'CNTY_CODE',
    crm_job_code: 'CRM_JOB_CODE',
    customers_forum: 'CUSTOMERS_FORUM',
    email: 'E_MAIL',
    extnin_number: 'EXTNTN_NUMBER',
    on_invite: 'IS_CONFERENCE_INVITE',
    is_marketing: 'IS_MRKTNG_DSTRBTN',
    job_description: 'JOB_DSCR',
    name: 'CNTCT_PRSN_NAME',
    primary: 'PRMY_Y_N',
    neighborhood: 'QTR',
    street: 'STREET',
    settle_code: 'SETTLE_CODE',
}


export const toTableRec = (obj) => {
    let newRec = {};
    //simple copy
    Object.keys(obj).forEach(field => {
        if (tbl.hasOwnProperty(field))
            newRec[tbl[field]] = obj[field];
    });
    return newRec;
}

export const toObject = (rec) => {
    let newObj = {};
    //simple copy
    Object.entries(tbl).forEach(([paramField, tblField]) => {
        if (rec.hasOwnProperty(tblField))
            newObj[paramField] = rec[tblField]
    });
    return newObj;
}

export const mapListToApi=(list,objMapper)=>{
    list=list.map(item=>toApiRec(item,objMapper));
    return list;
}

export const mapListToObject=(list,objMapper)=>{
    list=list.map(item=>toObject(item,objMapper));
    return list;
}

// replace between codes  and letter
export const vatTyeMap = {
    0: 'פ',
    1: 'ח',
    2: 'מ'
}

export const pmntTypeMap = {
    1: 'צ',
    2: 'ה',
    3: 'מ',
    4: 'ס',
    5: 'א',
}

export const getCodeType = (letter, map) => {
    let code = -1;
    Object.entries(map).forEach(([c, l]) => {
        if (l == letter)
            code = c;
    })
    return code;
}
export const getLetterType = (number, map) => {
    return map[number];
}
