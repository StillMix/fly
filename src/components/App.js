import React, { useState,  useCallback} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Main from './Main/Main';
import AddBil from './AddBil/AddBil.js';

import api from '../utils/Api.js';
import {mestoAuth} from '../utils/Auth';


function App(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const [selectedCard, setselectedCard] = useState(null);
  const [cards, setCards] = useState([])
  const navigate = useNavigate();


  function addCard(card){
    if (!card) {
      return;
    }else{
    console.log(card)
    api.addCard(card.ot, card.kuda, card.koda, card.kodaku, card.cent).then((data)=>{
      api.getCards().then((datas) => {
        if(datas){
        setCards(datas.data)
    }
  }).catch((err) => {
        console.log(err)
    })
    })
    .catch((err) => {
        console.log(err)
    });
  }
  }

  function tokenCheck() {
    if(localStorage.getItem('jwt')){
      api.getCards().then((data) => {
        if(data){
        setCards(data.data)
        setloggedIn(true)
    }
  }).catch((err) => {
        console.log(err)
    })

  }}
 

 function login(log) {
  if (!log){
    return;
  }

  mestoAuth.authorize(log.PasswordInput,log.LoginInput).then((data) => {
    if (data.message === 'Неправильные почта или пароль'){
      console.log(data)
    }else{
      setloggedIn(true)
      localStorage.setItem('jwt', log.LoginInput);
    }
  })
  .catch(err => console.log(err));
}



function register(reg) {
  mestoAuth.register(reg.PasswordInput,reg.LoginInput).then((res) => {
    if(res){
        navigate('/')

    } 
}).catch(err =>{
  console.log(err)

});
}

React.useEffect(() =>{
  tokenCheck()
},[])

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={loggedIn ? <Main cards={cards} /> : <SignIn handleSubmit={login}/>} />
      <Route path="/signup" element={<SignUp handleSubmit={register}/>} />
      <Route path="/addbil" element={<AddBil handleSubmit={addCard}/>} />
      </Routes>
    </div>
  );
}

export default App;