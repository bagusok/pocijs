// @ts-check
"use strict";

import map from "./helper/map.js";

/**
 * node
 */
export class VNode
{
    /**
     * @param {string} type 
     * @param {string} name 
     * @param {string|null} content
     */
    constructor(type, name, content)
    {
        this.type = type;
        this.name = name;
        this.content = content;
    }

    /**
     * element type
     * @typedef {string}
     */
    static element = "Element";

    /**
     * properties type
     * @typedef {string}
     */
    static props = "Properties";
    
    /**
     * text node type
     * @typedef {string}
     */
    static text = "TextNode";
}

/**
 * element
 * @extends VNode
 */
class VElement extends VNode
{
    /**
     * 
     * @param {string} name 
     * @param {Array<VNode>} children
     * @param {Array<VAttribute>} props 
     */
    constructor(name, children, props)
    {
        super(VNode.element, name, null);
        this.props = props;
        this.children = children;
    }
}

/**
 * attribute
 * @extends VNode
 */
class VAttribute extends VNode
{
    /**
     * @param {string} key 
     * @param {string|null} content 
     */
    constructor(key, content) 
    {
        super(VNode.props, key, content ?? "");
        
    }
}

/**
 * text node
 */
class VText extends VNode
{
    /**
     * @param {string|null} content
     */
    constructor(content) 
    {
        super(VNode.text, "", content ?? "");
    }
}

/**
 * generate vdom
 * @param {Element} root 
 */
export function generateVDOM(root)
{

    // generate props
    const props = map(Object.keys(root.attributes), (index) => {
        const value = root.attributes[index];
        return new VAttribute(value.nodeName, value.nodeValue);
    });

    // generate label
    const vdom = new VElement(root.tagName.toLocaleLowerCase(), [], props);

    // generate velement or vtext
    for(const child of root.childNodes){
        vdom.children.push(
            // @ts-ignore
            child.nodeType === Node.TEXT_NODE ? new VText(child.nodeValue) : generateVDOM(child)
        );
    }

    return vdom;
}