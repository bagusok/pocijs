// @ts-chec
"use strict";

import convertVDOMToDOM from "./convert-vdom-to-dom.js";
import { VNode } from "./vdom.js";
/**
 * function for render element
 * @param {Element} DOM
 * @param {VElement} rootNewVDOM
 * @param {VElement} rootOldVDOM
 */
export default function render(rootOldVDOM, rootNewVDOM, DOM)
{
    // render the children
    for(const index in rootNewVDOM.children){
        const newChild = rootNewVDOM.children[index];
        const oldChild = rootOldVDOM.children[index];
        const DOMChild = DOM.childNodes[index];
        
        if(newChild.type === VNode.element){
            render(oldChild, newChild, DOMChild);
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