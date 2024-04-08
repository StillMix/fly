import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
import FlyLogoBlue from '../../images/flylogoblue.svg';

function Header() {

  return (
    <div className="header">
         <img src={FlyLogoBlue} className='header__logo' alt='логотип'/>
         <Link to="/main" className='header__link'>Билеты</Link>
         <Link to="/mybil" className='header__link'>Мои билеты</Link>
         <Link to="/addbil" className='header__link'>Добавить билет</Link>
         <Link to="/signin" className='header__linkBack'>Выйти из акканта</Link>
    </div>
  );
}

export default Header;