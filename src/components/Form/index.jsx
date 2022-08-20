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
    </div>
  );
};

export default Form;
