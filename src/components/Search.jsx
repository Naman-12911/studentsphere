import '../css/Search.css'
import search from '../assets/search.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner'
export default function Search() {

	const navigate=useNavigate();
	const [input,setInput]=useState('');
	const [loading,setLoading]=useState(false);
	const [error,setError]=useState(false);
	const [data,setData]=useState();
	
	const handleSearch=()=>{
		setLoading(true)
		axios
			.get(`https://studentsphere-b734aba5fe3c.herokuapp.com/house/search/?name=${input}`)
			.then((response)=>{
				setData(response.data)
				console.log(response.data)
				setLoading(false)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setError(true)
				setLoading(false)
			})
	}
  return (
	<div className='search container'>
		{loading?<Spinner/>:
		<div className="search-main">
		<div className="search-main-top">
			<h1>SEARCH COLLEGE</h1>
			<div className="search-main-top-search">
				<input type="text" placeholder='Search College' onChange={(e)=>setInput(e.target.value)} value={input}/>
				<span></span>
				<img onClick={handleSearch} src={search} alt="" />
			</div>
		</div>
		<div className="search-main-bottom">
			{data && data.map((data)=>{
				return(
					<div key={data.id} className="search-main-bottom-main" onClick={()=>navigate("/login")}>
						<div className="search-main-bottom-main-image">
							<img src={data.image_urls} alt="" />
						</div>
						<h1>{data.name}</h1>
					</div>
				)
			})}
		</div>
	</div>
		}
		
	</div>
  )
}
