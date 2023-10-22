import '../css/Login.css'
import login from '../assets/login.svg'
import profile from '../assets/profile.svg'
import lock from '../assets/lock.svg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

export default function Login() {
	const navigate=useNavigate()
  return (
	<div>
		<div className="login container">
			<motion.div initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{ type:"spring",duration: 0.7 }} className="login-main">
				<div className="login-main-left">
						<img src={logo} alt="" />
						<h1>LOGIN</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						<form action="">
								<div className="login-main-left-form">
									<img src={profile} alt="" />
									<input type="text" placeholder='Enter your Name'/>
								</div>
								<div className="login-main-left-form">
									<img src={lock} alt="" />
									<input type="password" placeholder='Enter your Password'/>
								</div>
							<button>SIGN IN</button>
						</form>
						<p onClick={()=>navigate("/login")} style={{backgroundColor:"white",cursor:"pointer",color:"#0096FF"}}>Forgot Password?</p>
						<p>Don&#39;t Have an Account?<span onClick={()=>navigate("/register")} style={{backgroundColor:"white",cursor:"pointer",color:"#0096FF"}}>Sign Up</span></p>
					</div>
					<span className='between-bar'></span>
				<div className="login-main-right">
					<img src={login} alt="" />
				</div>
			</motion.div>
		</div>
	</div>
  )
}
