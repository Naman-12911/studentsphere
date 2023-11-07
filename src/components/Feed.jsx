import '../css/Feed.css'
import right from '../assets/right.svg'
export default function Feed() {
  return (
	<div>
		<div className="feed container">
			<div className="feed-main">
				<section className='feed-main-news'>
					<h1>NEWS</h1>
					<div className="feed-main-news-main">
						<div className="feed-main-news-main-main">
							<div className="feed-main-news-main-main-image">
								<img src="https://images.pexels.com/photos/3951353/pexels-photo-3951353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
							</div>
							<div className="feed-main-news-main-main-info">
								<h2>TITLE</h2>
								<p>areas of text</p>
							</div>
							<button>READ MORE <img src={right} alt="" /></button>
						</div>
					</div>
					<button>MORE NEWS</button>
				</section>
				<section className='feed-main-news'>
					<h1>EVENTS</h1>
					<div className="feed-main-news-main">
						<div className="feed-main-news-main-main">
							<div className="feed-main-news-main-main-image">
								<img src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
							</div>
							<div className="feed-main-news-main-main-info">
								<h2>TITLE</h2>
								<p>areas of text</p>
							</div>
							<button>READ MORE <img src={right} alt="" /></button>
						</div>
					</div>
					<button>MORE EVENTS</button>
				</section>
				<section className='feed-main-news'>
					<h1>CAREER</h1>
					<div className="feed-main-news-main">
						<div className="feed-main-news-main-main">
							<div className="feed-main-news-main-main-image">
								<img src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
							</div>
							<div className="feed-main-news-main-main-info">
								<h2>TITLE</h2>
								<p>areas of text</p>
							</div>
							<button>READ MORE <img src={right} alt="" /></button>
						</div>
					</div>
					<button>MORE CAREER</button>
				</section>
			</div>
		</div>
	</div>
  )
}
