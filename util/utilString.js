

// include, string contain sub string  
export const include = (str) => {
    let str = "Hello World!";
    let subStr = "World";

    if (str.includes(subStr, true)) {
        console.log("The string contains the sub-string anywhere.");
    } else {
        console.log("The string does not contain the sub-string.");
    }
}

// slice the str to be maximum maxLength
export const cut=(str,maxLength)=>{
    (str||'').slice(0, maxLength||10)
}