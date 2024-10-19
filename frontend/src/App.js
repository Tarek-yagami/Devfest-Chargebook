import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import LandingPage from './pages/landingPage';
import SignupPage2 from './pages/signuppage2';
import SignupPage3 from './pages/signuppage3';

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage'; 
import FinancialReportGenerator from './components/FinancialReportGenerator';
import ExpenseInsights from './components/ExpenseInsights'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/signup/signup2" element={<SignupPage2 />} /> 
        <Route path="/signup/signup2/signup3" element={<SignupPage3 />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/reports" element={<FinancialReportGenerator />} />
        <Route path="/expenses" element={<ExpenseInsights />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
