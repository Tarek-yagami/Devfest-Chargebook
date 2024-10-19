import {Link} from "react-router-dom"
import '../styles/signupPage.css'
import '../styles/signuppage3.css'
import logo from '../assets/logo.png';

import sucess from '../assets/sucess.png';
import vector from '../assets/vector-icon.png'

function SignupPage3(){
return(
  <div className="login-container">
  <div className="left-part">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className='hello-container' >
        <h1>Your Account Has Been<br/> Sucessfully Created</h1>
      </div>
      <form className='form'>
        <p className='p1'>Head back to login page to access your account </p>
        <Link to="/login"><button type="submit" className='login-button'>Finish</button></Link>
      </form>
      <div className='progress-bar'>
        <div className='rectangle3'></div>
        <div className='rectangle2'></div>
        <div className='rectangle1'></div>
      </div>
  </div>
  <div className="right-part">
    <img src={sucess} alt='icon' className='illustration'/>
    <div className='text-container'>
        <h2>Easing Your Corporate Finance Journey!</h2>
          <p className='p3'>Manage your corporate finances, anywhere, anytime.<br/>Say goodbye to financial uncertainty and hello to sustainable growth. </p>
      </div>

  </div>
</div>
)
}
export default SignupPage3;