import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
function App() {
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
