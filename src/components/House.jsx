import '../css/Career.css'
import send from '../assets/send.svg'
import { useEffect, useState } from 'react'
import commentsvg from '../assets/comment.svg'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

export default function House() {
	const accessToken=useSelector((state)=>state.user.user)
	const [open,setOpen]=useState(null);
	const [career,setCareer]=useState();
	const [comments,setComments]=useState();
	const [comment,setNewComment]=useState("");
	const [mainLoading,setMainLoading]=useState(false);
	const [subLoading,setSubLoading]=useState(false);
	useEffect(()=>{
		setMainLoading(true)
		axios
			.get("https://studentsphere-b734aba5fe3c.herokuapp.com/house/house/",{
				headers:{
					"Authorization":`Bearer ${accessToken}`
				}
			})
			.then((response)=>{
				console.log(response.data)
				setCareer(response.data)
				setMainLoading(false)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setMainLoading(false)
			})
	},[])


	const toggle=i=>{
		if(open==i){
			return setOpen(null)
		}
		setOpen(i)
	}

	const handleComment=(id)=>{
		console.log("This is from comment fetch"+id)
		setSubLoading(true)
		axios
			.get(`https://studentsphere-b734aba5fe3c.herokuapp.com/house/house-comment/?houses_id=${id}`,{
				headers:{
					"Authorization":`Bearer ${accessToken}`
				}
			})
			.then((response)=>{
				console.log(response.data)
				setComments(response.data)
				setSubLoading(false)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setComments();
				setSubLoading(false)
			})
	}

	const handleNewComment=(carrers_id)=>{
		console.log("This is from handle new comment"+career)
		const data={
			houses_id:carrers_id,
			comment
		}
		setSubLoading(true)
		axios
			.post("https://studentsphere-b734aba5fe3c.herokuapp.com/house/house-comment/",data,{
				headers:{
					"Authorization":`Bearer ${accessToken}`
				}
			})
			.then((response)=>{
				setNewComment("");
				console.log(response.data)
				handleComment(carrers_id)
				// setSubLoading(false)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setSubLoading(false)
			})
	}
  return (
	<div className="career conatiner">
		<h1>HOUSE</h1>
		{mainLoading?<Spinner color={"#FFFFFF"}/>:<>
		<div className="career-main">
			{career && career.map((data,i)=>{
				return(
				<div key={data.id} className="career-main-main">
					<div  className="career-main-main-top">
						<div className="career-main-main-top-image">
							<img src={data.user.profile_picture} alt="" />
						</div>
						<p>{data.user.name}</p>
					</div>
					<div className="career-main-main-mid">
						<p>{data.Description}</p>
					</div>
					<div className="career-main-main-bottom">
						<button onClick={()=>{toggle(i);handleComment(data.id)}}><img src={commentsvg} alt="" />Comments</button>
					</div>
					<div className="career-main-main-comments" style={{height:open==i?"20vh":"0vh"}}>
						<div className="career-main-main-comments-main">
							{subLoading?<Spinner color={"#000000"}/>:
									comments ? comments.map((data)=>{
										return(
											<div key={data.id} className="career-main-main-comments-main-comment">
												<h3>{data.user.name}</h3>
												<p>{data.comment}</p>
											</div>
										)
									}) : <p>Be the first one to Comment!</p>
							}
							
						</div>
					</div>
					<div className="career-main-main-newcomment" style={{height:open==i?"4vh":"0vh"}}>
							<input type="text" placeholder='New Comment' onChange={(e)=>setNewComment(e.target.value)} value={comment}/>
							<div className="career-main-main-newcomment-image" style={{opacity:open==i?1:0}}>
								<img src={send} alt="" onClick={()=>handleNewComment(data.id)}/>
							</div>
					</div>
				</div>
				)
			})}
		</div>
		</>}
	</div>
  )
}
