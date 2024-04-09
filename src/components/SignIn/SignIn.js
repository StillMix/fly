import React,{useState} from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom'; 
import Cloud from '../../images/clouds.png';

function SignIn(props) {
  const [formValues, setFormValues] = useState({});


  function handleChange(e) {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }



    function handleSubmit(event) {
      event.preventDefault();
     props.handleSubmit(formValues)
  }
  return (
    <div className="signin">
        <div className='signin__form'>
                <p className='signin__title'>Войти</p>
                <p className='signin__subtitle'>Введите свою почту и пароль что бы войти</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p className='input__text'>Логин*</p>
                        <input className='signin__input' name="LoginInput" value={formValues.LoginInput}  onChange={handleChange}/>
                    </label>
                    <label>
                        <p className='input__text'>Пароль*</p>
                        <input className='signin__input' name="PasswordInput" value={formValues.PasswordInput}  onChange={handleChange} type='password' />
                    </label>
                    <button className='signin__btn' type="submit">Войти</button>
                </form>
                <p className='signin__link'>Никогда не входили? <Link to='/signup'>Создайте новый аккаунт</Link></p>
        </div>
     <img src={Cloud} className='signin__bck' alt='фон'/>
    </div>
  );
}

export default SignIn;