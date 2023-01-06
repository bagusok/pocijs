// @ts-check
"use strict";

import PociError from "./error.js";
import map from "./helper/map.js";
import { VElement, VNode, VText } from "./vdom.js";

const HOOK_EXPRESSION = /^((\w+|\w+\[(\d+)\])(->)?)*$/;
const WORD = /^\w+$/;
const ARRAY_ACCESS = /^((\w+)\[(\d+)\])$/;
const CURLY_BRACKET_PATTERN = /{{(.+?)}}/;


/**
 * expression evaluator
 * @param {string} expression 
 * @param {object} modelGroup 
 * @returns {*}
 */
function getModelFromHookExpression(expression, modelGroup)
{
    expression = expression.replace(/\s+/g, ""); // remove space in the expression

    // validate
    if(!HOOK_EXPRESSION.test(expression))
        throw new PociError(`${expression} is not hook expression`, PociError.HookExpressionInvalid);

    // split expression
    const units = expression.split("->");
    let value = {...modelGroup};

    for(const unit of units){
        if(WORD.test(unit)){
            // is value exits
            const isObjectKeysExits = Object.keys(value).indexOf(unit) !== -1;

            // validate
            if(!isObjectKeysExits)
                throw new PociError(`${unit} is not found`, PociError.HookExpressionInvalid);
            
            value = value[unit];
        }else{
            // @ts-ignore
            const [ ,, name, index  ] = ARRAY_ACCESS.exec(unit);

            // is value exits
            const isObjectKeysExits = Object.keys(value).indexOf(name) !== -1;
            const isValueArray = Array.isArray(value[name]);
            const isIndexExits = value[name].length > index;

            // validate
            if(!isObjectKeysExits || !isValueArray || !isIndexExits)
                throw new PociError(`${unit} is not found`, PociError.HookExpressionInvalid);
            
            value = value[name][index];
        }
    }

    return value;
}

/**
 * @param {string} text 
 * @param {Object} modelGroup 
 * @returns {string}
 */
function evaluateAllExpression(text, modelGroup)
{
    // evaluate all expression
    while(CURLY_BRACKET_PATTERN.test(text)){
        const [, expression] = CURLY_BRACKET_PATTERN.exec(text);
        const result = getModelFromHookExpression(expression, modelGroup);

        text = text.replace(CURLY_BRACKET_PATTERN, result);
    }

    return text;
}

/**
 * evaluate all expression in virtual DOM
 * @param {VElement} vdom 
 * @param {object} modelGroup 
 * @returns {VElement}
 */
export default function evaluateExpressionVDOM(vdom, modelGroup)
{
    // copy the vdom
    vdom = JSON.parse(JSON.stringify(vdom));

    // evaluate properties
    vdom.props = map(vdom.props, prop => {
        if(prop === null) return null;
        prop.content = evaluateAllExpression(prop.content, modelGroup);
        return prop;
    });

    // evaluate children
    vdom.children = map(vdom.children, child => {
        if(child.type === VNode.text)
            child.content = evaluateAllExpression(child.content, modelGroup);
        else
            child = evaluateExpressionVDOM(child, modelGroup);
        return child;
    });

    return vdom;
}