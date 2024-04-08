import React from 'react';
import './MyBil.css';
import Header from '../Header/Header';
import Card from '../Card/Card';
function MyBil() {

  return (
    <div className="main">
           <Header />
           <div className='main__card'>
                  <Card isOpen={true}/>
           </div>
    </div>
  );
}

export default MyBil;