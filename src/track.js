// @ts-check
"use strict";

import { generateVDOM, VElement } from "./vdom.js";

/**
 * track changes in real dom
 * @param {Element} dom 
 * @param {VElement} vdom 
 * @returns 
 */
export default function track(dom, vdom)
{
    // generate new dom if the root of real dom changes
    const isVDOMNull = vdom === null || vdom === undefined;
    const isTagNameEqual = dom.tagName.toLocaleLowerCase() === vdom.name;
    if(isVDOMNull || !isTagNameEqual) return generateVDOM(dom);

    // track changes of properties
    const { attributes } = dom;
    const attributesValue = Object.values(attributes);
    const { props } = vdom;

    for(const attribute of attributesValue){
        const isAttributeSame = (() => {
            for(const prop of props)
                if(prop.name !== attribute.nodeName) return false;
        })();

        if(isAttributeSame === false) return generateVDOM(dom);
    }

    // track changes of children
    let index = 0;
    for(const child of dom.childNodes){
        const isChildTextNode = child.nodeType === Node.TEXT_NODE;
        if(isChildTextNode || index >= vdom.children.length) continue;
        
        // @ts-ignore
        vdom.children[index] = track(child, vdom.children[index]);
        index++;
    }

    return vdom;
}