import {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter Component Mounted");
  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
}

// Every component that is created elsewhere and intended to be used elsewhere, it needs an export
export default Counter;
