export default class PociError extends Error{
    constructor(msg, type){
        super(`[error] : ${msg}<${type}>`);
        this.msg = msg;
        this.type = type;
    }

    static ParameterInvalid = "ParameterInvalid";
}