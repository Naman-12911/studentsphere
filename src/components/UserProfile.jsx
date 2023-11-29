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
import commentsvg from '../assets/comment.svg'
import deletesvg from '../assets/delete.svg'
import editsvg from '../assets/edit.svg'




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
	const [career,setCareer]=useState();
	const [housing,setHousing]=useState();
	const [commentsCareer,setCommentsCareer]=useState();
	const [commentsHouse,setCommentsHouse]=useState();
	const [openCareer,setOpenCareer]=useState(null);
	const [openHouse,setOpenHouse]=useState(null);
	const [openPostCareer,setOpenPostCareer]=useState(false);
	const [openPostHouse,setOpenPostHouse]=useState(false);
	const [postInputCareer,setPostInputCareer]=useState("");
	const [postInputHouse,setPostInputHouse]=useState("");
	const [openEditCarrer,setOpenEditCarrer]=useState(null);
	const [openEditHouse,setOpenEditHouse]=useState(null);
	const [newCarrerDescription,setNewCarrerDescription]=useState("");
	const [newHouseDescription,setNewHouseDescription]=useState("");
	const [loading,setLoading]=useState(false);
	const [subLoading,setSubLoading]=useState(false);

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
				setGrade(response.data.Grades)
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
		axios
			.get("https://studentsphere-b734aba5fe3c.herokuapp.com/carrer/carrer-user/",{
				headers:{
					"Authorization" : `Bearer ${user}`
				}
			})
			.then((response)=>{
				setCareer(response.data)
			})
			.catch((error)=>{
				console.log(error.response.data)
			})

		axios
			.get("https://studentsphere-b734aba5fe3c.herokuapp.com/house/house-user/",{
				headers:{
					"Authorization" : `Bearer ${user}`
				}
			})
			.then((response)=>{
				console.log(response.data);
				setHousing(response.data)
			})
			.catch((error)=>{
				console.log(error.response.data)
			})
	},[user])

	const handleLogout=()=>{
		setLoading(true)
		dispatch(userLogout());
		navigate('/')
	}

	const toggleCareer=i=>{
		if(openCareer==i){
			return setOpenCareer(null)
		}
		setOpenCareer(i)
	}
	const toggleHouse=i=>{
		if(openHouse==i){
			return setOpenHouse(null)
		}
		setOpenHouse(i)
	}
	const toggleEditCareer=i=>{
		if(openEditCarrer==i){
			return setOpenEditCarrer(null)
		}
		setOpenEditCarrer(i)
	}
	const toggleEditHouse=i=>{
		if(openEditHouse==i){
			return setOpenEditHouse(null)
		}
		setOpenEditHouse(i)
	}

	const handleUpdateCareer=(id,Description)=>{
		const data={
			Description
		}
		setLoading(true)
		axios
			.patch(`https://studentsphere-b734aba5fe3c.herokuapp.com/carrer/carrer/${id}/`,data,{
				headers:{
					"Authorization":`Bearer ${user}`
				}
			})
			.then((response)=>{
				console.log(response.data)
				location.reload();
				setOpenEditCarrer(null)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setLoading(false)
			})
	}

	const handleUpdateHouse=(id,Description)=>{
		const data={
			Description
		}
		setLoading(true)
		axios
			.patch(`https://studentsphere-b734aba5fe3c.herokuapp.com/house/house/${id}/`,data,{
				headers:{
					"Authorization":`Bearer ${user}`
				}
			})
			.then((response)=>{
				console.log(response.data)
				location.reload();
				setOpenEditHouse(null)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setLoading(false)
			})
	}

	const handleCareerComment=(id)=>{
		console.log("This is from comment fetch"+id)
		setSubLoading(true)
		axios
			.get(`https://studentsphere-b734aba5fe3c.herokuapp.com/carrer/comment/?career_id=${id}`,{
				headers:{
					"Authorization":`Bearer ${user}`
				}
			})
			.then((response)=>{
				console.log(response.data)
				setCommentsCareer(response.data)
				setSubLoading(false)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setCommentsCareer();
				setSubLoading(false)
			})
	}

	const handleHouseComment=(id)=>{
		console.log("This is from comment fetch"+id)
		setSubLoading(true)
		axios
			.get(`https://studentsphere-b734aba5fe3c.herokuapp.com/house/house-comment/?houses_id=${id}`,{
				headers:{
					"Authorization":`Bearer ${user}`
				}
			})
			.then((response)=>{
				console.log(response.data)
				setCommentsHouse(response.data)
				setSubLoading(false)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setCommentsHouse();
				setSubLoading(false)
			})
	}

	const handleNewCareer=()=>{
		setLoading(true)
		const data={
			Description:postInputCareer
		}
		axios
			.post("https://studentsphere-b734aba5fe3c.herokuapp.com/carrer/carrer/",data,{
				headers:{
					"Authorization":`Bearer ${user}`
				}
			})
			.then((response)=>{
				setPostInputCareer("")
				console.log(response.data)
				alert("Career Posted Successfully")
				location.reload();
			})
			.catch((error)=>{
				console.log(error.response.data)
				location.reload();
			})
	}
	const handleNewHouse=()=>{
		setLoading(true)
		const data={
			Description:postInputHouse
		}
		axios
			.post("https://studentsphere-b734aba5fe3c.herokuapp.com/house/house/",data,{
				headers:{
					"Authorization":`Bearer ${user}`
				}
			})
			.then((response)=>{
				setPostInputHouse("")
				console.log(response.data)
				alert("House Posted Successfully")
				location.reload();
			})
			.catch((error)=>{
				console.log(error.response.data)
				setLoading(false)
			})
	}

	const handleHouseDelete=(id)=>{
		setLoading(true)
		axios
			.delete(`https://studentsphere-b734aba5fe3c.herokuapp.com/house/house/${id}/`,{
				headers:{
					"Authorization":`Bearer ${user}`
				}
			})
			.then((response)=>{
				console.log(response.data)
				location.reload();
			})
			.catch((error)=>{
				console.log(error.response.data)
				setLoading(false)
			})
	}
  return (
	<div>
		<div className="userprofile container">
			{loading ? <Spinner color={"#000000"}/> : <div className="userprofile-main">
				<div className="userprofile-main-top" style={{backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover",background: "rgb(0,0,0)",backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.4520308123249299) 0%, rgba(255,255,255,0) 100%),url(https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"}}>
					<div className="userprofile-main-top-main">
						<div className="userprofile-main-top-main-left">
							<div className="userprofile-main-top-main-left-image">
								<img src={profile_picture} alt="" />
							</div>
							<div className="userprofile-main-top-main-left-info">
								<h1>{name}</h1>
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
							{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
						</div>
					</div>
				</div>
				<div className="userprofile-main-bottom">
					<div className="userprofile-main-bottom-left">
						<div className="userprofile-main-bottom-left-newpost">
							<button onClick={()=>setOpenPostCareer(!openPostCareer)}><img src={plus} alt="" />NEW CAREER POST</button>
							<button onClick={()=>navigate('/newhouse')}><img src={plus} alt="" />NEW HOUSE POST</button>
						</div>
						<div className="new-career" style={{display:openPostCareer?"flex":"none"}}>
							<h1>NEW CAREER POST:</h1>
							<input type="text" placeholder='Description' value={postInputCareer} onChange={(e)=>setPostInputCareer(e.target.value)}/>
							<button onClick={handleNewCareer}>SUBMIT</button>
						</div>
						<div className="new-career" style={{display:openPostHouse?"flex":"none"}}>
							<h1>NEW HOUSE POST:</h1>
							<input type="text" placeholder='Description' value={postInputHouse} onChange={(e)=>setPostInputHouse(e.target.value)}/>
							<button onClick={handleNewHouse}>SUBMIT</button>
						</div>
						<h1>CAREER</h1>
						<div className="career-main">
			{career && career.map((data,i)=>
			{
				return(
				<div key={data.id} className="career-main-main" style={{width:"100%"}}>
					<div  className="career-main-main-top">
						<div className="career-main-main-top-image">
							<img src={data.user.profile_picture} alt="" />
						</div>
						<p>{data.user.name}</p>
					</div>
					<div className="career-main-main-mid">
						{
						openEditCarrer==i
						?<>
						<input type="text" value={newCarrerDescription} onChange={(e)=>setNewCarrerDescription(e.target.value)} style={{width:"100%",outline:"none",border:"none",borderBottom:"1px solid grey",fontSize:"1.9rem"}}/>
						<button onClick={()=>handleUpdateCareer(data.id,newCarrerDescription)}>Update Post</button>
						</>
						:<p dangerouslySetInnerHTML={{__html:data.Description}}></p>
						}
					</div>
					<div className="career-main-main-bottom">
						<button onClick={()=>{toggleCareer(i);handleCareerComment(data.id)}}><img src={commentsvg} alt="" />Comments</button>
						<button onClick={()=>{toggleEditCareer(i),setNewCarrerDescription(data.Description)}}><img src={editsvg} alt="" />Edit</button>
					</div>
					<div className="career-main-main-comments" style={{height:openCareer==i?"20vh":"0vh"}}>
						<div className="career-main-main-comments-main">
							{subLoading?<Spinner color={"#000000"}/>:
									commentsCareer ? commentsCareer.map((data)=>{
										return(
											<div key={data.id} className="career-main-main-comments-main-comment">
												<h3>{data.user.name}</h3>
												<p>{data.comment}</p>
											</div>
										)
									}) : <p>No Comments Yet</p>
							}
							
						</div>
					</div>
				</div>
				)
			})}
						</div>
						<h1>HOUSE</h1>
						<div className="career-main">
			{housing && housing.map((data,i)=>{
				return(
				<div key={data.id} className="career-main-main" style={{width:"100%"}}>
					<div  className="career-main-main-top">
						<div className="career-main-main-top-image">
							<img src={data.user.profile_picture} alt="" />
						</div>
						<p>{data.user.name}</p>
					</div>
					<div className="career-main-main-mid">
					{
						openEditHouse==i
						?<>
						<input type="text" value={newHouseDescription} onChange={(e)=>setNewHouseDescription(e.target.value)} style={{width:"100%",outline:"none",border:"none",borderBottom:"1px solid grey",fontSize:"1.9rem"}}/>
						<button onClick={()=>handleUpdateHouse(data.id,newHouseDescription)}>Update Post</button>
						</>
						:<>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>NAME:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.contact_name}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>WHATSAPP NUMBER:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.whatsApp_number}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>EMAIL:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.email}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>ADDRESS:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.address}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>DESCRIPTION:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.Description}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>RENT:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.rent_cost}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>BEDROOM:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.bedroom}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>BATHROOM:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.bathroom}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>WALKING DISTANCE:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.distance_walk}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>MAX OCCUPANCY:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.maximum_occupancy}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>SPECIAL NOTES:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.special_notes}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>AVAILABLE DATE:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.available_date}}></p>
						</div>
						<div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'5px'}}>
							<p><b>PROPERTY URL:</b></p>
							<p dangerouslySetInnerHTML={{__html:data.property_url}}></p>
						</div>
						</>
						}
					</div>
					<div className="career-main-main-bottom">
						<button onClick={()=>{toggleHouse(i);handleHouseComment(data.id)}}><img src={commentsvg} alt="" />Comments</button>
						<button onClick={()=>navigate('/edithouse',{ state: data })}><img src={editsvg} alt="" />Edit</button>
						<button onClick={()=>handleHouseDelete(data.id)}><img src={deletesvg} alt="" />Delete</button>
					</div>
					<div className="career-main-main-comments" style={{height:openHouse==i?"20vh":"0vh"}}>
						<div className="career-main-main-comments-main">
							{subLoading?<Spinner color={"#000000"}/>:
									commentsHouse ? commentsHouse.map((data)=>{
										return(
											<div key={data.id} className="career-main-main-comments-main-comment">
												<h3>{data.user.name}</h3>
												<p>{data.comment}</p>
											</div>
										)
									}) : <p>No Comments Yet</p>
							}
							
						</div>
					</div>
				</div>
				)
			})}
						</div>
						{/* <div className="userprofile-main-bottom-left-main">
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
						</div> */}
					</div>
					<div className="userprofile-main-bottom-right">
						<div className="userprofile-main-bottom-right-info">
							<h1>{name}&#39;s DETAILS</h1>
							<span></span>
							<p><b>NAME : </b>{name}</p>
							<p><b>EMAIL : </b>{email}</p>
							<p><b>PHONE NO : </b>{phone_no}</p>
							<p><b>COLLEGE ID : </b>{college_id}</p>
							<p><b>GRADE : </b>{grade}</p>
							<p><b><a href={personal_website} target='_blank' rel="noreferrer">PERSONAL WEBSITE</a></b></p>
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