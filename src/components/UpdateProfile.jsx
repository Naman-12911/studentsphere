import { useEffect, useState } from 'react';
import '../css/UpdateProfile.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

export default function UpdateProfile() {
	const user=useSelector((state)=>state.user.user)
	const navigate=useNavigate();

	const [name,setName]=useState('');
	const [phone_no,setPhone]=useState('');
	const [Grades,setGrade]=useState('');
	const [college_id,setCollegeId]=useState('');
	const [facebook_profile,setFacebook]=useState('');
	const [linkedin_profile,setLinkedIn]=useState('');
	const [personal_website,setPersonalWebsite]=useState('');
	const [profile_picture,setProfilePicture]=useState('');
	const [loading,setLoading]=useState(false);
	const [error,setError]=useState(false);

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
				setPhone(response.data.phone_no)
				setGrade(response.data.Grades)
				setCollegeId(response.data.college_id)
				setFacebook(response.data.facebook_profile)
				setLinkedIn(response.data.linkedin_profile)
				setPersonalWebsite(response.data.personal_website)
				setProfilePicture(response.data.profile_picture)
				setLoading(false)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setLoading(false)
			})
	},[])

	const handleUpdate=(e)=>{
		e.preventDefault();
		setLoading(true)
		const data={
			name,
			phone_no,
			Grades,
			college_id,
			facebook_profile,
			linkedin_profile,
			personal_website,
			profile_picture
		}
		axios
			.patch("https://studentsphere-b734aba5fe3c.herokuapp.com/account/update-profile/",data,{
				headers:{
					"Authorization" : `Bearer ${user}`
				}
			})
			.then((response)=>{
				console.log(response.data)
				alert("Profile Updated Succesfully!")
				setName("");
				setPhone("");
				setGrade("");
				setCollegeId("");
				setFacebook("");
				setLinkedIn("");
				setPersonalWebsite("");
				setProfilePicture("");
				navigate("/profile")
			})
			.catch((error)=>{
				console.log(error.response.data)
				setLoading(false)
				setError(true)
			})
		console.log("working")
	}
  return (
	<div className="updateprofile container">
		{loading?<Spinner/>:<div className="updateprofile-main">
			<h1>UPDATE PROFILE</h1>
			<form onSubmit={handleUpdate}>
				<div className="updateprofile-main-form">
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Phone Number</label>
						<input type="number" onChange={(e)=>setPhone(e.target.value.slice(0,10))} value={phone_no}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Grade</label>
						<input type="text" onChange={(e)=>setGrade(e.target.value)} value={Grades}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">College ID</label>
						<input type="text" onChange={(e)=>setCollegeId(e.target.value)} value={college_id}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Facebook Profile Link</label>
						<input type="text" onChange={(e)=>setFacebook(e.target.value)} value={facebook_profile}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">LinkedIn Profile Link</label>
						<input type="text" onChange={(e)=>setLinkedIn(e.target.value)} value={linkedin_profile}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Personal Website Link</label>
						<input type="text" onChange={(e)=>setPersonalWebsite(e.target.value)} value={personal_website}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Profile Picture Link</label>
						<input type="text" onChange={(e)=>setProfilePicture(e.target.value)} value={profile_picture}/>
					</div>
				</div>
				<button type='submit'>COMFIRM UPDATE</button>
				{error ?<p style={{color:"red",fontFamily:"var(--main-font-text)",fontSize:"1.5rem"}}>There was a problem. Try Again</p>:""}
				
			</form>
		</div>}
		
	</div>
  )
}
