import React, { useState } from "react";
import "./Card.scss";

const Card = () => {
  const [contact, setContact] = useState({
    firstName: "Jack",
    lastName: "Sparrow",
    phone: "+1 (781) 555-3332",
    email: "sparrow@gmail.com",
    isFavorite: false,
  });

  let starImg;
  contact.isFavorite ? (starImg = "filled") : (starImg = "empty");

  //   const changeFavorite = () => {
  //     setContact((prevContact) => {
  //       return {
  //         ...prevContact,
  //         isFavorite: !contact.isFavorite,
  //       };
  //     });
  //   };

  //return an object, need to wrap it inside () , {()}
  const changeFavorite = () => {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  };
  return (
    <div className="card--container">
      <div className="card-img--wrapper">
        <img
          className="user-photo"
          src="../../media/user.png"
          alt="user img"
          width="150"
          height="150"
        ></img>
        <div></div>
      </div>
      <div className="card-text-container">
        <div className="card-text-title">
          <img
            alt="star icon"
            width="20"
            height="20"
            src={`../../media/star-${starImg}.png`}
            onClick={changeFavorite}
          ></img>
          <div>
            {contact.firstName} {contact.lastName}
          </div>
        </div>

        <div>{contact.phone}</div>
        <div>{contact.email}</div>
      </div>
    </div>
  );
};

export default Card;
