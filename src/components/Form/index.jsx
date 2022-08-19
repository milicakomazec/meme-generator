import "./Form.scss";
import React from "react";
import memesData from "../../memes-data";
import { useState } from "react";

const Form = () => {
  const getRandomImg = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // const url = memesArray[randomNumber].url;
    const { url } = memesArray[randomNumber];
    setMemeImage(url);
  };

  const [memeImage, setMemeImage] = useState("");

  // useState() examples

  // const [arrayThings, setArrayThings] = useState(["thing 1", "thing 2"]);
  // const addNewThing = () => {
  //   setArrayThings((previousArrayThings) => [
  //     ...previousArrayThings,
  //     `thing ${arrayThings.length + 1}`,
  //   ]);
  // };

  // const [arr, setArr] = useState(["arr1", "arr2"]);
  // const addItem = () => {
  //   setArr((previousState) => [...previousState, `thing ${arr.length + 1}`]);
  // };

  // const [counter, setCounter] = useState(0);

  // const decreaseCounter = () => {
  //   setCounter((previousCounter) => previousCounter - 1);
  // };

  // const increaseCounter = () => {
  //   setCounter((previousCounter) => previousCounter + 1);
  // };

  // const [isGoingOut, setIsGoingOut] = useState(false);

  // const changeValue = () => {
  //   setIsGoingOut((prevState) => !prevState);
  // };

  return (
    <div className="form--container">
      <div className="form--input-container">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
        ></input>
      </div>
      <div className="img--wrapper">
        <img src={memeImage} width="400" height="300" alt="meme img"></img>
      </div>
      <button className="form--btn-get-meme" onClick={getRandomImg}>
        Get a new meme image
      </button>
      {/* <button onClick={addNewThing}>add new thing</button>
      {arrayThings.map((thing) => {
        return <div key={thing}>{thing}</div>;
      })} */}

      {/* <div className="counter--wrapper">
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
      </div> */}
    </div>
  );
};

export default Form;
