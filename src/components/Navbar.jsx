import '../css/Navbar.css'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import ham from '../assets/hamburger.svg'
import cross from '../assets/cross.svg'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export default function Navbar() {
	const user=useSelector((state)=>state.user.user)
	const navigate=useNavigate();

	const [mobileView,setMobileView]=useState(true);
  return (
	<div>
	<div className="navbar">
		<div className="navbar-main container">
			<img src={logo} alt="" onClick={()=>navigate('')}/>
			<ul style={{display:mobileView?"flex":"none"}}>
				{user?<><Link to={"/home"} style={{textDecoration:"none",color:"black"}}><li>Home</li></Link>
				<Link to={"/section"} style={{textDecoration:"none",color:"black"}}><li>Sections</li></Link>
				{/* <Link to={"/section"} style={{textDecoration:"none",color:"black"}}><li>Discussion</li></Link> */}
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Career</li></Link>
				<Link to={"/house"} style={{textDecoration:"none",color:"black"}}><li>House</li></Link>
				{/* <Link to={"/feed"} style={{textDecoration:"none",color:"black"}}><li>Feed</li></Link> */}
				{/* <Link to={"/news"} style={{textDecoration:"none",color:"black"}}><li>News</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Events</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Career</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Financial Assistance</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Housing</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Therapy</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Care</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Library</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Dining</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Transportation</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Security</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Access</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Pastimes</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>International Support</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Child Care</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Legal Support</li></Link>
				<Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Shelter and Sustenance</li></Link> */}
				
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
