import axios from 'axios';
import {  useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

export default function EditHouse() {
	const {state} = useLocation();
	// console.log(state);
	const user=useSelector((state)=>state.user.user)
	const navigate=useNavigate();

	const [id,setId]=useState(state.id)
	const [bedroom,setbedroom]=useState(state.bedroom);
	const [bathroom,setBathroom]=useState(state.bathroom);
	const [distance_walk,setDistanceWalk]=useState(state.distance_walk);
	const [maximum_occupancy,setMaxOccupy]=useState(state.maximum_occupancy);
	const [special_notes,setNotes]=useState(state.special_notes);
	const [available_date,setDate]=useState(state.available_date);
	const [contact_name,setName]=useState(state.contact_name);
	const [whatsApp_number,setWNumber]=useState(state.whatsApp_number);
	const [description,setDescription]=useState(state.description);
	const [address,setAddress]=useState(state.address);
	const [property_url,setURL]=useState(state.property_url);
	const [rent_cost,setRent]=useState(state.rent_cost);
	const [email,setEmail]=useState(state.email);
	const [loading,setLoading]=useState(false);
	const [error,setError]=useState(false);

	// useEffect(()=>{
	// 	setLoading(true)
	// 	axios
	// 		.get("https://studentsphere-b734aba5fe3c.herokuapp.com/account/profile/",{
	// 			headers:{
	// 				"Authorization" : `Bearer ${user}`
	// 			}
	// 		})
	// 		.then((response)=>{
	// 			console.log(response.data)

	// 			setName(response.data.name)
	// 			setPhone(response.data.phone_no)
	// 			setGrade(response.data.Grades)
	// 			setCollegeId(response.data.college_id)
	// 			setFacebook(response.data.facebook_profile)
	// 			setLinkedIn(response.data.linkedin_profile)
	// 			setPersonalWebsite(response.data.personal_website)
	// 			setProfilePicture(response.data.profile_picture)
	// 			setLoading(false)
	// 		})
	// 		.catch((error)=>{
	// 			console.log(error.response.data)
	// 			setLoading(false)
	// 		})
	// },[])

	const handleUpdate=(e)=>{
		e.preventDefault();
		setLoading(true)
		const data={
			bedroom,
			bathroom,
			distance_walk,
			maximum_occupancy,
			special_notes,
			available_date,
			contact_name,
			whatsApp_number,
			email
		}
		axios
			.patch(`https://studentsphere-b734aba5fe3c.herokuapp.com/house/house/${id}/`,data,{
				headers:{
					"Authorization" : `Bearer ${user}`
				}
			})
			.then((response)=>{
				console.log(response.data)
				alert("House Updated Succesfully!")
				// setName("");
				// setPhone("");
				// setGrade("");
				// setCollegeId("");
				// setFacebook("");
				// setLinkedIn("");
				// setPersonalWebsite("");
				// setProfilePicture("");
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
			<h1>POST NEW HOUSE</h1>
			<form onSubmit={handleUpdate}>
				<div className="updateprofile-main-form">
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Bedroom</label>
						<input type="text" onChange={(e)=>setbedroom(e.target.value)} value={bedroom}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Bathroom</label>
						<input type="number" onChange={(e)=>setBathroom(e.target.value.slice(0,10))} value={bathroom}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Walking Distance</label>
						<input type="text" onChange={(e)=>setDistanceWalk(e.target.value)} value={distance_walk}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Maximum Occupancy</label>
						<input type="text" onChange={(e)=>setMaxOccupy(e.target.value)} value={maximum_occupancy}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Special Note</label>
						<input type="text" onChange={(e)=>setNotes(e.target.value)} value={special_notes}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Available Date</label>
						<input type="date" onChange={(e)=>setDate(e.target.value)} value={available_date}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Contact Name</label>
						<input type="text" onChange={(e)=>setName(e.target.value)} value={contact_name}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Whatsapp Number</label>
						<input type="number" onChange={(e)=>setWNumber(e.target.value.slice(0,10))} value={whatsApp_number}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Email</label>
						<input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Description</label>
						<input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Address</label>
						<input type="text" onChange={(e)=>setAddress(e.target.value)} value={address}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Rent</label>
						<input type="text" onChange={(e)=>setRent(e.target.value)} value={rent_cost}/>
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Property URL</label>
						<input type="text" onChange={(e)=>setURL(e.target.value)} value={property_url}/>
					</div>
				</div>
				<button type='submit'>COMFIRM UPDATE</button>
				{error ?<p style={{color:"red",fontFamily:"var(--main-font-text)",fontSize:"1.5rem"}}>There was a problem. Try Again</p>:""}
				
			</form>
		</div>}
		
	</div>
  )
}
