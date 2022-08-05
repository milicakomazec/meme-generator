import "./Form.scss";
import React from "react";

const Form = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  //   const handleMouseOver = () => {
  //     console.log("mouse over");
  //   };
  return (
    <div className="form--container">
      <div className="form--input-container">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          // onMouseOver={handleMouseOver}
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
        ></input>
      </div>
      <button className="form--btn-get-meme" onClick={handleClick}>
        Get a new meme image
      </button>
    </div>
  );
};

export default Form;
