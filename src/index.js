"use strict";

import { generateVDOM } from "./vdom.js";
import track from "./track.js";
import PociError from "./error.js";
import convertVDOMToDOM from "./convert-vdom-to-dom.js";
import evaluateExpression from "./evaluate-expression.js";

export class Init
{
    #virtualDOM;
    #originalVDOM;
    #data;

    /**
     * @param {string} rootSelector 
     * @param {Object} data 
     */
    constructor(rootSelector, data = {}) 
    {
        this.rootSelector = rootSelector;
        this.rootDOM = document.querySelector(rootSelector);

        // validate parameters
        if(this.rootDOM === null)
            throw new PociError("root is not found", PociError.ParameterInvalid);
        else if(typeof data !== "object" || data === null || Array.isArray(data))
            throw new PociError("data is not valid", PociError.ParameterInvalid);
        
        
        this.#originalVDOM = generateVDOM(this.rootDOM);
        this.#virtualDOM = generateVDOM(this.rootDOM);
        this.#data = data;
        this.data = data;
    }

    /**
     * @param {string} key 
     * @param {*} value 
     */
    set(key, value)
    {
        this.#data[key] = value;
        this.data = {...this.#data};
        this.#virtualDOM = evaluateExpression(this.#originalVDOM, this.#data);
        this.rootDOM.parentNode.replaceChild(
            convertVDOMToDOM(this.#virtualDOM),
            this.rootDOM,
        );
        this.rootDOM = document.querySelector(this.rootSelector);
        
    }

    track()
    {
        this.#originalVDOM = track(this.rootDOM, this.#originalVDOM);
    }

    /**
     * @param {Element} root 
     */
    #removeLabel(root = this.rootDOM)
    {
        root.removeAttribute("data-label", "");
        for(let index = 0; index < root.children.length; index++)
            this.#removeLabel(root.children[index]);
    }

    /**
     * remove poci in the element
     */
    pull()
    {
        this.#removeLabel();
        this.rootSelector = "";
        this.rootDOM = null;
        this.#originalVDOM = {};
        this.#virtualDOM = {};
        this.#data = {};
        this.data = {};
    }
}