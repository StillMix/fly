import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
import FlyLogoBlue from '../../images/flylogoblue.svg';

function Header() {

  return (
    <div className="header">
         <img src={FlyLogoBlue} className='header__logo' alt='логотип'/>
         <Link to="/" className='header__link'>Билеты</Link>
         <Link to="/addbil" className='header__link'>Добавить билет</Link>
    </div>
  );
}

export default Header;