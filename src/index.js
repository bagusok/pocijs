"use strict";

import { generateVDOM, VElement, VNode } from "./vdom.js";
import track from "./track.js";
import PociError from "./error.js";
import convertVDOMToDOM from "./convert-vdom-to-dom.js";
import evaluateExpression from "./evaluate-expression.js";

/**
 * class for init the poci
 */
export class Init
{
    #vdom;
    #template;
    #modelGroup;

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
        this.#vdom = generateVDOM(this.root);
        this.#modelGroup = modelGroup;
        this.modelGroup = modelGroup;

        // render
        this.render();
    }


    /**
     * @param {Element} DOM
     * @param {VElement} rootNewVDOM
     * @param {VElement} rootOldVDOM
     */
    #render(rootOldVDOM, rootNewVDOM, DOM)
    {
        // render the children
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

        // render root
        for(const index in rootOldVDOM.props){
            const oldProp = rootOldVDOM.props[index];
            const newProp = rootNewVDOM.props[index];
            
            // render the root if property value is not same
            if(oldProp.content !== newProp.content){
                DOM.parentElement.replaceChild(convertVDOMToDOM(rootNewVDOM), DOM);
                return null;
            }
        }
    }

    /**
     * render element
     */
    render()
    {
        // geerate new dom
        const newDOM = evaluateExpression(this.#template, this.#modelGroup);

        // render
        this.#render(this.#vdom, newDOM, this.root);

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
        this.modelGroup = {...this.#modelGroup};

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
        this.root = null;
        this.#template = null;
        this.#vdom = null;
        this.#modelGroup = null;
        this.modelGroup = null;
    }
}