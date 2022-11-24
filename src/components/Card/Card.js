import React, {useEffect} from 'react';
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import {Card as PrimeReactCard} from "primereact/card";

const Card = ({headerText, image, subTitle}) => {

  const header = (
    <img
      alt="Card"
      src={image}
      style={{height: '15rem', width: '20rem', objectFit: 'contain'}}
      onError={(e) =>
        (e.target.src = image)
      }
    />
  );

  return (
    <PrimeReactCard
      title={headerText}
      subTitle={subTitle}
      header={header}
      style={{width: "20em", height: '20rem'}}
    >
    </PrimeReactCard>
  )
}

export default Card;