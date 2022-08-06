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
    console.log(url);
  };
  const [arr, setArr] = useState(["arr1", "arr2"]);
  const addItem = () => {
    const newItem = `arr${arr.length + 1}`;
    setArr((previousState) => [...previousState, newItem]);
  };
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
      <button className="form--btn-get-meme" onClick={getRandomImg}>
        Get a new meme image
      </button>
      <button onClick={addItem}>add item</button>
      {arr.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default Form;
