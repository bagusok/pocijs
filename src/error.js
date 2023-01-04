"use strict";

/**
 * class for generating error
 */
export default class PociError extends Error{
    /**
     * @param {string} msg 
     * @param {"ParameterInvalid"} type 
     */
    constructor(msg, type){
        super(`[error] : ${msg}<${type}>`);
        this.msg = msg;
        this.type = type;
    }

    static ParameterInvalid = "ParameterInvalid";
}