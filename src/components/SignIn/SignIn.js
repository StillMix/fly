import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom'; 
import Cloud from '../../images/clouds.png';

function SignIn() {
  return (
    <div className="signin">
        <div className='signin__form'>
                <p className='signin__title'>Войти</p>
                <p className='signin__subtitle'>Введите свою почту и пароль что бы войти</p>
                <form>
                    <label>
                        <p className='input__text'>Электронная почта*</p>
                        <input className='signin__input' />
                    </label>
                    <label>
                        <p className='input__text'>Пароль*</p>
                        <input className='signin__input' type='password' />
                    </label>
                    <button className='signin__btn'>Войти</button>
                </form>
                <p className='signin__link'>Никогда не входили? <Link to='/signup'>Создайте новый аккаунт</Link></p>
        </div>
     <img src={Cloud} className='signin__bck' alt='фон'/>
    </div>
  );
}

export default SignIn;