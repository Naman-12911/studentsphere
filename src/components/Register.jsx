import '../css/Register.css'
import register from '../assets/register.svg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'
import { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

export default function Register() {
	const navigate=useNavigate();
	const [name,setName]=useState('');
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const [phone_no,setPhone]=useState('');
	const [loading,setLoading]=useState(false);
	const [error,setError]=useState(false);
	const handleRegister= (e)=>{
		e.preventDefault()
		setLoading(true)
		const userData={
			name,
			email,
			password,
			phone_no
		}
		axios
			.post("https://studentsphere-b734aba5fe3c.herokuapp.com/account/register/",userData)
			.then((response)=>{
				console.log(response.data)
				setName('')
				setEmail('')
				setPassword('')
				setPhone('')
				alert("Registration Successful. Check your Email to Verify your Account")
				navigate('/login')
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
		<div className="register container">
			{loading ? <Spinner/> :
			<motion.div initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{ type:"spring",duration: 0.7 }} className="register-main">
			<div className="register-main-left">
					<img src={logo} alt="" />
					<h1>REGISTER</h1>
					<p>Join our community! Create your account to unlock a world of opportunities.</p>
					<form onSubmit={handleRegister}>
						<input type="text" placeholder='Enter your Name' required onChange={(e)=>setName(e.target.value)} value={name}/>
						<input type="email" placeholder='Enter your Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
						<input type="number" placeholder='Enter your Phone Number' required onChange={(e)=>setPhone(e.target.value.slice(0,10))} value={phone_no}/>
						<input type="password" placeholder='Enter new Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
						<button type='submit'>SIGN UP</button>
					</form>
					{error
							?<p style={{color:"red"}}>Check if all the fields are filled / Try again later.</p>
							:""
					}
					<p>Already Have an Account?<span onClick={()=>navigate("/login")} style={{backgroundColor:"white",cursor:"pointer",color:"#0096FF"}}>Sign In</span></p>
				</div>
				<span className='between-bar'></span>
			<div className="register-main-right">
				<img src={register} alt="" />
			</div>
		</motion.div>
			}
			
		</div>
	</div>
  )
}
