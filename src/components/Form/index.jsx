import "./Form.scss";
import React from "react";

const Form = () => {
  return (
    <form className="form">
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
        <button className="form--btn-get-meme">Get a new meme image</button>
      </div>
    </form>
  );
};

export default Form;
