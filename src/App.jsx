import './App.css'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { Navigate, Route, Routes} from 'react-router-dom'
import UserProfile from './components/UserProfile'
import Feed from './components/Feed'
import Footer from './components/Footer'
import { userLogin } from './app/User'
import { useDispatch, useSelector } from 'react-redux'
import UpdateProfile from './components/UpdateProfile'
import Search from './components/Search'
import Home from './components/Home'
import Lenis from '@studio-freight/lenis'
import Career from './components/Career'
import News from './components/News'
import Events from './components/Event'
import Section from './components/Section'
import House from './components/House'
import NewHouse from './components/NewHouse'
import EditHouse from './components/EditHouse'

function App() {

  const lenis = new Lenis()
  lenis.on('scroll', () => {
      // console.log(e)
  })
  function raf(time) {
      lenis.raf(time)
  requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  const dispatch=useDispatch();
  dispatch(userLogin());
  const user=useSelector((state)=>state.user.user)
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/home' element={user?<Home/>:<Navigate to={"/login"}/>}/>
        <Route path='/section' element={user?<Section/>:<Navigate to={"/login"}/>}/>
        <Route path='/feed' element={user?<Feed/>:<Navigate to={"/login"}/>}/>
        <Route path='/career' element={user?<Career/>:<Navigate to={"/login"}/>}/>
        <Route path='/house' element={user?<House/>:<Navigate to={"/login"}/>}/>
        <Route path='/news' element={user?<News/>:<Navigate to={"/login"}/>}/>
        <Route path='/event' element={user?<Events/>:<Navigate to={"/login"}/>}/>
        <Route path='/login' element={!user?<Login/>:<Navigate to={"/home"}/>}/>
        <Route path='/register' element={!user?<Register/>:<Navigate to={"/home"}/>}/>
        <Route path='/profile' element={user?<UserProfile/>:<Navigate to={"/login"}/>}/>
        <Route path='/newhouse' element={user?<NewHouse/>:<Navigate to={"/login"}/>}/>
        <Route path='/edithouse' element={user?<EditHouse/>:<Navigate to={"/login"}/>}/>
        <Route path='/updateprofile' element={<UpdateProfile/>}/>
      </Routes>
    <Footer/>  
    </>
  )
}

export default App
