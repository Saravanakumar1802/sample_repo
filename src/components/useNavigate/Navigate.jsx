import React from 'react'
import Home from './Home'
import About from './About'
import App from '../../App'
import Signin from '../params/Signin'
import States from '../States'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'

const Navigate = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Link to='/home'>Home </Link>&nbsp; &nbsp;
        <Link to='/about'>About </Link>&nbsp; &nbsp;
        <Link to='/project'>useNavigate </Link>&nbsp; &nbsp;
        <Link to='/signin'>UsePrams </Link>&nbsp; &nbsp;
        <Link to='/usestate'>useState </Link>&nbsp; &nbsp;
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/project' element={<App/>} />
          <Route path='/signin/:name' element={<Signin/>} />
          <Route path='/usestate' element={<States/>} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Navigate