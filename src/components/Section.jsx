import { Link } from 'react-router-dom'
import '../css/Section.css'

export default function Section() {
  return (
	<div className="section conatiner">
		<div className="section-main">
			<h1>Sections</h1>
			<ul>
				<Link to={"/feed"} style={{textDecoration:"none",color:"black"}}><li>Feed</li></Link>
				<Link to={"/news"} style={{textDecoration:"none",color:"black"}}><li>News</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Events</li></Link>
				{/* <Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Career</li></Link> */}
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Financial Assistance</li></Link>
				{/* <Link to={"/career"} style={{textDecoration:"none",color:"black"}}><li>Housing</li></Link> */}
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Therapy</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Care</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Library</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Dining</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Transportation</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Security</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Access</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Pastimes</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>International Support</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Child Care</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Legal Support</li></Link>
				<Link to={"/event"} style={{textDecoration:"none",color:"black"}}><li>Shelter and Sustenance</li></Link>
			</ul>
		</div>
		<img src="https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
	</div>
  )
}
