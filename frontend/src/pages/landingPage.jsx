import {Link} from 'react-router-dom';


import '../styles/landingPage.css'
import LandingPage_illustration from '../assets/landingPage_illustration.png';
import LandingPage_illustration2 from '../assets/landingPage_illustration2.png';
import Service from '../components/service';
import Logo from '../assets/logo.png'


function LandingPage() {
  return (
    <div className="page-container">
      <div className="header">
        <img src={Logo} alt="logo"></img>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
        <Link to="/login"><button className="login-button">Login</button></Link>
      </div>

      {/* Section Home */}
      <div id="home" className="introduction">
        <div className="container">
          <div className="rectangle"></div>
          <div className="text-container">
            <h1>Take control of your <br />corporate finances</h1>
            <div className="description">
              <p>
                Manage your financial health with real-time insights, automated reporting, 
                and predictive recommendations for smarter decision-making.<br />
                Say goodbye to financial uncertainty and hello to sustainable growth.
              </p>
            </div>
            <Link to="signup"><button className="login-button">Get started</button></Link>
          </div>
        </div>
        <img src={LandingPage_illustration} className="LP_illustration"></img>
      </div>

      {/* Section About */}
      <div id="about" className="aboutUS-container">
        <img src={LandingPage_illustration2} className="LP_illustration"></img>
        <div className="rectangle"></div>
        <div className="text-container">
          <h1>Our mission</h1>
          <div className="mission-description">
            <p>
              We aim to empower businesses by providing innovative tools for financial 
              monitoring and management. Our goal is to help companies achieve operational 
              efficiency and sustainable growth.
            </p>
          </div>
          <div className="WDUS">
            <h1>What drives us</h1>
            <div className="description">
              <p><span className="title">Financial Empowerment:</span> We believe that every organization, regardless of size, should have access to real-time insights and predictive tools that drive smarter financial decisions.</p>
              <p><span className="title">Operational Excellence:</span> We strive to eliminate inefficiencies in financial management by automating tracking and reporting, enabling teams to focus on what matters most.</p>
              <p><span className="title">Innovation through AI:</span> We are passionate about harnessing AI-powered insights to predict future trends, optimize spending, and deliver recommendations that secure long-term financial health.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Services */}
      <div id="services" className="services">
        <h1>Our services</h1>
        <p className="description">
          Our services are designed to meet your specific needs and empower you to make 
          informed financial decisions. Here's how we can assist you:
        </p>
        <div className="services-container">
          <div className="service-container">
            <Service
              titre="Comprehensive Financial Dashboard"
              description="Monitor metrics like cash flow, profits, and expenses in real-time. Customize views to track KPIs critical to your business."
            />
            <Service
              titre="Automated Financial Reporting"
              description="Generate balance sheets, income statements, and cash flow reports with just a few clicks. Export reports in PDF, Excel, or CSV formats."
            />
          </div>
          <div className="service-container">
            <Service
              titre="Expense Tracking System"
              description="Get a clear picture of your spending patterns and stay on top of expenses with automated logging and categorization."
            />
            <Service
              titre="Predictive Insights and Recommendations"
              description="Anticipate future expenses and optimize your budget with AI-powered forecasts and tailored financial advice."
            />
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}
export default LandingPage;
