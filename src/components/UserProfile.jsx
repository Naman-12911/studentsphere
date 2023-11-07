import '../css/UserProfile.css'
import plus from '../assets/plus.svg'
import update from '../assets/update.svg'
import logout from '../assets/logout.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { userLogout } from '../app/User'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import axios from 'axios'

export default function UserProfile() {
	const dispatch=useDispatch()
	const navigate=useNavigate()
	const user=useSelector((state)=>state.user.user)

	const [name,setName]=useState('');
	const [email,setEmail]=useState('');
	const [phone_no,setPhone]=useState('');
	const [grade,setGrade]=useState('');
	const [college_id,setCollegeId]=useState('');
	const [facebook_profile,setFacebbok]=useState('');
	const [linkedin_profile,setLinkedIn]=useState('');
	const [personal_website,setPersonalWebsite]=useState('');
	const [profile_picture,setProfilePicture]=useState('');
	const [loading,setLoading]=useState(false);

	useEffect(()=>{
		setLoading(true)
		axios
			.get("https://studentsphere-b734aba5fe3c.herokuapp.com/account/profile/",{
				headers:{
					"Authorization" : `Bearer ${user}`
				}
			})
			.then((response)=>{
				console.log(response.data)

				setName(response.data.name)
				setEmail(response.data.email)
				setPhone(response.data.phone_no)
				setGrade(response.data.grade)
				setCollegeId(response.data.college_id)
				setFacebbok(response.data.facebook_profile)
				setLinkedIn(response.data.linkedin_profile)
				setPersonalWebsite(response.data.personal_website)
				setProfilePicture(response.data.profile_picture)

				setLoading(false)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setLoading(false)
			})
	},[user])

	const handleLogout=()=>{
		setLoading(true)
		dispatch(userLogout());
		navigate('/')
	}
  return (
	<div>
		<div className="userprofile container">
			{loading ? <Spinner/> : <div className="userprofile-main">
				<div className="userprofile-main-top" style={{backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover",background: "rgb(0,0,0)",backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.4520308123249299) 0%, rgba(255,255,255,0) 100%),url(https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"}}>
					<div className="userprofile-main-top-main">
						<div className="userprofile-main-top-main-left">
							<div className="userprofile-main-top-main-left-image">
								<img src={profile_picture} alt="" />
							</div>
							<div className="userprofile-main-top-main-left-info">
								<h1>Jack Tyson</h1>
								<div className="userprofile-main-top-main-left-info-socials">
									<div className="socials">
										<a href={facebook_profile} target='_blank' rel="noreferrer"><img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" /></a>
									</div>
									<div className="socials">
										<a href={linkedin_profile} target='_blank' rel="noreferrer"><img src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" alt="" /></a>
									</div>
								</div>
							</div>
						</div>
						<div className="userprofile-main-top-main-right">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
					</div>
				</div>
				<div className="userprofile-main-bottom">
					<div className="userprofile-main-bottom-left">
						<div className="userprofile-main-bottom-left-newpost">
							<button><img src={plus} alt="" />NEW POST</button>
							{/* <button><img src={update} alt="" />UPDATE PROFILE</button> */}
						</div>
						<div className="userprofile-main-bottom-left-main">
							<div className="userprofile-main-bottom-left-main-info">
								<div className="userprofile-main-bottom-left-main-info-left">
									<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
								</div>
								<div className="userprofile-main-bottom-left-main-info-right">
									<h4>Jack Tyson</h4>
									<p>2 Minutes Ago</p>
								</div>
							</div>
							<div className="userprofile-main-bottom-left-main-caption">
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut enim eum blanditiis fugit, asperiores vel est consequuntur placeat iste nesciunt reiciendis ipsa adipisci cupiditate laudantium itaque minima? Quod, consequuntur doloribus?</p>
							</div>
							<div className="userprofile-main-bottom-left-main-media">
								<img src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
							</div>
						</div>
					</div>
					<div className="userprofile-main-bottom-right">
						<div className="userprofile-main-bottom-right-info">
							<h1>USER&#39;s DETAILS</h1>
							<span></span>
							<p><b>NAME : </b>{name}</p>
							<p><b>EMAIL : </b>{email}</p>
							<p><b>PHONE NO : </b>{phone_no}</p>
							<p><b>COLLEGE ID : </b>{college_id}</p>
							<p><b>GRADE : </b>{grade}</p>
							<p><b>PERSONAL WEBISTE : </b>{personal_website}</p>
						</div>
						<div className="userprofile-main-bottom-right-button">
							<button onClick={()=>navigate('/updateprofile')}><img src={update} alt="" />UPDATE PROFILE</button>
							<button onClick={handleLogout}><img src={logout} alt="" />LOGOUT</button>
						</div>
						
					</div>
				</div>
			</div>}
			
		</div>
	</div>
  )
}
