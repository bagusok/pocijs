// @ts-check

import { VNode } from "./vdom";

export default function convertVDOMToDOM(vdom)
{
    /**
     * @type {Element}
     */
    const root = document.createElement(vdom.name);
    for(const prop of vdom.props)
        root.setAttribute(prop.name, prop.content);
    
    root.setAttribute("data-label", vdom.$$label);
    
    for(const child of vdom.children){
        if(child.type === VNode.element)
            root.appendChild(convertVDOMToDOM(child));
        else
            root.appendChild(document.createTextNode(child.content));
    }
    return root;
}