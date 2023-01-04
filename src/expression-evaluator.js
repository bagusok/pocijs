// @ts-check
"use strict";

const expressionPattern = /^((\w+|\w+\[(\d+)\])(->)?)*$/;
const wordPattern = /^\w+$/;
const arrayAccessPattern = /^((\w+)\[(\d+)\])$/;

/**
 * expression evaluator
 * @param {string} expression 
 * @param {Object} data 
 * @returns 
 */
export default function expressionEvaluator(expression, data){
    if(!expressionPattern.test(expression)) return false;

    const units = expression.replace(/\s+/g, "").split("->");
    let value = {...data};
    
    for(const unit of units){
        if(wordPattern.test(unit)){
            // is value exits
            const isObjectKeysExits = Object.keys(value).indexOf(unit) !== -1;
            if(!isObjectKeysExits)
                return false;
            
            value = value[unit];
        }else{
            // @ts-ignore
            const [ ,, name, index  ] = arrayAccessPattern.exec(unit);

            // is value exits
            const isObjectKeysExits = Object.keys(value).indexOf(name) !== -1;
            const isValueArray = Array.isArray(value[name]);
            const isIndexExits = value[name].length > index;
            if(!isObjectKeysExits || !isValueArray || !isIndexExits)
                return false;
            
            value = value[name][index];
        }
    }

    return value;
}
