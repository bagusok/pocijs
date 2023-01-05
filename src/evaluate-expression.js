// @ts-check
"use strict";

import PociError from "./error.js";
import map from "./helper/map.js";
import { VNode } from "./vdom.js";

const EXPRESSION_PATTERN = /^((\w+|\w+\[(\d+)\])(->)?)*$/;
const WORD_PATERN = /^\w+$/;
const ARRAY_ACCESS_PATERN = /^((\w+)\[(\d+)\])$/;
const CURLY_BRACKET_PATTERN = /{{(.+?)}}/;


/**
 * expression evaluator
 * @param {string} expression 
 * @param {Object} data 
 * @returns {*}
 */
function evaluateSingleExpresssion(expression, data){
    expression = expression.replace(/\s+/g, "");
    if(!EXPRESSION_PATTERN.test(expression))
        throw new PociError(`${expression} is not expression`, PociError.ExpressionInvalid);

    const units = expression.split("->");
    let value = {...data};

    
    for(const unit of units){
        if(WORD_PATERN.test(unit)){
            // is value exits
            const isObjectKeysExits = Object.keys(value).indexOf(unit) !== -1;
            if(!isObjectKeysExits)
                throw new PociError(`${unit} is not found`, PociError.ExpressionInvalid);
            
            value = value[unit];
        }else{
            // @ts-ignore
            const [ ,, name, index  ] = ARRAY_ACCESS_PATERN.exec(unit);

            // is value exits
            const isObjectKeysExits = Object.keys(value).indexOf(name) !== -1;
            const isValueArray = Array.isArray(value[name]);
            const isIndexExits = value[name].length > index;
            if(!isObjectKeysExits || !isValueArray || !isIndexExits)
                throw new PociError(`${unit} is not found`, PociError.ExpressionInvalid);
            
            value = value[name][index];
        }
    }

    return value;
}

/**
 * @param {string} text 
 * @param {Object} data 
 * @returns {string}
 */
function evaluateMultiExpression(text, data){
    while(CURLY_BRACKET_PATTERN.test(text)){
        const [, expression] = CURLY_BRACKET_PATTERN.exec(text);
        const result = evaluateSingleExpresssion(expression, data);

        text = text.replace(CURLY_BRACKET_PATTERN, result);
    }

    return text;
}

/**
 * @param {object} vdom 
 * @param {object} data 
 * @returns {object}
 */
export default function evaluateExpressionVDOM(vdom, data){
    // evaluate properties
    vdom.props = map(vdom.props, prop => {
        prop.content = evaluateMultiExpression(prop.content, data);
        return prop;
    });

    // evaluate children
    vdom.children = map(vdom.children, child => {
        if(child.type === VNode.text)
            child.content = evaluateMultiExpression(child.content, data);
        else
            child = evaluateExpressionVDOM(child, data);
        return child;
    });

    return vdom;
}