import '../css/UpdateProfile.css'

export default function UpdateProfile() {

	const handleUpdate=(e)=>{
		e.preventDefault();
		console.log("working")
	}
  return (
	<div className="updateprofile container">
		<div className="updateprofile-main">
			<h1>UPDATE PROFILE</h1>
			<form onSubmit={handleUpdate}>
				<div className="updateprofile-main-form">
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="updateprofile-main-form-main">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
				</div>
				<button type='submit'>COMFIRM UPDATE</button>
			</form>
		</div>
	</div>
  )
}
