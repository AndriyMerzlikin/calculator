import { useState, useEffect } from "react";

export const Calculator = () => {
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState("value is not 10");
  const increment = () => {
    setClicks(clicks + 1);
  };

  const decrement = () => {
    setClicks(clicks - 1);
  };

  useEffect(() => {
    if (clicks === 10) {
      setText("It`s 10!!!");
    } else {
      setText("value is not 10");
    }
  }, [clicks]);
  return (
    <div>
      <h1>{clicks}</h1>
      <button onClick={increment}>Increment</button>
      <p>{text}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
