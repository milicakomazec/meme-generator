import "./Header.scss";
import React from "react";

const Header = () => {
  return (
    <div className="header--container">
      <div className="header--logo">
        <img
          src="../../media/troll-face.png"
          alt="troll face"
          className="logo-img"
        ></img>
        <div className="header--title">Meme Generator</div>
      </div>
      <div className="header--text-right">React Course - Project 3</div>
    </div>
  );
};

export default Header;
