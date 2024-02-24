// Custom Render method: how using JS we can inject the custom Render some what similar to React.
// In react similar things is done again and again when we return the html element

function customRender(customReactElement, domElement) {
  // Below code is not iterable we can make it more efficint by adding loop:
  //   const customElement = document.createElement(customReactElement.type);
  //   customElement.innerHTML = customReactElement.children;
  //   customElement.setAttribute("href", customReactElement.props.href);
  //   customElement.setAttribute("target", customReactElement.props.target);
  //   domElement.appendChild(customElement);

  const customElement = document.createElement(customReactElement.type);
  customElement.innerHTML = customReactElement.children;
  for (const prop in customReactElement.props) {
    if (prop === "children") continue;
    customElement.setAttribute(prop, customReactElement.props[prop]);
  }
  domElement.appendChild(customElement);
}

// html element which our CustomReactElement stores.
//In react similar  tree is created with all elements.
const customReactElement = {
  type: "a",
  props: {
    href: "http:\\google.com",
    target: "_blank",
  },

  children: "Visit Google website",
};

const domElement = document.getElementById("root");

customRender(customReactElement, domElement);
