
export const convertFilterWhere = (filter) => {
    let filterArr = [];
    Object.entries(filter).forEach(([field, value]) => {
        filterArr.push({ field, value })
    });
    return filterArr;
}