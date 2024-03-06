import { useCallback, useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null); // Used to create reference.
  function passCopyToClipBoard() {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
  }
  //this caches the function into memory, this is optimized approach
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "!@#$%^&*()";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  //This hook call the function each time the dependencies are changed
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-3 my-10 text-orange-500 bg bg-gray-700">
      <h1 className="text-2xl text-center text-white">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-7">
        <input
          type="text"
          value={password}
          readOnly
          className="outline-none w-full py-2 px-6"
          placeholder="Password"
          ref={passRef}
        ></input>
        <button
          onClick={passCopyToClipBoard}
          className="outline-none bg-blue-500 hover:bg-blue-700 text-white px-4 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-2 ">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
