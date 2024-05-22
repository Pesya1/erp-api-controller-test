
export const convertFilterWhere = (filter) => {
    let filterArr = [];
    Object.entries(filter).forEach(([field, value]) => {
        filterArr.push({ field, value })
    });
    return filterArr;
}

export const cleanObject = (obj) => {
    const newObj = Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => value != null)
    );
    return newObj;
}


// ---------    test    ----------------------
const originalObject = {
    key1: 'value1',
    key2: null,
    key3: 'value3',
    key4: undefined,
    key5: 'value5'
};


let newObj=cleanObject(originalObject);
console.log(newObj);
// Output: { key1: 'value1', key3: 'value3', key5: 'value5' }