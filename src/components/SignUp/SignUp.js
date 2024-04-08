import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom'; 
import Cloud from '../../images/clouds.png';

function SignUp() {
  return (
    <div className="signup">
        <div className='signup__form'>
                <p className='signup__title'>Регистрация</p>
                <p className='signup__subtitle'>Создайте новый аккаунт</p>
                <form>
                    <label>
                        <p className='input__text'>Электронная почта*</p>
                        <input className='signup__input' />
                    </label>
                    <label>
                        <p className='input__text'>Пароль*</p>
                        <input className='signup__input' type='password' />
                    </label>
                    <button className='signup__btn'>Зарегистрироваться</button>
                </form>
                <p className='signup__link'>Уже есть аккаунт? <Link to='/'>Вы можете войти</Link></p>
        </div>
     <img src={Cloud} className='signup__bck' alt='фон'/>
    </div>
  );
}

export default SignUp;