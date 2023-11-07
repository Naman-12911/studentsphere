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
        <Route path='/home' element={<Home/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/event' element={<Events/>}/>
        <Route path='/login' element={!user?<Login/>:<Navigate to={"/home"}/>}/>
        <Route path='/register' element={!user?<Register/>:<Navigate to={"/home"}/>}/>
        <Route path='/profile' element={user?<UserProfile/>:<Navigate to={"/login"}/>}/>
        <Route path='/updateprofile' element={<UpdateProfile/>}/>
      </Routes>
    <Footer/>  
    </>
  )
}

export default App
