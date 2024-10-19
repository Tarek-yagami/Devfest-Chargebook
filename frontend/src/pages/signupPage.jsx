import {Link} from 'react-router-dom';
import '../styles/signupPage.css';
import logo from '../assets/logo.png';
import signup_illustration from '../assets/signup_illustration.png';
import vector from '../assets/vector-icon.png'

function SignupPage(){
return(
  <div className="login-container">
  <div className="left-part">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className='hello-container' >
        <h1>Control  Your Finances,<br/> Join Us Today !</h1>
      </div>
      <form className='form'>
        <p className='p1'>Fill the form below to create an account </p>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <Link to="/signup/signup2"><button type="submit" className='login-button'>Continue</button></Link>
        <p className='p2'>Already have an account? <Link to="/login"className='register-link'>Login</Link></p>
      </form>
      <div className='progress-bar'>
        <div className='rectangle1'></div>
        <div className='rectangle2'></div>
        <div className='rectangle3'></div>
      </div>
  </div>
  <div className="right-part">
    <img src={signup_illustration} alt='icon' className='illustration'/>
    <div className='text-container'>
        <h2>Easing Your Corporate Finance Journey!</h2>
          <p className='p3'>Manage your corporate finances, anywhere, anytime.<br/>Say goodbye to financial uncertainty and hello to sustainable growth. </p>
      </div>
  </div>
</div>
)
}
export default SignupPage;