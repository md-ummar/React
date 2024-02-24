import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//we can define function here also (for clean code we divide into different files)
function MyApp() {
  return (
    <>
      <h1> My custom function in main.jsx</h1>
    </>
  );
}

// can we pass the react customElement object here? we cannot pass because react has its own syntax to create element
// const customReactElement = {
// type: "a",
// props: {
//   href: "http:\\google.com",
//   target: "_blank",
// }

// In REACT element Tree is:

const reactElement = React.createElement(
  "a",
  { href: "http://google.com", target: "_blank" },
  "Vsist google through React Element"
);
const anotherElement = <h3> Created from another Element</h3>;
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
