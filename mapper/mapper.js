

// from erp-api-controller-acquisitions

export const toTableRec = (obj, objMapper, newRec) => {
    obj=obj||{};
    newRec = newRec || {};
    //simple copy
    Object.keys(obj).forEach(field => {
        if (objMapper.hasOwnProperty(field))
            newRec[objMapper[field]] = obj[field];
    });
    return newRec;
  }
  
  
  export const toObject = (rec, objMapper) => {
    let newObj = {};
    rec=rec||{};
    //simple copy
    Object.entries(objMapper).forEach(([paramField, tblField]) => {
        if (rec.hasOwnProperty(tblField))
            newObj[paramField] = rec[tblField]
    });
    return newObj;
  }
  
  export const mapListToTable = (list, objMapper) => {
    list = list.map(item => toTableRec(item, objMapper));
    return list;
  }
  
  export const mapListToObject = (list, objMapper) => {
    list = list.map(item => toObject(item, objMapper));
    return list;
  }
  

  // from erp-controller-customer
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

// from report-emailer
export const getAllTblFields=(objMapper)=>{
  let arr= Object.entries(objMapper).map(([paramField, tblField])=>{if(paramField!='tableName') return tblField; else return null}).filter(x=>x);
  return arr;
}
export const getAllParamFields=(objMapper)=>{
  let arr= Object.entries(objMapper).map(([paramField, tblField])=>{if(paramField!='tableName') return paramField; else return null}).filter(x=>x);
  return arr;
}