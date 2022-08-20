import "./Form.scss";
import React from "react";
import memesData from "../../memes-data";
import { useState } from "react";

const Form = () => {
  const getRandomImg = () => {
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // const url = memesArray[randomNumber].url;
    const { url } = memesArray[randomNumber];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const [allMemes, setAllMemes] = useState(memesData);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

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
        <img
          src={meme.randomImage}
          width="400"
          height="300"
          alt="meme img"
        ></img>
      </div>
      <button className="form--btn-get-meme" onClick={getRandomImg}>
        Get a new meme image
      </button>
    </div>
  );
};

export default Form;
