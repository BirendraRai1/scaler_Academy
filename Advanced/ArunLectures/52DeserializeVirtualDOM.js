function render(vDOM){
    const {type,props} = vDOM
    // If the current vDOM is a text node, we return it right away creating a text node
    if(isTextNode(vDOM)){
        const element = document.createTextNode(vDOM)
        return element
    }
    const root = document.createElement(type)
    const {children,...restProps} = props
    const attrProps = restProps
    for(let attr in attrProps){
        const value = attrProps[attr]
        root.setAttribute(attr,value)
    }
    if(Array.isArray(children)){
        for(let child of children){
            const element = render(child)
            root.appendChild(element)
        }
    }
    else{
        const element = render(children)
        root.appendChild(element)
    }
    return root
}

function isTextNode(vDOM){
    return typeof vDOM !=='object'
}

const root = document.getElementById('root');
function virtualDOM(root){
    const virtualTree = {
        type:root.tagName.toLowerCase()
    }
    const props = {}
    if(root.hasAttributes()){
        const attributes = root.attributes
        //console.log("root attributes are ",attributes)
        for(let i=0;i<attributes.length;i++){
            const name = attributes[i].name
            const value = attributes[i].value
            if(name=='class')
                props['className'] = value
            else
                props[name] = value
        }
    }
    const children = []
    if(root.childNodes.length>0){
        console.log("logging root.childNodes is",root.childNodes.length)
        for(let i=0;i<root.childNodes.length;i++){
            const node = root.childNodes[i]
            
            if(node.nodeType===Node.TEXT_NODE){
                const text = node.textContent.trim().replace('\n','')
                if(text.length>0)
                    children.push(text)
            }
            else if(node.nodeType ===Node.ELEMENT_NODE){
                children.push(virtualDOM(node))
            }
        }
    }
    if(children.length)
     props.children = children
    virtualTree.props = props
    console.log("virtualTree is",virtualTree)
    return virtualTree
}
virtualDOM(root)

// const root = document.getElementById('root');
const vDOM = virtualDOM(root);
const renderedElement = render(vDOM);
document.body.appendChild(renderedElement);