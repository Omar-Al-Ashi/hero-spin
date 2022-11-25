import React from 'react';
import './Card.css'
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

const Card = ({headerText, image, cardClicked}) => {
  return (
    <div className="result" onClick={cardClicked}>
      <img src={image} alt={image}/>
      <h3>{headerText}</h3>
    </div>
  )
}

export default Card;