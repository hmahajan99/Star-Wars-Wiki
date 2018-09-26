import React from 'react';
import Card from '../Card/Card';
import './CardList.css'


const CardList = ({cardsInfo}) => {
  return (
    <div className="CardList">

      {
        cardsInfo.map((cardInfo, i) => {
          return (
            <Card
              key={i}
              type={cardInfo.type}
              info={cardInfo.info}
            />
          );
        })
      }



    </div>
  );
}

export default CardList;


