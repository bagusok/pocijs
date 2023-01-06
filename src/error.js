// @ts-check
"use strict";

/**
 * class for generating error
 */
export default class PociError extends Error{
    /**
     * @param {string} msg 
     * @param {string} type 
     */
    constructor(msg, type){
        super(`[error] : ${msg}<${type}>`);
        this.msg = msg;
        this.type = type;
    }

    /**
     * type error if paramater is not valid
     * @type {"ParameterNotValid"}
     */
    static ParameterInvalid = "ParameterNotValid";

    /**
     * type error if hook expresion is not valid
     * @type {"HookExpressionNotValid"}
     */
    static HookExpressionInvalid = "HookExpressionNotValid";
}