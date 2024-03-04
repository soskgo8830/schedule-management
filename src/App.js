import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SignUpPage from './pages/SignUpPage';
import CalendarPage from './pages/CalenderPage';
import DashboardsPage from './pages/DashboardsPage';
import MemoPage from './pages/MemoPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />

        <Route element={<MainLayout />}>
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/dashboards' element={<DashboardsPage />} />
          <Route path='/memo/:id' element={<MemoPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
