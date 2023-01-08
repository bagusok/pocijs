export default value => {
    if(typeof value === "string") return value;
    else if(typeof value === "number" || typeof value === "bigint" || typeof value === "function") 
        return value.toString();
    else if(value === null || value === undefined) return "";
    else if(typeof value === "boolean") return value === true ? "true" : "false";
    else if(typeof value === "object") return JSON.stringify(value);
    
    return value;
}