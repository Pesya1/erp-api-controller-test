// replace between key  and value
export const vatTyeMap = {
    0: 'פ',
    1: 'ח',
    2: 'מ'
}

export const map = {
    'כ': true,
    'ל': false,
}
getKeyByValue(true,map) // return כ
getValueByKey('ל',map) // return false

export const getKeyByValue = (value, map) => {
    let foundKey = -1;
    Object.entries(map).forEach(([key, v]) => {
        if (v == value)
            foundKey = key;
    })
    return foundKey;
}
export const getValueByKey = (key, map) => {
    return map[key];
}



export const isNameChanged = (name, orginal) => {
    let orginalName = parseJson(orginal)?.name;
    if (orginalName && orginalName === name)
        return false;
    return true;
}
