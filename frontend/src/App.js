import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import LandingPage from './pages/landingPage';
import SignupPage2 from './pages/signuppage2';
import SignupPage3 from './pages/signuppage3';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/signup/signup2" element={<SignupPage2 />} /> 
        <Route path="/signup/signup2/signup3" element={<SignupPage3 />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
