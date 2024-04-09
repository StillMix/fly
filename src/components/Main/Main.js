import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Card from '../Card/Card';
function Main(props) {

  return (
    <div className="main">
           <Header />
           <div className='main__card'>
           {props.cards && props.cards.map((card) => {
            return(
                <Card key={card._id} card={ {...card} } />
            )
        })
        }
           </div>
    </div>
  );
}

export default Main;