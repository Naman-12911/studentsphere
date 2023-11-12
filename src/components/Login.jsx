import '../css/Login.css'
import login from '../assets/login.svg'
import profile from '../assets/profile.svg'
import lock from '../assets/lock.svg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import { useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import { useDispatch } from 'react-redux'
import { userLogin } from '../app/User'

export default function Login() {
	const dispatch=useDispatch();
	const navigate=useNavigate()

	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const [loading,setLoading]=useState(false);
	const [error,setError]=useState(false);

	const handleLogin= (e)=>{
		e.preventDefault()
		setLoading(true)
		const userData={
			email,
			password,
		}
		axios
			.post("https://studentsphere-b734aba5fe3c.herokuapp.com/account/login/",userData)
			.then((response)=>{
				// console.log(response.data)
				localStorage.setItem('access_token',response.data.tokens.access)
				dispatch(userLogin());
				setEmail('')
				setPassword('')
				navigate('/')
				setLoading(false)
				setError(false)
			})
			.catch((error)=>{
				console.log(error.response.data);
				setLoading(false)
				setError(true)
			})
	}
  return (
	<div>
		<div className="login container">
			{loading ? <Spinner/> : <motion.div initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{ type:"spring",duration: 0.7 }} className="login-main">
				<div className="login-main-left">
						<img src={logo} alt="" />
						<h1>LOGIN</h1>
						<p>Welcome back! We're glad to see you again. </p>
						<form onSubmit={handleLogin}>
								<div className="login-main-left-form">
									<img src={profile} alt="" />
									<input type="email" placeholder='Enter your Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
								</div>
								<div className="login-main-left-form">
									<img src={lock} alt="" />
									<input type="password" placeholder='Enter your Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
								</div>
							<button type='submit'>SIGN IN</button>
						</form>
						{error ? <p style={{color:"red"}}>Invalid Credentials / Try Again Later</p>:""}
						{/* <p onClick={()=>navigate("/login")} style={{backgroundColor:"white",cursor:"pointer",color:"#0096FF"}}>Forgot Password?</p> */}
						<p>Don&#39;t Have an Account?<span onClick={()=>navigate("/register")} style={{backgroundColor:"white",cursor:"pointer",color:"#0096FF"}}>Sign Up</span></p>
					</div>
					<span className='between-bar'></span>
				<div className="login-main-right">
					<img src={login} alt="" />
				</div>
			</motion.div>}
			
		</div>
	</div>
  )
}
