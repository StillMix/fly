import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Card from '../Card/Card';
function Main() {

  return (
    <div className="main">
           <Header />
           <div className='main__card'>
                  <Card />
           </div>
    </div>
  );
}

export default Main;