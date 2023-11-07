import '../css/Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import ham from '../assets/hamburger.svg'
import cross from '../assets/cross.svg'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export default function Navbar() {
	const user=useSelector((state)=>state.user.user)

	const [mobileView,setMobileView]=useState(true);
  return (
	<div>
	<div className="navbar">
		<div className="navbar-main container">
			<img src={logo} alt="" />
			<ul style={{display:mobileView?"flex":"none"}}>
				{user?<><Link to={"/home"} style={{textDecoration:"none",color:"black"}}><li>Home</li></Link>
				{/* <Link to={"/feed"} style={{textDecoration:"none",color:"black"}}><li>Feed</li></Link> */}
				<Link to={"/news"} style={{textDecoration:"none",color:"black"}}><li>News</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Events</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Career</li></Link>
				</>:""}
				{user 
				? <Link to={"/profile"} style={{textDecoration:"none",color:"black"}}><li>Profile</li></Link> 
				: <Link to={"/login"} style={{textDecoration:"none",color:"black"}}><li>Login/Register</li></Link>}
			</ul>
			<img onClick={()=>setMobileView(!mobileView)} className='mobile-view' src={!mobileView?ham:cross} alt="" />
		</div>
	</div>
	</div>
  )
}
