import {Link} from "react-router-dom"
import '../styles/signupPage.css'
import logo from '../assets/logo.png';

import illustration from '../assets/deco.png';
import vector from '../assets/vector-icon.png'

function SignupPage2(){
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
        <p className='p1'>Please provide your phone and contact info </p>
        <input type="number" placeholder="Phone number" />
        <input type="text" placeholder="Country" />
        <input type="number" placeholder="Postale adress" />
        <Link to="/signup/signup2/signup3"><button type="submit" className='login-button'>Continue</button></Link>
      </form>
      <div className='progress-bar'>
        <div className='rectangle2'></div>
        <div className='rectangle1'></div>
        <div className='rectangle3'></div>
      </div>
  </div>
  <div className="right-part">
    <img src={illustration} alt='icon' className='illustration'/>
    <div className='text-container'>
        <h2>Easing Your Corporate Finance Journey!</h2>
          <p className='p3'>Manage your corporate finances, anywhere, anytime.<br/>Say goodbye to financial uncertainty and hello to sustainable growth. </p>
      </div>

  </div>
</div>
)
}
export default SignupPage2;