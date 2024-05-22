

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

