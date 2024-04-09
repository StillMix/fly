import React,{useState} from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom'; 
import Cloud from '../../images/clouds.png';

function SignUp(props) {

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
    <div className="signup">
        <div className='signup__form'>
                <p className='signup__title'>Регистрация</p>
                <p className='signup__subtitle'>Создайте новый аккаунт</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p className='input__text'>Логин*</p>
                        <input className='signup__input' name="LoginInput" value={formValues.LoginInput}  onChange={handleChange}/>
                    </label>
                    <label>
                        <p className='input__text'>Пароль*</p>
                        <input className='signup__input' name="PasswordInput" value={formValues.PasswordInput}  onChange={handleChange} type='password' />
                    </label>
                    <button className='signup__btn' type="submit">Зарегистрироваться</button>
                </form>
                <p className='signup__link'>Уже есть аккаунт? <Link to='/'>Вы можете войти</Link></p>
        </div>
     <img src={Cloud} className='signup__bck' alt='фон'/>
    </div>
  );
}

export default SignUp;