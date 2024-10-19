import {Link} from "react-router-dom"
import '../styles/loginPage.css';
import logo from '../assets/logo.png';
import hello from '../assets/hello-icon.png';
import login_illustration from '../assets/login_illustration.png';
import vector from '../assets/vector-icon.png'

function LoginPage(){
return(
  
  <div className="login-container">
    <div className="login-left-part">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='login-hello-container'>
          <h1>Good To <br/>See You Again!</h1>
          <img src={hello} alt='hello' className='hello-icon'/>
        </div>
        <form className='form'>
          <p className='p1'>Sign in to your account to continue </p>
          <input type="text" placeholder="Username"  className='login-input'/>
          <input type="password" placeholder="Password" className='login-input' />
          <Link to="../passwordreset"><a href="forgot_password" className='forgot-password-link'>forgot password ?</a></Link>
          <Link to="/main"><button type="submit" className='login-button'>Login</button></Link>
          <p className='p2'>
           Don’t have an account?  
           <Link to="/signup" className='register-link'>Register</Link>
          </p>
        </form>
    </div>
    <div className="right-part">
        <img src={login_illustration} alt='icon' className='illustration'/>
        <div className='text-container'>
        <h2>Easing Your Corporate Finance Journey!</h2>
          <p className='p3'>Manage your corporate finances, anywhere, anytime.<br/>Say goodbye to financial uncertainty and hello to sustainable growth. </p>
      </div>

    </div>
  </div>
)
}
export default LoginPage;
