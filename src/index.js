"use strict";

import { generateVDOM } from "./vdom.js";
import track from "./track.js";
import PociError from "./error.js";
import evaluateExpression from "./evaluate-expression.js";
import render from "./render.js";

/**
 * class for init the poci
 */
class Init
{
    #vdom;
    #template;
    #modelGroup;
    #connection = {};
    #listenerStack = [];

    /**
     * @param {string} rootSelector 
     * @param {Object} modelGroup 
     */
    constructor(rootSelector, modelGroup = {}) 
    {
        this.root = document.querySelector(rootSelector);

        // validate parameters
        if(this.root === null || this.root === null)
            throw new PociError("root is not found", PociError.ParameterInvalid);
        else if(typeof modelGroup !== "object" || modelGroup === null || Array.isArray(modelGroup))
            throw new PociError("modelGroup is not valid", PociError.ParameterInvalid);
        
        // init properties
        this.#template = generateVDOM(this.root);
        this.#vdom = {...this.#template};
        this.#modelGroup = modelGroup;
        this.model = modelGroup;

        // render
        this.render();
        this.#connect(
            this.root.querySelectorAll("input[data-connectFor], textarea[data-connectFor], select[data-connectFor]")
        );

        const isRootInputElement = ["textarea", "input", "select"].indexOf(this.root.nodeName.toLocaleLowerCase()) !== -1;
        if(isRootInputElement && this.root.dataset.connectfor !== undefined){
            this.#connect([this.root]);
        }
    }

    #actionForConnectionElement = ({target:el})=>{
        const key = el.dataset.connectfor;
        const callbackListener = [];

        for(const listener of this.#listenerStack)
            if(listener[0] === key || listener[0] === "*") callbackListener.push(listener[1]);
        
        this.set(key, el.value);

        for(const listener of callbackListener){
            listener({
                key,
                value:el.value,
            });
        }
    }

    #connect(elements){
        for(const element of elements){
            const key = element.dataset.connectfor;
            if(Object.hasOwn(this.#modelGroup, key))
                throw new PociError(`${key} is not found`, PociError.ParameterInvalid);
            
            const label = new Date().getTime().toString(16);
            element.value = this.#modelGroup[key];
            element.addEventListener("input", this.#actionForConnectionElement);
            
            element.$$label = label;
            this.#connection[label] = [
                element,
                key
            ];
        }
    }
    
    disconnect(label){
        if(Object.hasOwn(this.#connection, label))
            throw new PociError(`${label} is not found`, PociError.ParameterInvalid);
        
        const [ element ] = this.#connection[label];
        element.removeEventListener("input", this.#actionForConnectionElement);
        this.#connection[label] = null;
    }

    listenConnection(key, callback){
        if(Object.hasOwn(this.#modelGroup, key) && key !== "*")
            throw new PociError(`${key} is not found`, PociError.ParameterInvalid);
        
        this.#listenerStack.push([key,callback]);
    }

    /**
     * render element
     */
    render()
    {
        // geerate new dom
        const newDOM = evaluateExpression(this.#template, this.#modelGroup);

        // render
        render(this.#vdom, newDOM, this.root);

        // update vdom
        this.#vdom = newDOM;
    }

    /**
     * set key
     * @param {string} key 
     * @param {*} value 
     */
    set(key, value)
    {
        // update
        this.#modelGroup[key] = value;
        this.model = {...this.#modelGroup};

        // render
        this.render();
        
    }

    /**
     * track changes in real dom
     */
    track()
    {
        this.#template = track(this.root, this.#template);
    }


    /**
     * remove poci in the element
     */
    pull()
    {
        // remove property
        this.root = null;
        this.#template = null;
        this.#vdom = null;
        this.#modelGroup = null;
        this.modelGroup = null;
        this.#listenerStack = null;

        // remove connection
        for(const [element] of Object.values(this.#connection))
            element.removeEventListener("input", this.#actionForConnectionElement);
        
        // remove property
        this.#connection = null;
        this.#actionForConnectionElement = null;
    }
}

export default {
    Init
};