import './App.css'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './components/UserProfile'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={ <Register/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
      </Routes>
    <Footer/>  
    </>
  )
}

export default App
