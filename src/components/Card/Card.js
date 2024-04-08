import React from 'react';
import './Card.css';

function Card(props) {

  return (
    <div className="card">
          <p>Москва - Санкт-Петербург</p> 
          <p> Отправление: 16 января в 8:30</p>
          <p>Прибытие: 18 января в 10:20</p>
          <p>Цена: 4 980₽</p>
          <button className={`${props.isOpen ? 'dis' : ''}`}>Купить</button>
    </div>
  );
}

export default Card;