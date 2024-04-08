import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Main from './Main/Main';
import MyBil from './MyBil/MyBil';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main" element={<Main />} />
      <Route path="/mybil" element={<MyBil />} />
      </Routes>
    </div>
  );
}

export default App;