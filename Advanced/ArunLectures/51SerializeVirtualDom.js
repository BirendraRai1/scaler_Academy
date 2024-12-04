const root = document.getElementById("root");
function virtualDOM(root) {
  const virtualTree = {
    type: root.tagName.toLowerCase(),
    //root.tagName.toLowerCase() returns the tag name of the DOM element represented by
    //root, converted to lowercase For a <div> element, root.tagName will return "DIV".
  };
  const props = {};
  if (root.hasAttributes()) {
    const attributes = root.attributes;
    // <div id="root" class="container"></div>
    // <span></span>
    //console.log(root.hasAttributes()); // Output: true (has `id` and `class`)
    console.log("root attributes are ", attributes);
    for (let i = 0; i < attributes.length; i++) {
      const name = attributes[i].name;
      const value = attributes[i].value;
      if (name == "class") props["className"] = value;
      else props[name] = value;
    }
  }
  const children = [];
  if (root.childNodes.length > 0) {
    console.log("root.childNodes.length is", root.childNodes.length);
    for (let i = 0; i < root.childNodes.length; i++) {
      const node = root.childNodes[i];
      console.log("node is ", node);
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.trim().replace("\n", "");
        if (text.length > 0) children.push(text);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        children.push(virtualDOM(node));
      }
    }
  }
  if(children.length>0)
    props.children = children.length === 1 ? children[0] : children;
  virtualTree.props = props;
  console.log("virtualTree is", virtualTree);
  return virtualTree;
}
virtualDOM(root);

/*<div id="root">
  Text
  <span>Child 1</span>
  <p>Child 2</p>
  <!-- A comment -->
</div>
const root = document.getElementById('root');
console.log(root.childNodes.length); // Output: 4
Explaination
Child 1: Text node ("Text")
Child 2: <span> element
Child 3: <p> element
Child 4: Comment node
console.log(root.children.length); // Output: 2
Counts only the <span> and <p> elements.
*
*
*
<div id="example">Hello <span>World</span></div>
The text "Hello " between <div> and <span> is treated as a text node.
The <span> element itself is an element node (not a text node).
*********/

/*Initialization:
root is the <div id="root"> element.
The function virtualDOM(root) is called, and an empty virtualTree object is initialized 
for this <div>.
Step-by-step traversal:
root.tagName.toLowerCase()

Converts DIV to div.
virtualTree starts as { type: 'div' }.
root.hasAttributes()

The <div> has the id attribute.
The props object is populated: { id: 'root' }.
root.childNodes

Contains 3 nodes:
Text Node: Whitespace ("\n ") — ignored because it's trimmed to an empty string.
Element Node: <h1>We have</h1> — passed to virtualDOM().
Element Node: <div class="container">...</div> — passed to virtualDOM().
Traversing <h1>:
Type: h1
Attributes: None.
Child nodes:
Text Node: "We have" — becomes a child of this virtual node.
Result: { type: 'h1', props: { children: 'We have' } }.
Traversing <div class="container">:
Type: div.

Attributes: class="container".

props: { className: 'container' }.
Child nodes:

Text Node: "successfully" — added as a child.
Element Node: <a href="https://google.com" target="_blank">implemented a</a> — passed to virtualDOM().
Element Node: <button>Custom</button> — passed to virtualDOM().
Element Node: <p>...</p> — passed to virtualDOM().
Traversing <a>:
Type: a.
Attributes: { href: 'https://google.com', target: '_blank' }.
Child nodes:
Text Node: "implemented a" — added as a child.
Result: { type: 'a', props: { href: 'https://google.com', target: '_blank', children: 'implemented a' } }.
Traversing <button>:
Type: button.
Attributes: None.
Child nodes:
Text Node: "Custom" — becomes a child.
Result: { type: 'button', props: { children: 'Custom' } }.
Traversing <p>:
Type: p.

Attributes: None.

Child nodes:

Element Node: <strong> — passed to virtualDOM().
Text Node: " " — ignored because it trims to empty.
Element Node: <span> — passed to virtualDOM().
Traversing <strong>:
Type: strong.
Attributes: { className: 'bold' }.
Child nodes:
Text Node: "Virtual DOM" — becomes a child.
Result: { type: 'strong', props: { className: 'bold', children: 'Virtual DOM' } }.
Traversing <span>:
Type: span.
Attributes: None.
Child nodes:
Text Node: "Implementation" — becomes a child.
Result: { type: 'span', props: { children: 'Implementation' } }.
*
*
************/
