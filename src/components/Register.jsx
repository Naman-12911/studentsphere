import '../css/Register.css'
import register from '../assets/register.svg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'

export default function Register() {
	const navigate=useNavigate();
  return (
	<div>
		<div className="register container">
			<motion.div initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{ type:"spring",duration: 0.7 }} className="register-main">
				<div className="register-main-left">
						<img src={logo} alt="" />
						<h1>REGISTER</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						<form action="">
							<input type="text" placeholder='Enter your Name'/>
							<input type="email" placeholder='Enter your Email'/>
							<input type="password" placeholder='Enter new Password'/>
							<button>SIGN UP</button>
						</form>
						<p>Already Have an Account?<span onClick={()=>navigate("/login")} style={{backgroundColor:"white",cursor:"pointer",color:"#0096FF"}}>Sign In</span></p>
					</div>
					<span className='between-bar'></span>
				<div className="register-main-right">
					<img src={register} alt="" />
				</div>
			</motion.div>
		</div>
	</div>
  )
}
