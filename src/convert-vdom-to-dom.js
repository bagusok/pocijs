"use strict";

import { VElement, VNode, VText } from "./vdom.js";

/**
 * convert virtual dom to dom
 * @param {VElement|VText} vdom 
 * @returns {Element|Text}
 */
export default function convertVDOMToDOM(vdom)
{
    
    // if vdom is text generate text node
    if(vdom.type === VNode.text)
        return document.createTextNode(vdom.content)

    // generate element
    const root = document.createElement(vdom.name);

    // generate attributes
    for(const prop of vdom.props) 
        root.setAttribute(prop.name, prop.content);

    // generate children    
    for(const child of vdom.children)
        root.appendChild(convertVDOMToDOM(child));
    
    return root;
}