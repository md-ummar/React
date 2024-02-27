import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-600 bg-lime-500 p-4 rounded-3xl mb-4">
        React with TailWind
      </h1>
      <Card username="ABCD" btnTxt="Visit Me" />
      <Card username="XYZ12" btnTxt="Click Me" />
    </>
  );
}

export default App;
