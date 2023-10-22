import '../css/UserProfile.css'
import plus from '../assets/plus.svg'
import update from '../assets/update.svg'

export default function UserProfile() {
  return (
	<div>
		<div className="userprofile container">
			<div className="userprofile-main">
				<div className="userprofile-main-top" style={{backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover",background: "rgb(0,0,0)",backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.4520308123249299) 0%, rgba(255,255,255,0) 100%),url(https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"}}>
					<div className="userprofile-main-top-main">
						<div className="userprofile-main-top-main-left">
							<div className="userprofile-main-top-main-left-image">
								<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
							</div>
							<div className="userprofile-main-top-main-left-info">
								<h1>Jack Tyson</h1>
								<div className="userprofile-main-top-main-left-info-socials">
									<div className="socials">
										<img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
									</div>
									<div className="socials">
										<img src="https://play-lh.googleusercontent.com/A-Rnrh0J7iKmABskTonqFAANRLGTGUg_nuE4PEMYwJavL3nPt5uWsU2WO_DSgV_mOOM" alt="" />
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
							<button><img src={update} alt="" />UPDATE PROFILE</button>
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
						<h1>USER&#39;s DETAILS</h1>
						<span></span>
						<p><b>NAME : </b>Jack Tyson</p>
						<p><b>AGE : </b></p>
						<p><b>DOB : </b></p>
						<p><b>COLLEGE ID : </b></p>
						<p><b>PHONE NO : </b></p>
						<p><b>EMAIL : </b></p>
						<p><b>STUDENT ID : </b></p>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
