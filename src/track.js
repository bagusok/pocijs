// @ts-ignore
"use strict";

import { generateVDOM } from "./vdom.js";

/**
 * track changes in real dom
 * @param {Element} dom 
 * @param {Object} vdom 
 * @returns 
 */
export default function track(dom, vdom)
{
    const isVDOMNull = vdom === null || vdom === undefined;
    const isLabelEqual = vdom.$$label === dom.dataset.label;
    const isTagNameEqual = dom.tagName.toLocaleLowerCase() === vdom.name;
    if(isVDOMNull || !isLabelEqual || !isTagNameEqual) return generateVDOM(dom);

    // track changes of properties
    const { attributes } = dom;
    const attributesValue = Object.values(attributes);
    const { props } = vdom;

    for(const attribute of attributesValue){
        const result = (() => {
            for(const prop of props){
                if(attribute.nodeName === "data-label" || prop === null) continue;
                if(prop.name !== attribute.nodeName) return false;
            }
        })();

        if(result === false) return generateVDOM(dom);
    }

    // track changes of children
    let index = 0;
    for(const child of dom.childNodes){
        const isChildTextNode = child.nodeType === Node.TEXT_NODE;
        if(isChildTextNode || index >= vdom.children.length) continue;
        
        vdom.children[index] = track(child, vdom.children[index]);
        index++;
    }

    return vdom;
}