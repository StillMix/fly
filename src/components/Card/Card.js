import React from 'react';
import './Card.css';

function Card(props) {

  return (
    <div className="card">
          <p>{`${props.card.ot} - ${props.card.kuda}`}</p> 
          <p>{`Отправление: ${props.card.koda}`}</p>
          <p>{`Прибытие: ${props.card.kodaku}`}</p>
          <p>{`Цена: ${props.card.cent}₽`}</p>
          <button className={`${props.isOpen ? 'dis' : ''}`}>Купить</button>
    </div>
  );
}

export default Card;