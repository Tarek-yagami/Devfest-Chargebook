// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage'; // Adjust the path as necessary
import FinancialReportGenerator from './components/FinancialReportGenerator'; // Adjust the path as necessary
import ExpenseInsights from './components/ExpenseInsights'; // Adjust the path as necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reports" element={<FinancialReportGenerator />} />
        <Route path="/expenses" element={<ExpenseInsights />} />
      </Routes>
    </Router>
  );
};

export default App;
