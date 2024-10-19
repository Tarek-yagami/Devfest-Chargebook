import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Single import of Route
import MainPage from './components/MainPage'; 
import FinancialReportGenerator from './components/FinancialReportGenerator'; 
import ExpenseInsights from './components/ExpenseInsights';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import LandingPage from './pages/landingPage';
import SignupPage2 from './pages/signuppage2';
import SignupPage3 from './pages/signuppage3';

const App = () => {
  return (
    <Router> {/* Ensure you're using Router here */}
      <Routes>
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/signup/signup2" element={<SignupPage2 />} /> 
        <Route path="/signup/signup2/signup3" element={<SignupPage3 />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} /> {/* Adjusted to avoid conflict */}
        <Route path="/reports" element={<FinancialReportGenerator />} />
        <Route path="/expenses" element={<ExpenseInsights />} />
      </Routes>
    </Router>
  );
};

export default App;
