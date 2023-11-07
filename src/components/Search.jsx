import '../css/Search.css'
import search from '../assets/search.svg'
import { useNavigate } from 'react-router-dom'
export default function Search() {
	const navigate=useNavigate();
  return (
	<div className='search container'>
		<div className="search-main">
			<div className="search-main-top">
				<h1>SEARCH COLLEGE</h1>
				<div className="search-main-top-search">
					<input type="text" placeholder='Search College'/>
					<span></span>
					<img src={search} alt="" />
				</div>
			</div>
			<div className="search-main-bottom">
				<div className="search-main-bottom-main" onClick={()=>navigate("/login")}>
					<div className="search-main-bottom-main-image">
						<img src="https://www.vassar.edu/admission/assets/images/journey/0256-19-10-ja-library-lawn-vassar-vb-038.jpg" alt="" />
					</div>
					<h1>Vassar College</h1>
				</div>
				<div className="search-main-bottom-main" onClick={()=>navigate("/login")}>
					<div className="search-main-bottom-main-image">
						<img src="https://jkeducation.com/media/2015_10_24_VictorDrone_DJI_0514_-_Joe_Giacalone.jpg" alt="" />
					</div>
					<h1>Marist College</h1>
				</div>
				<div className="search-main-bottom-main" onClick={()=>navigate("/login")}>
					<div className="search-main-bottom-main-image">
						<img src="https://www.thoughtco.com/thmb/HrQZNoTUjL96ejZjFlmMCq_EFbI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/suny-administration-building-in-albany--new-york-186654021-1e49bcdc84a94d4eb49e8d8839016273.jpg" alt="" />
					</div>
					<h1>State University of New York at New Paltz</h1>
				</div>
				<div className="search-main-bottom-main" onClick={()=>navigate("/login")}>
					<div className="search-main-bottom-main-image">
						<img src="https://www.suny.edu/media/suny/content-assets/images/campus-profiles/pics/dutchess-campus-banner.jpg" alt="" />
					</div>
					<h1>Dutchess Community College</h1>
				</div>
			</div>
		</div>
	</div>
  )
}
