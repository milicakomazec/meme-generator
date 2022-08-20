import React, { useState } from "react";
import "./Counter.scss";

//useState examples
const Counter = () => {
  const [arrayThings, setArrayThings] = useState(["thing 1", "thing 2"]);
  const addNewThing = () => {
    setArrayThings((previousArrayThings) => [
      ...previousArrayThings,
      `thing ${arrayThings.length + 1}`,
    ]);
  };

  const [counter, setCounter] = useState(0);

  const decreaseCounter = () => {
    setCounter((previousCounter) => previousCounter - 1);
  };

  const increaseCounter = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };

  const [isGoingOut, setIsGoingOut] = useState(false);

  const changeValue = () => {
    setIsGoingOut((prevState) => !prevState);
  };
  return (
    <div>
      <button onClick={addNewThing}>Add new thing</button>
      {arrayThings.map((thing) => {
        return <div key={thing}>{thing}</div>;
      })}{" "}
      <div className="counter--wrapper">
        <button className="btn--counter-left" onClick={decreaseCounter}>
          -
        </button>
        <div className="counter">{counter}</div>
        <button className="btn--counter-right" onClick={increaseCounter}>
          +
        </button>
      </div>
      <div onClick={changeValue}>
        text: {isGoingOut ? "yes" : "no"} {isGoingOut.toString()}
      </div>
    </div>
  );
};

export default Counter;
