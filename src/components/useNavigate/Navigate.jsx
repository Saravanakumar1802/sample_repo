import React from 'react'
import Home from './Home'
import About from './About'
import App from '../../App'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'

const Navigate = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Link to='/home'>Home </Link>&nbsp; &nbsp;
        <Link to='/about'>About </Link>
        <Link to='/project'>project </Link>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/project' element={<App/>} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Navigate