import { generateVDOM } from "./vdom.js";
import PociError from "./error.js";

export class Init{
    #virtualDOM;
    #originalVDOM;
    #data;
    constructor(rootSelector, data = {}) {
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

    #track(dom, vdom){
        if(vdom === null || vdom === undefined) return generateVDOM(dom);
        const {attributes} = dom;
        if(vdom.$$label !== dom.dataset.label || dom.tagName.toLocaleLowerCase() !== vdom.name) return generateVDOM(dom);

        for(const attribute of Object.keys(attributes)){
            const result = vdom.props.filter(prop => prop.name !== attribute.name && attribute.name !== "data-label");
            if(result.length !== 0) return generateVDOM(dom);
        }
        let index = 0;
        for(const child of dom.childNodes){
            if(child.nodeType === Node.TEXT_NODE && index >= vdom.children.length) continue;
            vdom.children[index] = this.#track(child, vdom.children[index]);
            index++;
        }
    }

    track(){
        this.#originalVDOM = this.#track(this.rootDOM, this.#originalVDOM);
    }

    /**
     * @param {Element} root 
     */
    #removeLabel(root = this.rootDOM){
        root.removeAttribute("data-label", "");
        for(let index = 0; index < root.children.length; index++)
            this.#removeLabel(root.children[index]);
    }

    /**
     * remove poci in the element
     */
    pull(){
        this.#removeLabel();
        this.rootSelector = "";
        this.rootDOM = null;
        this.#originalVDOM = {};
        this.#virtualDOM = {};
        this.#data = {};
        this.data = {};
    }
}