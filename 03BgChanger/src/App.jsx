import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap inset-x-0 bottom-12 px-2  justify-center ">
        {" "}
        <div className="bg-white flex flex-wrap gap-3 rounded-3xl px-3 py-2 shadow-lg ">
          <button
            onClick={() => setColor("orange")}
            className="justify center p-3 rounded-full px-4 py-1 shadow-xl outline-none "
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("purple")}
            className="justify center p-3 rounded-full px-4 py-1 shadow-xl outline-none "
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("green")}
            className="justify center p-3 rounded-full px-4 py-1 shadow-xl outline-none "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="justify center p-3 rounded-full px-4 py-1 shadow-xl outline-none "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("red")}
            className="justify center p-3 rounded-full px-4 py-1 shadow-xl outline-none "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
