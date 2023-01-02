// @ts-check
/**
 * node
 */
class VNode{
    /**
     * @param {string} type 
     * @param {string} name 
     * @param {string|null} content 
     * @param {Node} node 
     */
    constructor(type, name, content, node){
        this.$$node = node;
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
     * @param {Node} node 
     * @param {Array<VAttribute>} props 
     */
    constructor(name, children, node, props){
        super(VNode.element, name, null, node);
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
     * @param {Node} node 
     */
    constructor(key, content, node) {
        super(VNode.props, key, content ?? "", node);
        
    }
}

/**
 * text node
 */
class VText extends VNode{
    /**
     * @param {string|null} content 
     * @param {Node} node 
     */
    constructor(content, node) {
        super(VNode.text, "", content ?? "", node);
    }
}

/**
 * generate vdom
 * @param {Element} root 
 */
export function generateVDOM(root)
{
    // generate props
    let props = new Array(
        Object.keys(root.attributes).length
    );
    for(let index = 0; index < props.length; index++){
        const value = root.attributes[index];
        props[index] = 
            new VAttribute(value.nodeName, value.nodeValue, value);
    }

    const vdom = new VElement(root.tagName.toLocaleLowerCase(), [], root, props);
    for(const child of root.childNodes){
        if(child.nodeType === Node.TEXT_NODE){
            vdom.children.push(
                new VText(child.nodeValue, child)
            );
        }else if(child.nodeType === Node.ELEMENT_NODE){
            vdom.children.push(
                // @ts-ignore
                generateVDOM(child)
            )
        }
    }

    return vdom;
}