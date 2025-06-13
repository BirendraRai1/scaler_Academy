const dom = {
  type: "section",
  props: {
    id: "section-1",
    class: "main-section",
    style: "background-color: lightblue; padding: 20px; border-radius: 5px;",
  },
  children: [
    {
      type: "header",
      children: "Welcome to Soni Frontend Doc",
      props: {
        style: "font-size: 24px; color: darkblue; text-align: center;",
      },
    },
    {
      type: "article",
      children: [
        {
          type: "h2",
          children: "Render DOM",
          props: { style: "color: darkgreen;" },
        },
        {
          type: "p",
          children: "Try youself first then look for solution",
          props: { style: "font-size: 16px; color: grey;" },
        },
      ],
    },
    {
      type: "footer",
      children: "Thanks you :)",
      props: {
        style: "text-align: center; font-size: 14px; color: black;",
      },
    },
  ],
};

function render(dom) {
  let { type, props, children } = dom;
  let root = document.createElement(type);
  for (let attr in props) {
    let element = props[attr];
    root.setAttribute(attr, element);
  }
  if (Array.isArray(children)) {
    for (let child of children) {
      console.log("child is ", child);
      const element = render(child);
      root.appendChild(element);
    }
  } else if (typeof children == "string") root.textContent = children;
  return root;
}
const rootEle = document.getElementById("root");
if (rootEle) {
  rootEle.appendChild(render(dom));
}
