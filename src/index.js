"use strict";

import { generateVDOM, VNode } from "./vdom.js";
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

        this.render();
    }


    /**
     * @param {Element} DOM
     */
    #render(rootOldVDOM, rootNewVDOM, DOM)
    {
        for(const index in rootNewVDOM.children){
            const newChild = rootNewVDOM.children[index];
            const oldChild = rootOldVDOM.children[index];
            const DOMChild = DOM.childNodes[index];
            
            if(newChild.type === VNode.element){
                this.#render(oldChild, newChild, DOMChild);
            }else if(newChild.type === VNode.text && newChild.content !== oldChild.content){
                DOMChild.nodeValue = newChild.content;
            }
        }

        let index = 0;
        for(const oldProp of rootOldVDOM.props){
            if(oldProp == null) continue;
            
            const newProp = rootNewVDOM.props[index];
            
            if(oldProp.content !== newProp.content){
                DOM.parentElement.replaceChild(
                    convertVDOMToDOM(rootNewVDOM),
                    DOM,
                );
                return true;
            }

            
            index++;
        }
    }

    render(){
        const newDOM = evaluateExpression(this.#originalVDOM, this.#data);
        this.#render(this.#virtualDOM, newDOM, this.rootDOM);
        this.#virtualDOM = newDOM;
    }

    /**
     * @param {string} key 
     * @param {*} value 
     */
    set(key, value)
    {
        this.#data[key] = value;
        this.data = {...this.#data};
        this.render();
        
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