import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(20);
  function addValue() {
    if (counter != 21) {
      setCounter(counter + 1);
    }
  }

  function removeValue() {
    if (counter != 0) {
      setCounter(counter - 1);
    }
  }
  //Project Incrementing and decrementing number on click

  return (
    <>
      <h3>The value stored : {counter}</h3>
      <button onClick={addValue} id="addValue">
        Increment Value {counter}
      </button>
      <br />
      <button onClick={removeValue} id="removeValue">
        Decrement Value
      </button>
    </>
  );
}

export default App;
