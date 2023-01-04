// @ts-check
import map from "./helper/map.js";
import randomInt from "./helper/randomInt.js";

/**
 * node
 */
class VNode{
    /**
     * @param {string} type 
     * @param {string} name 
     * @param {string|null} content
     */
    constructor(type, name, content){
        this.type = type;
        this.name = name;
        this.content = content;
    }

    /**
     * element type
     * @typedef {string}
     */
    static element = "element";

    /**
     * properties type
     * @typedef {string}
     */
    static props = "properties";
    
    /**
     * text node type
     * @typedef {string}
     */
    static text = "textNode";
}

/**
 * element
 * @extends VNode
 */
class VElement extends VNode{
    /**
     * 
     * @param {string} name 
     * @param {Array<VNode>} children
     * @param {Array<VAttribute>} props 
     */
    constructor(name, children, props, label){
        super(VNode.element, name, null);
        this.$$label = label;
        this.props = props;
        this.children = children;
    }
}

/**
 * attribute
 * @extends VNode
 */
class VAttribute extends VNode{
    /**
     * @param {string} key 
     * @param {string|null} content 
     */
    constructor(key, content) {
        super(VNode.props, key, content ?? "");
        
    }
}

/**
 * text node
 */
class VText extends VNode{
    /**
     * @param {string|null} content
     */
    constructor(content) {
        super(VNode.text, "", content ?? "");
    }
}

/**
 * generate vdom
 * @param {Element} root 
 */
export function generateVDOM(root)
{
    let label = (new Date().getTime() * randomInt(1, 50)).toString(36);

    // generate props
    const props = map(Object.keys(root.attributes), (index) => {
        const value = root.attributes[index];
        if(value.nodeName === "data-label") {
            // @ts-ignore
            label = value.nodeValue;
            return null;
        }
        return new VAttribute(value.nodeName, value.nodeValue);
    });

    // generate label
    const vdom = new VElement(root.tagName.toLocaleLowerCase(), [], props, label);
    // @ts-ignore
    root.dataset.label = label;

    // generate velement or vtext
    for(const child of root.childNodes){
        if(child.nodeType === Node.TEXT_NODE){
            vdom.children.push(new VText(child.nodeValue));
        }else if(child.nodeType === Node.ELEMENT_NODE){
            vdom.children.push(
                // @ts-ignore
                generateVDOM(child)
            )
        }
    }

    return vdom;
}