import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';

import { firestore } from './firebase.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log(firestore);
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
