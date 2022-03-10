import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const onKeyDown = (e) => {
    console.log(e.key);

    if (e.keyCode === 8) {
      if (count === 0) {
        setCount(0);
        return true;
      }
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="counter">
      <p>Compteur : {count}</p>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
        onKeyDown={(event) => onKeyDown(event)}>
      </input>
    </div>
  );
}

export default Counter;

// const Counter = () => {
//   const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount(count + 1)
//   }

//   const decrement = () => {
//     setCount(count - 1)
//   }

//   const reset = () => {
//     setCount(0)
//   }

//   return (
//     <div>
//        <p>{count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Counter;
